
function solution(S) {
    // Implement your solution here
    // sort the string
    let sorteds = S.split("").sort().join("");
    let count =0;
    let cou = [];
    let co = [];
    for(let i = 0; i < sorteds.length; i++){
        co.push(sorteds[i]);
        if(sorteds[i]!== sorteds[i + 1]){
            cou.push(co);
            co = [];
        }
    }
    //Divide single array into two parts
    let parts = [];
    for(let i = 0; i < cou.length; i++){
        let me = divideStringIntoEqualAndCharacterSeparatedParts(cou[i]);
        parts.push(me);
    }
    parts.forEach(subArray => {
  subArray.forEach(str => {
      if(str.length % 2 !== 0){
          count++;
      }
  });
});
    return count;
}

function divideStringIntoEqualAndCharacterSeparatedParts(inputString) {
  const parts = [];
  let currentPart = '';

  for (let i = 0; i < inputString.length; i++) {
    if (i === 0 || inputString[i] === inputString[i - 1]) {
      currentPart += inputString[i];
    } else {
      parts.push(currentPart);
      currentPart = inputString[i];
    }
  }

  if (currentPart) {
    parts.push(currentPart);
  }

  return parts;
}

console.log(solution("aaaa"));
console.log(solution("aaccbbab"));
console.log(solution("aaxxax"));
