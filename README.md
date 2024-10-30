# soccer-football

A simple utility for distinguishing between users who say _soccer_ and those who say _football_.

## Installation

Install the package with your preferred package manager.

```bash
npm install soccer-football
pnpm add soccer-football
yarn add soccer-football
```

## Usage

Simply import the `isSoccer` utility into any frontend module in your application, and call it!

**Example in Typescript**

```typescript
import { isSoccer } from `soccer-football`;

export default function localizeFootball(): string {
  return isSoccer() ? "soccer" : "football".
}
```

**Example in Javascript**

```javascript
const { isSoccer } = require("soccer-football");

export default function localizeFootball() {
  return isSoccer() ? "soccer" : "football";
}
```

## License

Licensed under the [MIT License](https://github.com/plettj/soccer-football/blob/main/LICENSE)
