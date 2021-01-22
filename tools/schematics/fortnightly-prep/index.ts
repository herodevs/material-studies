import { join, normalize, Path } from '@angular-devkit/core';
import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function (_options: any): Rule {
  return chain([
    moveProjectFiles()
  ]);
}

const sourceRoot = '/apps/fortnightly/src' as const;
const destRoot = '/libs/schematics/src/fortnightly-app/files/src' as const;
let x: SchematicContext;

function moveProjectFiles() {
  return (tree: Tree, context: SchematicContext) => {
    x = context;

    // ensure the destination dir is empty
    let destDir = tree.getDir(normalize(destRoot));
    destDir.visit(file => tree.delete(file));

    copyFile(tree, 'index.html');
    copyFile(tree, 'styles.scss');
    copyFile(tree, 'theming-fortnightly.scss');
    copyDir(tree, 'app');
    copyDir(tree, 'assets');
    copyDir(tree, 'environments');

    const filesToRename: Path[] = [];
    destDir.visit(file => {
      if (file.endsWith('.component.ts') ||
        file.endsWith('.directive.ts') ||
        file.endsWith('.html')) {
        updateFile(tree, file, updatePrefix);
      }
      filesToRename.push(file);
    });

    filesToRename.forEach(file => {
      tree.rename(file, file + '.template');
    });
  };

}

function updatePrefix(contents: string): string {
  return contents
    .replace(/selector: 'msc\-/g, `selector: '<%= prefix %>-`)
    .replace(/<msc\-/g, '<<%= prefix %>-')
    .replace(/<\/msc\-/g, '</<%= prefix %>-')
    .replace(/selector: '\[msc/g, `selector: '[<%= prefix %>`)
    .replace(/\[msc/g, '[<%= prefix %>');
}

function updateFile(tree: Tree, path: Path, fn: (string) => string): void {
  const buffer = tree.read(path);
  if (buffer === null) {
    return;
  }
  const contents = buffer.toString();
  const updatedContents = fn(contents);
  tree.overwrite(path, updatedContents);
}

function copyFile(tree: Tree, path: string, contentFix?: (s: string) => string) {
  const buffer = tree.read(join(normalize(sourceRoot), path));
  const origContents = buffer.toString();
  const contents = !!contentFix ? contentFix(origContents) : origContents;
  tree.create(join(normalize(destRoot), path), contents);
}

function copyDir(tree: Tree, dirPath: string) {
  const dir = tree.getDir(join(normalize(sourceRoot), dirPath));
  dir.visit((file) => {
    copyFile(tree, file.replace(sourceRoot, ''));
  });
}
