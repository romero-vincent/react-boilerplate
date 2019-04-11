# ApeX — A React Boilerplate

Not so typical React boilerplate.

## Overview
 
Built providing a better development workflow; either you are building a

* **React App,** or a
* **React Component Library**

This boilerplate will have you coding in minutes — no need to *monkey around* configurations.

## Dependencies

* **Babel**
* **Jest + Enzyme** promotes TDD
* **Storybook** provides a focused UI development
* **Webpack** an extensible bundler for either your app/library

## Structure

```
.storybook/config.js ——————————————— # Configured to match `*.stories.js` files
.enzyme/config.js
.jest/config.js
.babelrc
.webpack.config.js
.webpack/      ————————————————————— # Webpack configs 
|—— common.js
|—— common.paths.js
|—— config.dev.js   ———————————————— # Configs only for local development
|—— config.prod.js


src/
|—— components/
|   |—— Button.stories.jsx  ———————— # Component Story; used in Storybook
|   |—— Button.test.jsx ———————————— # Component Unit Test (Jest + Enzyme) 
|   |—— Button.jsx   ——————————————— # Component
|    
|—— index.jsx   ———————————————————— # Application Entry
|—— App.jsx ———————————————————————— # Application Init
|—— template.html   ———————————————— # Application Page Template
```

## Quick Start

Note: The following uses `yarn` to execute scripts defined in `package.json`

#### Installation

```
# install development dependencies
$ yarn install
```

#### Start Server

```
# start development server
$ yarn start
```

#### Build Components

```
# Run Storybook for isolated and focused UI development
$ yarn storybook

# Test Components with Jest + Enzyme
$ yarn test
```

#### Build Redux-React App

1. 
