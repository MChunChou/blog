# Binary Watch

Binary Watch
top 4 led
bottom 6 led

```js

const binaryWatch = (turnOn) => {
  const result = [];
  if (turnOn >= 9 || turnOn == 0) {
    return result;
  }

  const top = [8, 4, 2, 1];
  const bottom = [32, 16, 8, 4, 2, 1];

  const dns = (turn, timeStr) => {
    if (turn === turnOn) {
      result.push(timeStr);
      return;
    }
  };

  dns(0, "");
  return result;
};

```
