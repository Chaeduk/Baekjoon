function solution(lottos, win_nums) {
  let hide = 0;
  let worst_rank = 7;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] == 0) {
      hide++;
    }
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] == win_nums[j]) {
        worst_rank--;
      }
    }
  }

  if (worst_rank == 7) {
    worst_rank--;
  }
  let best_rank = worst_rank;
  if (best_rank <= hide) {
    best_rank = 1;
  } else {
    best_rank -= hide;
  }

  var answer = [];
  answer.push(best_rank);
  answer.push(worst_rank);

  return answer;
}
