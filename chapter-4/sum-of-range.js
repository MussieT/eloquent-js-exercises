"use strict";

function sum(listOfArray) {
  let sumOfArray = 0;

  for (let x in listOfArray) {
    sumOfArray += listOfArray[x];
  }

  return sumOfArray;
}

function range(initial, end, step = 1) {
  let arr = [];

  if (step < 0) {
    for (let i = initial; i >= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = initial; i <= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
}

module.exports = {
  sum,
  range,
};
