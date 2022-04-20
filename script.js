function solution(str) {
  let strLen = str.length
  let newArr = []

  if(strLen%2 === 1) {
    str = str + "_"
  }
  for (let i=0; i<str.length; i += 2) {
    newArr.push(str[i] + str[i+1])
  }

  console.log(newArr)
  return newArr
}

solution('asddwerev')