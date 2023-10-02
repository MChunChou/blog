# Bulls and Cows

Bulls and Cows  猜數字 (1A2B)
Input: secret: 1907, guess: 7810
Output: 1A3B

```js
function getHint(secret, guess) {
  const length = secret.length;
  let A = 0;
  let B = 0;

  const hashMapA = {};
  const hashMapB = {};
  for (let i = 0; i < length; i++) {
    if (secret[i] === guess[i]) {
      A++;
      continue;
    }

    if (hashMapA[guess[i]]) {
      hashMapA[guess[i]] -= 1;
      B++;
    }

    if (hashMapB[secret[i]]) {
      B++;
      hashMapB[secret[i]] -= 1;
    }

    hashMapB[guess[i]] = (hashMapB[guess[i]] ? hashMapB[guess[i]] : 0) + 1;
    hashMapA[secret[i]] = (hashMapA[secret[i]] ? hashMapA[secret[i]] : 0) + 1;
  }

  return `${A}A${B}B`;
}

```