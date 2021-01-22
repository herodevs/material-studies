const execSync = require('child_process').execSync;

prepareFortnightlySchematics();
buildFortnightlySchematics();

function prepareFortnightlySchematics() {
  execSync('npm install && npx nx workspace-schematic fortnightly-prep', {
    cwd: `${__dirname}/..`,
    stdio: 'inherit',
  });
}

function buildFortnightlySchematics() {
  execSync('npm install && npm run build', {
    cwd: `${__dirname}/../libs/schematics`,
    stdio: 'inherit',
  });
}
