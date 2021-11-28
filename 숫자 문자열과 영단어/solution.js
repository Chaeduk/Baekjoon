function solution(s) {
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let x = s;
  let n = s;
  for (let i = 0; i < word.length; i++) {
    const regexp1 = new RegExp(word[i], "g");
    const regexp2 = new RegExp(number[i], "g");
    x = x.replace(regexp1, word[i] + ",");
    x = x.replace(regexp2, number[i] + ",");
    n = n.replace(regexp1, ".");
    n = n.replace(regexp2, "*");
  }
  x = x.split(",");
  var answer = 0;
  answer = "";

  for (let i = 0; i < n.length; i++) {
    if (n[i] == "*") {
      answer += x[i];
    } else if (n[i] == ".") {
      const changeIndex = word.findIndex((e) => e == x[i]);
      answer += number[changeIndex];
    }
  }

  return Number(answer);
}
