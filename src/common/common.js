export function stringWitoutSpace(input) {
  let ans = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] != " ") ans += input[i];
  }
  return ans;
}
