const array: string[] = ["one", "two", "three"];
const resultsPromise = runSequent(array, (item, index) =>
  Promise.resolve({
    item,
    index,
  })
);

resultsPromise.then((results) => {
  console.log(results);
});
