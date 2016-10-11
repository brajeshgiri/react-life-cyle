/**
 * Created by Brajesh on 11-10-2016.
 */

export const writeToScreen=(msg, level) =>{
  var elem = document.getElementById('screen');
  elem.innerHTML += '<div class="log bg-' + level + '">' +
    '<span class="glyphicon glyphicon-ok"></span> &nbsp;&nbsp;' +
    msg +
    '</div>';
}
