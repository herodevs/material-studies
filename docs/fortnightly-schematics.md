# Steeps to test schematics

- build the schematics library locally
 - `cd libs/schematics`
 - `npm run build`

- Pack the library
 - `npm pack`

- Copy to your Angular workspace
 - `cp fortnightly-*.*.*.tgz {YOUR_ANGULAR_WORKSPACE}`

- Install and run the schematics
 - `npm i --save-dev fortnightly-*.*.*.tgz`
 - `ng g .\node_modules\fortnightly\src\collection.json:fortnightly`

- serve your project
 - `ng serve`