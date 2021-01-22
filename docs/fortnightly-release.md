# Steps to release the Fortnightly schematics

## Manual Steps

- clone the repo
- npm install
- run the local prep schematic
  - nx workspace-schematic fortnightly prep
- build the schematics library locally
  - cd into `libs/schematics`
  - npm install
  - npm run build
- publish `libs/schematics` dir to npm

## Automated Steps

- clone the repo
- from the project root dir run `node scripts/fortnightly-release`
- cd into `libs/schematics`
- publish `libs/schematics` dir to npm
