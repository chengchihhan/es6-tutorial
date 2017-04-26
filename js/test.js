let test = [
  {
    "name": "XXXXX",
    "sex": "male",
    "years": "30"
  },
  {
    "name": "QQQQQ",
    "sex": "female",
    "years": "20"
  },
  {
    "name": "BBBBB",
    "sex": "undefined",
    "years": "15"
  }
];

export let findAll = () => new Promise((resolve, reject) => {
  if (test) {
    resolve(test);
  };
  reject("No test");
})