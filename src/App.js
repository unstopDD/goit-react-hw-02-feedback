import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

export class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback = e => {
    const target = e.target.name;
    this.setState(prevState => {
      return { [target]: prevState[target] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = total =>
    Math.round((this.state.good / total) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    const isShowStatistics = total > 0;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.handleAddFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title="Statistics">
          {isShowStatistics && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
          {!isShowStatistics && <Notification message="No feedback given" />}
        </Section>
      </>
    );
  }
}

export default App;
