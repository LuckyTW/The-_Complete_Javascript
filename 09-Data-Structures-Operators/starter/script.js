'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

//spread operator , 배열 오른쪽 위치
// arr = [1, 2, ...[3, 4, 5]];

//Rest operator,왼쪽 위치
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
//basic concepts
// const arr = [2, 3, 4];

// // const [x, y, z] = arr;
// // console.log(x, y, z); //2 3 4
// // console.log(arr); //  [2, 3, 4]

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Vegetarian

// //Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); //Vegetarian Italian

// [secondary, main];
// [main, secondary] = [secondary, main];
// console.log(main, secondary); //Italian Vegetarian

// // console.log(restaurant.order(2, 0));

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); //Garlic bread pizza
// console.log(starter); //Garlic bread

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k); // 2, 5, 6

// // Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r); // 8, 1, 1

// //destructring in obj >> 배열과는 다르게 key이름을 그대로 가저다 써줘야함.
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories); //

// //새로운 이름을 부여하고 싶은 경우
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //setting a default value. 디폴트값 설정 안해주는 경우 > undefined 뜸
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // 소괄호를 꼭 해줘야함!
// console.log(a, b); // 23, 7

// //Nested objects
// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open: o, close: c }, // 중괄호 안에 정확한 값을 넣어줌
// } = openingHours;
// console.log(o, c); // 11 23

// console.log('---------------');

// //spread Operator
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr); //[1,2,7,8,9]
// console.log(...newArr); // 1, 2, 7, 8, 9

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // 기존 배열을 바꾸지 않고 새로운 배열을 만든다.
// console.log(newMenu);
// // destructuring 과의 차이점 >> 1) 모든 배열의 요소를 추출 2) 새로운 변수를 만들지 x

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu1);

// //연습;
// // const [a, b, ...rest] = [10, 20, 30, 40, 50];
// // console.log(rest);

// //Iterables: arrays, strings, maps, sets. but not objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// //["J", "o", "n", "a", "s", " ", "S."]
