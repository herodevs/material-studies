import { join, normalize, split, strings } from '@angular-devkit/core';
import {
  apply,
  applyTemplates,
  chain,
  externalSchematic,
  mergeWith,
  move,
  url,
  Rule,
  SchematicContext,
  Tree,
  MergeStrategy
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Schema } from './schema';
import { getWorkspace } from './workspace';

export default function (options: Schema): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const appOptions = {
      projectRoot: options.projectRoot,
      name: options.name,
      prefix: options.prefix,
      style: 'scss',
      routing: true
    };

    const workspace = await getWorkspace(tree);
    const newProjectRoot = workspace.extensions.newProjectRoot as (string | undefined) || '';

    const isRootApp = options.projectRoot !== undefined;
    const appDir = isRootApp
      ? normalize(options.projectRoot || '')
      : join(normalize(newProjectRoot), strings.dasherize(options.name));


    // ensure Angular Material & CDK are installed
    context.addTask(new NodePackageInstallTask({ packageName: '@angular/cdk' }));
    context.addTask(new NodePackageInstallTask({ packageName: '@angular/material' }));

    return chain([
      // external schematic for application
      externalSchematic('@schematics/angular', 'application', appOptions),
      // template out app specific files (ensure overwrite)
      mergeWith(
        apply(url('./files'), [
          applyTemplates({
            ...options,
            relativePathToWorkspaceRoot: relativePathToWorkspaceRoot(appDir),
            appName: options.name,
            isRootApp,
          }),
          move(appDir),
        ]), MergeStrategy.Overwrite),
    ]);
  };
}

function relativePathToWorkspaceRoot(projectRoot: string | undefined): string {
  const normalizedPath = split(normalize(projectRoot || ''));

  if (normalizedPath.length === 0 || !normalizedPath[0]) {
    return '.';
  } else {
    return normalizedPath.map(() => '..').join('/');
  }
}
