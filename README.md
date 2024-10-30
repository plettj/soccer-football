# soccer-football

A simple utility for distinguishing between users who say _soccer_ and those who say _football_.

It relies on time zones. IP addresses are off limits as external APIs are not lightweight enough for this humble package... unless [you find a way](#contributing) to geo-locate website visitors without external overhead!

## Installation

Install from [npm](https://www.npmjs.com/package/soccer-football) with your preferred package manager.

```bash
npm i soccer-football
```

## Usage

Simply import the `isSoccer` utility into any frontend module in your application.

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

## Contributing

I welcome any PRs to the [soccer-football repo](https://github.com/plettj/soccer-football#readme), and will happily merge them if they're:

- Practical
- Thoroughly tested
- Lightweight

## License

Licensed under the [MIT License](https://github.com/plettj/soccer-football/blob/master/LICENSE)
