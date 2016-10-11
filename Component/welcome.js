/**
 * Created by Brajesh on 11-10-2016.
 */
import React, {Component} from 'react'
import {writeToScreen} from '../Utility/utility'

class Welcome extends Component {
  constructor(props) {
    super(props);
    writeToScreen('GetInitialState', 'info');
    this.state= {foo: 1};
  }

  update() {
    writeToScreen('Updating State', 'primary');
    this.setState({foo: this.state.foo + 1});
  }

  render() {
    writeToScreen('Render', 'success');
    return (<div>
      Component state update count: {this.state.foo} <br />
      Component props update count: {this.props.bar}
      <br/>
      <hr/>
      <button className="btn btn-success"
              onClick={this.update.bind(this)}>
        Update State
      </button>
    </div>);
  }

  componentWillMount() {
    writeToScreen('ComponentWillMount', 'warning');
  }

  componentDidMount() {
    writeToScreen('ComponentDidMount', 'warning');
  }

  shouldComponentUpdate() {
    writeToScreen('ShouldComponentUpdate', 'info');
    return true;
  }

  componentWillReceiveProps(nextProps) {
    writeToScreen('ComponentWillRecieveProps', 'warning');
  }

  componentWillUpdate() {
    writeToScreen('ComponentWillUpdate', 'warning');
  }

  componentDidUpdate() {
    writeToScreen('ComponentDidUpdate', 'warning');
  }

  componentWillUnmount() {
    writeToScreen('componentWillUnmount', 'danger');
  }


}
Welcome.defaultProps={bar: 5};

export default Welcome;
