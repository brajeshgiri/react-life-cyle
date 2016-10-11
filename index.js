import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/app'
import {writeToScreen} from './Utility/utility'

writeToScreen('Initial', 'primary');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

var unmountBtn = document.getElementById('unmount');
unmountBtn.addEventListener('click', unmount);
var clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clearScreen);


function unmount() {
  writeToScreen('Unmounting', 'primary');
  ReactDOM.unmountComponentAtNode(document.getElementById('app'));
  unmountBtn.remove();
}

function clearScreen() {
  var elem = document.getElementById('screen');
  elem.innerHTML = '<div></div>'

}
