# Appointments Component Library

This is a component library that provides reusable UI components from the appointments application.

## Installation

```bash
npm install appointments-components
```

### Scripts

This library contains the following scripts:

#### Build

Build is used tTo compile and optimize the component library for production or deployment. It generates bundled JavaScript files and type definitions, making your library ready to be used by others.

```bash
npm run build
```

#### Testing

The library uses a Jest test suite to maintain tests. The following script will run the tests for the library by executing two sub-scripts: test:ts and test:jest. The test:ts script uses TypeScript Compiler (tsc) to check the TypeScript code for errors, and the test:jest script runs the tests using Jest.

```bash
npm run test
```

#### Format

The library follows the prettier formatting convention. The script below can be run to format all files inside of the `src` directory and is advised before committing.

```bash
npm run format
```

#### Storybook

The library is documented using Storybook 7. Running storybook will start the storybook server allowing you to test components in isolation.

```bash
npm run storybook
```

### Dependencies

##### Required Peer Dependencies

These libraries are not bundled with Appointments Components and required at runtime:

- [**react**](https://www.npmjs.com/package/react)
- [**react-dom**](https://www.npmjs.com/package/react-dom)
