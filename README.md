# population-display

## Description
A visualizer of the population of prefectures from year 1960 to 2045(estimated)

## Prerequisites
* npm: v8.1.0
* node: v17.0.1
* highcharts-vue: v1.4.0
* vue: v3.2.37
* vue-router: 4.0.16


## Installation
### Project Setup
```sh
npm install
```

### Compile and Hot-Reload for Development
```sh
npm run dev
```

### Type-Check, Compile and Minify for Production
```sh
npm run build
```


### Lint with [ESLint](https://eslint.org/)
```sh
npm run lint
```

### Format files with [Prettier](https://prettier.io)
```sh
npm run format
```

### Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS
TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).


## Details
### Overview
1. Starts up with the descripition of the website
2. When the button is clicked, the list of prefectures
3. When the checkbox next to each prefecture is selected, 

### File components
```
src
├ api
│ └ apiRequest.ts
│       - all the methods/functions that pulls data from API
├ components
│ ├ methods
│ │ ├ PrefectureSelectorMethods.ts
│ │       - All the functions used in PrefectureSelector.vue
│ │ └ GraphVisMethods.ts
| |       - All the functions used in GraphVis.vue
│ ├ MainView.vue
| |     - Container for visualization page
│ ├ StartPage.vue
| |     - Container for startup page
│ ├ PrefectureSelector.vue
| |     - Container for prefecture selection
│ └ GraphVis.vue
|       - Container for graphing selected prefectures
├ router
│ └ index.ts
├ App.vue
├ Types.ts
|     - Module for storing types that will be used all around,
|       such as types for prefecture data and population data
└ main.ts
```
## Coding convension used
### HTML
* id tags are written with underscore separation
* class tags are written with hyphen separation

### CSS
* Apart from App.vue, selectors will be written with element and specifier in tandum
  * example: `<div class="separator"></div>` will be specified with `div.separator`
* Responsivity will be customized mobile size first

### TypeScript
* All names are written with camel case
* class names are all capitalized or the first letter is capitalized
* Read only variables are written with all caps
* Each statements ends with a semicolon for readability