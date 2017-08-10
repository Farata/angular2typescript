// ES5 and arguments object
  function calcTaxES5(){

      console.log("ES5. Calculating tax for customers with the income ",
                             arguments[0]);   // income is the first element

      // extract an array starting from 2nd element
      var customers = [].slice.call(arguments, 1);

      customers.forEach(function (customer) {
          console.log("Processing ", customer);
      });
  }

  calcTaxES5(50000, "Smith", "Johnson", "McDonald");
  calcTaxES5(750000, "Olson", "Clinton");

// ES6 and rest operator
  function calcTaxES6(income, ...customers) {
      console.log("ES6. Calculating tax for customers with the income ", income);

      customers.forEach(function (customer) {
          console.log("Processing ", customer);
      });
  }

  calcTaxES6(50000, "Smith", "Johnson", "McDonald"); 
  calcTaxES6(750000, "Olson", "Clinton");