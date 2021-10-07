import "./App.css";
import Container from "./components/Container";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification/Notification";

import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const states = { good, neutral, bad };

  const hendleClick = (key) => {
    switch (key) {
      case "good":
        setGood(() => good + 1);
        break;
      case "neutral":
        setNeutral(() => neutral + 1);
        break;
      case "bad":
        setBad(() => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = (arr) => {
    return arr.reduce((acc, value) => acc + +value, 0);
  };
  const countPositiveFeedbackPercentage = (total, positive) => {
    let res = Math.round((100 / total) * positive);
    if (Number.isNaN(res)) {
      return 0;
    }
    return res;
  };

  const valuesState = Object.values(states);
  const kaysState = Object.keys(states);
  const totalAmount = countTotalFeedback(valuesState);
  const positiveFeedback = countPositiveFeedbackPercentage(totalAmount, good);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={kaysState} onLeaveFeedback={hendleClick} />
      </Section>
      <Section title="Statistics">
        {totalAmount !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalAmount}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}

export default App;
