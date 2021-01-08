# Installation

```
npm install string-progress
```

# Usage

```js
const { createBar } = require('string-progress');

console.log(createBar(total, current, options));
```

# Examples

```js
const { createBar } = require('string-progress');

console.log(createBar(100, 40)); // ▬▬▬▬▬▬▬🔘▬▬▬▬▬▬▬▬▬▬▬▬
```

```js
console.log(createBar(100, 40, {
  slider: '>',
  line: '='
})); // =======>============
```

```js
console.log(createBar(100, 1, {
  size: 40,
  slider: '🔵'
}); // 🔵▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
```
