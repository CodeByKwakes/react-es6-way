import React from 'react';

export default class ReadingTime extends React.Component {
  static propTypes = {
    wordsPerMinute: React.PropTypes.number
  }

  static defaultProps = {
    wordsPerMinute: 270
  }

  render() {
    return (
      <div></div>
    )
  }
}

