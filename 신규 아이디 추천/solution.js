function solution(new_id) {
  let id = new_id.toLowerCase();
  var answer = "";
  const possible = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    ".",
    "_",
    "-",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  for (let i = 0; i < id.length; i++) {
    for (let j = 0; j < possible.length; j++) {
      if (id[i] == possible[j]) {
        answer += id[i];
      }
    }
  }
  id = answer;
  answer = "";
  for (let i = 0; i < id.length; i++) {
    if (i == id.length - 1 && id[i] == ".") {
      continue;
    }
    if (!(id[i] == "." && id[i + 1] == ".")) {
      if (answer == "" && id[i] == ".") {
        continue;
      }
      answer += id[i];
    }
  }

  if (answer == "") {
    answer = "aaa";
  } else if (answer.length < 3) {
    let t = 3 - answer.length;
    while (t) {
      answer += answer[answer.length - 1];
      t--;
    }
  } else if (answer.length > 15) {
    answer = answer.slice(0, 15);
    id = answer;
    answer = "";
    for (let i = 0; i < id.length; i++) {
      if (i == id.length - 1 && id[i] == ".") {
        continue;
      }
      if (!(id[i] == "." && id[i + 1] == ".")) {
        answer += id[i];
      }
    }
  }

  return answer;
}
