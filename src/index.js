module.exports = function reverse (n) {

  const str = Math.abs(n).toString()
  let ret = ''
  for(let i = str.length-1; i>=0;i--){
      ret = ret + str[i]
  }
  const i = +ret
  return i
}

