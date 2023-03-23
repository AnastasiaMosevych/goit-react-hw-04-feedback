import { useState } from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import { Container } from "./App.styled";
import Section from "components/Common/Section";
import Notification from "./FeedbackOptions/Notification";
import React from "react";


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const countTotalFeedback = () => {
      return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = () => {
     const total = countTotalFeedback();
      if (total > 0) {
        return Math.floor((good / total) * 100);
      } else {
        return 0;
      }
    }

  const onLeaveFeedback = event => {
    const feedback = event.target.name;
    switch (feedback) {
      case 'good':
        setGood(PrevGood => PrevGood + 1);
        break;
      case 'neutral':
        setNeutral(PrevNeutral => PrevNeutral + 1);
        break;
      case 'bad':
        setBad(PrevBad => PrevBad + 1);
        break;
      default:
        break;
    }

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(options)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification> 
          ) 
          }
        </Section>
      </Container>
    )
  }
}

export default App