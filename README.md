# TypeScript starter for Next.js

## Features

- ⚡️ Next.js 12
- ⚛️ React 17
- ⛑ TypeScript
- 🎉 Jest
- 💣 React Testing Library
- 🗂 Storybook
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🚫 Stylelint - Style formatter and fix problems in your code
- 🥁 SASS

### Development

To start the project locally, run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

The app is tested with [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library).

There are 4 scripts to test the app:

- `test`: Tests the app, will close on success or fail.
- `test:watch`: Tests the app but keeps running, will automaticaly run the test for the modified files.
- `test:update`: Tests the app and is used to update snapshots (if any).
- `test:coverage`: Tests the app and creates a coverage reporter.

To test a single file just add the path to the end of the comment like:

```bash
yarn test:update src/components/header/__tests__/component.spec.tsx
```

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, check the file `tsconfig.json`

```tsx
import { Icon } from 'components/Icon';
```
