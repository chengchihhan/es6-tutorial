const test = [
  {
    name: 'XXXXX',
    sex: 'male',
    years: 30
  },
  {
    name: 'QQQQQ',
    sex: 'female',
    years: 20
  },
  {
    name: 'BBBBB',
    sex: 'undefined',
    years: 15
  }
];

function findAll() {
  return new Promise((resolve, reject) => {
    if (test) {
      resolve(test);
    }
    return reject('oh nonono!');
  });
}

export { test, findAll };
