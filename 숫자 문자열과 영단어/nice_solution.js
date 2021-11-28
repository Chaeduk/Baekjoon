function solution(s) {
  let numbers = [
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
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]); //자를 수있다면 자르고
    answer = arr.join(i); //잘라졌을 경우 그것은 문자로 된 숫자이므로 그곳에 숫자 대입
  }

  return Number(answer);
}
