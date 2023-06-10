function add(num) {
    let sum = num;
  
    function addNext(nextNum) {
      sum += nextNum;
      return addNext;
    }
  
    addNext.toString = function () {
      return sum;
    };
  
    return addNext;
  }
  
  console.log(add(2)(5)(7)(1)(6)(5)(11));
  