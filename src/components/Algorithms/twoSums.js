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
import twoSumSource from '../../assets/algorithms/2sum(n).png';
import SourceCodeModal from './sourceCode';

const TwoSums = (props) => {
  const [array, setArray] = useState();
  const [targetSum, setTargetSum] = useState();
  const [result, setResult] = useState([]);
  // const [sourceImage, setSourceImage] = useState();
  const handleChange = (event) => {
    const input = event.target.value;
    event.target.name === 'array' ? setArray(input) : setTargetSum(input);
  };
  const handleChangeForm = (event) => {
    props.setSourceCodeTitle('Two Sums');
    props.setSourceImage(twoSumSource);
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
      } else {
        nums[array[i]] = false;
      }
    }
    setResult('[' + `${answer[0]}` + ']' + ',' + '[' + answer[1] + ']');
    return [];
  };
  return (
    <div>
      <Grid>
        <Cell col={12} phone={12} tablet={12}>
          <Card
            shadow={10}
            style={{
              width: 'fit-content',
              margin: 'auto',
              marginBottom: '100px',
            }}
            onMouseOver={handleChangeForm}
          >
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif) center / cover',
              }}
            >
              <h1>Two-Number Sum!</h1>
            </CardTitle>

            <CardText>
              <p>
                This Algorithm takes in any array of numbers, positive or
                negative, and a desired target sum and will check for pairs
                which will generate the sum.
              </p>

              <form
                onSubmit={(event) => {
                  handleTwoSums(event, array, targetSum);
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
                  value={targetSum}
                ></input>

                <input type="submit"></input>
              </form>
              <h4>{result}</h4>
            </CardText>
            <CardActions>
              <div className="modal">
                <SourceCodeModal
                  source={props.sourceImage}
                  title={props.sourceCodeTitle}
                />
              </div>{' '}
            </CardActions>
          </Card>
        </Cell>
      </Grid>{' '}
    </div>
  );
};
export default TwoSums;
