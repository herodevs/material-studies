# Steeps to test schematics

- build the schematics library locally
 - `nx workspace-schematic fortnightly-prep`

- Pack the library
 - `cd libs/schematics`
 - `npm pack`

- Copy to your Angular workspace
 - `cp fortnightly-*.*.*.tgz {YOUR_ANGULAR_WORKSPACE}`

- Install and run the schematics
 - `npm i --save-dev fortnightly-*.*.*.tgz`
 - ` ng g .\node_modules\@herodevs\fortnightly\src\collection.json:fortnightly`

- serve your project
 - `ng serve`