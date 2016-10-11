/**
 * Created by Brajesh on 11-10-2016.
 */
import React, {Component} from 'react'
import Welcome from './welcome'
import {writeToScreen} from '../Utility/utility'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {id: 1};
  }

  update() {
    writeToScreen('Updating Props', 'primary');
    this.setState({id: this.state.id + 1});
  }

  render() {
    return (
      <div>
        <hr/>
        <Welcome bar={this.state.id}/>
        <hr />
        <button type="button" className="btn btn-primary"
                onClick={this.update.bind(this)}>
          Update Props
        </button>
      </div>
    )
  }
}
