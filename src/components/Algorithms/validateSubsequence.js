import React, { useState, useEffect } from 'react';
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardMenu,
  CardActions,
  IconButton,
  Button,
} from 'react-mdl';
import SourceCodeModal from './sourceCode';

const ValidateSubsequence = (props) => {
  const [array, setArray] = useState();
  const [targetSum, setTargetSum] = useState();
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    props.setSourceCodeTitle("Validate Subsequence")
 props.setSourceImage('https://media.giphy.com/media/l0MYO6VesS7Hc1uPm/giphy.gif')
    const input = event.target.value;
    event.target.name === 'array' ? setArray(input) : setTargetSum(input);
    console.log(array, targetSum);
  };
  //start with first number on the array, check if the sum adds up to sum total, if no, check the second number and so forth until done looping

  const handleTwoSums = (event, array, targetSum) => {
    event.preventDefault();
    const nums = {};
    const answer = [];
    for (let i = 0; array.length > i; i++) {
      const match = targetSum - array[i];
      if (match in nums) {
        answer.push([match, parseInt(array[i])]);
        console.log(answer);

        // setResult("[" + [match, array[i]] + "]");
        // return [match, array[i]];
      } else {
        nums[array[i]] = false;
      }
    }
    setResult('[' + `${answer[0]}` + ']' + ',' + '[' + answer[1] + ']');
    return [];
  };
  return (
    <div className="col col-4 ">
      <Grid>
        <Cell col={12} phone={12} tablet={12}>
          <Card
            shadow={10}
            style={{
               width: 'fit-content',
              margin: 'auto',
              marginBottom: '100px',
            }}
            onMouseOver={handleChange}
          >
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://media.giphy.com/media/3oz8xxk2FeG62l12Tu/giphy.gif) center / cover',
              }}
            >
              <h1>Validate Sequence!</h1>
            </CardTitle>

            <CardText>
              <p>
                This Algorithm takes in two arrays, a regular numbers array and
                a sequential numbers array, and will determine if the regular
                array includes the numbers of the sequential array in order.
              </p>

              <form
                onSubmit={(event) => {
                  handleTwoSums(event, array, targetSum);
                }}
              >
                <input
                  type="text"
                  placeholder="Regular Array"
                  name="array"
                  onChange={handleChange}
                  value={array}
                ></input>
                <input
                  type="text"
                  placeholder="Sequential Array"
                  name="array"
                  onChange={handleChange}
                  value={array}
                ></input>

                <input type="submit"></input>
              </form>
              <h4>{result}</h4>
            </CardText>
            <CardActions>
            <div className="modal">
              <SourceCodeModal source={props.sourceImage} title={props.sourceCodeTitle}/>
            </div>
            </CardActions>
          </Card>
        </Cell>
      </Grid>{' '}
    </div>
  );
};
export default ValidateSubsequence;
