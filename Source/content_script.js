window.addEventListener('DOMContentLoaded', function() {
  var $ = function(sel, node) {
    return (node || document).querySelector(sel);
  };
  var userName = $('.js-mini-current-user').dataset.screenName;
  var cssSelector = '#user-style-' + userName + '-bg-img';
  if (!$(cssSelector)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
      var style = $(cssSelector, this.responseXML);
      if (style) document.body.appendChild(style);
    });
    xhr.open('GET', '/settings/design/update_ms');
    xhr.responseType = "document";
    xhr.send();
  }
});
