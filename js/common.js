function fetchJson(url, callback) {
  var httpRequest = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) {
          callback(data);
        }
      }
    }
  };
  httpRequest.open("GET", url);
  httpRequest.send();
}

(function() {
  const topAppBar = new mdc.topAppBar.MDCTopAppBar(
    document.querySelector(".mdc-top-app-bar")
  );
  const drawer = mdc.drawer.MDCDrawer.attachTo(
    document.querySelector(".mdc-drawer")
  );

  drawer.foundation_.handleScrimClick = () => {
    drawer.open = !drawer.open;
  };
  topAppBar.listen("MDCTopAppBar:nav", () => {
    drawer.open = !drawer.open;
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(function(registration) {
        console.log("SW: working with scope ", registration.scope);
      })
      .catch(function(err) {
        console.log("SW: registration failed ", err);
      });
  }
})();
