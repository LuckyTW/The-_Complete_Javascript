'use strict';

// const Bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   Bookings.push(booking);
// };

// createBooking('LG123');
// createBooking('LG123', 2, 800);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas'
//   passport: 24739488
// }

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999'
//   passenger.name = 'Mr.' + passenger.name;

//   if(passenger.passport === 24739488) {
//     alert('check in')
//   } else {
//     alert('wrong passport!')
//   }
// }

// checkIn(flight, jonas)

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
