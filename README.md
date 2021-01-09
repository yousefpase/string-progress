# Installation

```
npm install string-progress
```

# Usage

```js
const { format } = require('string-progress');

console.log(format(seconds));
```

```js
const { createBar } = require('string-progress');

console.log(createBar(total, current, options));
```

# Examples

### Format Seconds

```js
const { format } = require('string-progress');

console.log(format()); // 00:00
```

```js
console.log(format(20)); // 00:20

console.log(format(120)); // 02:00

console.log(format(3600)); // 01:00:00
```

### String Bar

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
