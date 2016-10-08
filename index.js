writeToScreen('Initial', 'primary');

var Welcome = React.createClass({
  getInitialState: function() {
    writeToScreen('GetInitialState', 'info');
    return {foo : 1};
  },

  getDefaultProps: function() {
    writeToScreen('GetDefaultProps', 'info');
    return {bar: 2};
  },

  update: function() {
    writeToScreen('Updating State', 'primary');
    this.setState({foo: this.state.foo+1});
  },

  render: function() {
    writeToScreen('Render', 'success');
    return (<div>
      Component state update count: {this.state.foo} <br />
      Component props update count: {this.props.bar}
    <br/>
    <hr/>
    <button className="btn btn-success"
    onClick={this.update}>
    Update State
    </button>
    </div>);
  },

  componentWillMount: function() {
    writeToScreen('ComponentWillMount', 'warning');
  },

  componentDidMount: function() {
    writeToScreen('ComponentDidMount', 'warning');
  },

  shouldComponentUpdate: function() {
    writeToScreen('ShouldComponentUpdate', 'info');
    return true;
  },

  componentWillReceiveProps: function(nextProps) {
    writeToScreen('ComponentWillRecieveProps', 'warning');
  },

  componentWillUpdate: function() {
    writeToScreen('ComponentWillUpdate', 'warning');
  },

  componentDidUpdate: function() {
    writeToScreen('ComponentDidUpdate', 'warning');
  },

  componentWillUnmount: function() {
    writeToScreen('componentWillUnmount', 'danger');
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {id: 1};
  },

  update: function() {
    writeToScreen('Updating Props', 'primary');
    this.setState({id: this.state.id+1});
  },

  render: function() {
    return (
      <div>
      <hr/>
      <Welcome bar={this.state.id} />
    <hr />
    <button type="button" className="btn btn-primary"
    onClick={this.update}>
    Update Props
    </button>
    </div>
    )
  }
});

React.render(
<App />,
  document.getElementById('app')
);

var unmountBtn = document.getElementById('unmount');
unmountBtn.addEventListener('click', unmount);
var clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clearScreen);


function unmount() {
  writeToScreen('Unmounting', 'primary');
  React.unmountComponentAtNode(document.getElementById('app'));
  unmountBtn.remove();
}

function writeToScreen(msg, level) {
  var elem = document.getElementById('screen');
  elem.innerHTML += '<div class="log bg-' + level + '">' +
    '<span class="glyphicon glyphicon-ok"></span> &nbsp;&nbsp;' +
    msg +
    '</div>';
}

function clearScreen() {
  var elem = document.getElementById('screen');
  elem.innerHTML='<div></div>'

}
