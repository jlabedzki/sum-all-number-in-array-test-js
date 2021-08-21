const sumItems = array => {
  let sum = 0;
  array.forEach(e => {
    if (Array.isArray(e)) {
      sum += sumItems(e);
    } else {
      sum += e;
    }
  });
  return sum;
};

console.log(sumItems([1, 2, 3, 4, 4, 4, 5]));

module.exports = sumItems;