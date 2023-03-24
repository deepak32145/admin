const str = "helloworld";
const chararr = [];
for (let i = 0; i < str.length; i++) {
  if (!chararr.includes(str[i])) {
    chararr.push(str[i]);
  }
}
console.log(chararr);
