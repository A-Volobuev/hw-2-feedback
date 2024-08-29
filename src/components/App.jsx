import React, { Component } from 'react';
import {Box} from '../contents/Box';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics';
import {Message} from './App.styled';

class App extends Component {
  state = { 
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  addReview = (option) => {
    this.setState (prevState =>({
      [option]: prevState[option]+1 
    }))
  };

  totalReview = ({good, neutral, bad }) =>{
    return  good + neutral+ bad;
  };

  render() { 
    const {good, neutral, bad} = this.state;
    const total = this.totalReview({good, neutral, bad});
  
    const percentPositiveReview = Math.round((good/total)*100);
    return (
    
      <Box
      display="flex"
      flexDirection="column"
      alignItems="center">
        <h2>Please leave feedback</h2>

        <FeedbackOptions 
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={this.addReview} 
        > 
        </FeedbackOptions>

        <h2>Statistics</h2>
        {total===0 
        ? <Message>There is no feedback</Message>
        : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percentPositiveReview}></Statistics>
        }
      </Box>
    );
  }
}
 
export default App;
