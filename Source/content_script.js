window.addEventListener('DOMContentLoaded', function() {
  var $ = function(sel, node) {
    return (node || document).querySelector(sel);
  };
  if (!$('[id^=user-style-][id$=-bg-img]')) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
      var style = $('[id^=user-style-][id$=-bg-img]', this.responseXML);
      if (style) document.body.appendChild(style);
    });
    xhr.open('GET', '/settings/design/update_ms');
    xhr.responseType = "document";
    xhr.send();
  }
});
