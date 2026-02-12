# Phone Numbers

====== Phone Numbers ======

0 \<= digits.length \<= 4
digits[i] is a digit in the range ['2','9']

```js
function phoneNums(digits) {
  const setting = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result = [];
  const digitsLen = digits.length;
  const dns = (pos, str) => {
    if (pos === digitsLen) {
      result.push(str);
      return;
    }

    for (let i = 0; i < setting[digits[pos]].length; i++) {
      dns(pos + 1, str + setting[digits[pos]][i]);
    }
  };

  dns(0, "");

  return result;
}

console.log(phoneNums("234"));
console.log(phoneNums("2"));

```