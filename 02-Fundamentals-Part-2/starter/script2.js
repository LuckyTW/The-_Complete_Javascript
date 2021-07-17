const friends = ['Michale', 'Rocky', 'Lucky'];
let newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

friends.pop();
friends.pop();
console.log(friends);

let newv = friends.shift();
console.log(friends);
console.log(newv);

console.log(friends.indexOf('Rocky'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Rocky'));
