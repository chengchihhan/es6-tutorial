let rates = [
  {
    "name": "55 years fixed test",
    "rate": "4",
    "years": "12"
  },
  {
    "name": "33 years fixed test",
    "rate": "42",
    "years": "32"
  }
];

export let findAll = () => new Promise((resolve, reject) => {
  if (rates) {
    resolve(rates);
  };
  rejects("No rates");
});