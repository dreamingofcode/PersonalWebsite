import React, { useState, useEffect } from 'react';

const TwoSums = () => {


  const handleChange = (event) => {
      const input= event.target.value
    event.target.name === 'array'
      ? setArray(input)
      : setGoalSum(input);
  };
  //start with first number on the array, check if the sum adds up to sum total, if no, check the second number and so forth until done looping
  const handleTwoSums = (event) => {
    event.preventDefault();
    const last= array.slice(-1)[0]

    if (array[0] !== "[" || last !== "]"){
        alert("Please make sure the array DOES include brackets!")
    }
    console.log(array,goalSum)
for( let i=0;array.length > i; i++){
    if(array[i]== goalSum){
        console.log(array)
    } else if (array[i]+array[i+1]=== goalSum){
       console.log(array[i],array[i+1])
   } else{
      return array.slice(1)[0]
       console.log(array)

   }
}
  };
  const [array, setArray] = useState([]);
  const [goalSum, setGoalSum] = useState();
  
  return (
    <div className="col col-4 ">
      {' '}
      <h1>Two-Number Sum!</h1>
      <p>
        This Algorithm takes in any array of numbers and a desired target sum
        and will check for pairs which will generate the sum.
      </p>
      <form
        onSubmit={(event) => {
          handleTwoSums(event);
        }}
      >
        <input
          type="text"
          placeholder="Array with Brackets"
          name="array"
          onChange={handleChange}
          value={array}
        ></input>

        <input
          type="text"
          placeholder="Target Sum"
          name="targetSum"
          onChange={handleChange}
          value={goalSum}
        ></input>

        <input type="submit"></input>
      </form>
    </div>
  );
};
export default TwoSums;
