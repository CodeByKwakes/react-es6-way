import React from 'react'
import ReactDOM from 'react-dom'
import ReadingTime from '../src/reading-time'

class ReactReadingTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "The next thing we need to do is estimate what the reading time is going to be. We could execute that code in the constructor of the component, but if we did that, the component would not be properly updated when it received new props from the parent component. We're going to use React's lifecycle hooks to run this code any time the component receives props. Our component is going to receive new props any time the textarea on the parent component is updated. There are quite a few lifecycle hooks in React. For this use case, we'll be using the componentWillReceiveProps, and the componentWillMount hooks, so let's add these to our ReadingTime component. React convention is to put this function immediately after the constructor function and before any other code. The next thing we need to do is estimate what the reading time is going to be. We could execute that code in the constructor of the component, but if we did that, the component would not be properly updated when it received new props from the parent component. We're going to use React's lifecycle hooks to run this code any time the component receives props. Our component is going to receive new props any time the textarea on the parent component is updated. There are quite a few lifecycle hooks in React. For this use case, we'll be using the componentWillReceiveProps, and the componentWillMount hooks, so let's add these to our ReadingTime component. React convention is to put this function immediately after the constructor function and before any other code.The next thing we need to do is estimate what the reading time is going to be. We could execute that code in the constructor of the component, but if we did that, the component would not be properly updated when it received new props from the parent component. We're going to use React's lifecycle hooks to run this code any time the component receives props. Our component is going to receive new props any time the textarea on the parent component is updated. There are quite a few lifecycle hooks in React. For this use case, we'll be using the componentWillReceiveProps, and the componentWillMount hooks, so let's add these to our ReadingTime component. React convention is to put this function immediately after the constructor function and before any other code.The next thing we need to do is estimate what the reading time is going to be. We could execute that code in the constructor of the component, but if we did that, the component would not be properly updated when it received new props from the parent component. We're going to use React's lifecycle hooks to run this code any time the component receives props. Our component is going to receive new props any time the textarea on the parent component is updated. There are quite a few lifecycle hooks in React. For this use case, we'll be using the componentWillReceiveProps, and the componentWillMount hooks, so let's add these to our ReadingTime component. React convention is to put this function immediately after the constructor function and before any other cod"
    };
  }
updateText(ev) {
  this.setState({ text: ev.target.value })
}

  render() {
    return (
      <div className='container' style={{ marginTop: '50px' }}>
        <div className='col-lg-8 col-lg-offset-2 form-group'>
          <textarea
            value={this.state.text}
            onChange={::this.updateText}
            className='form-control'
            style={{ height: '500px', resize: 'none' }}>
          </textarea>
        </div>
        <ReadingTime text={this.state.text} className='col-lg-2 well' />
      </div>
    )
  }
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'))