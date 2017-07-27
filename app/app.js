// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("./config/react-routes");

// var Main = require("./components/Main");

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));
// ReactDOM.render(<Main />, document.getElementById("app"));

window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'katiearina.auth0.com',
    clientID: 'pndfZiJPcidXoAezvZWQfMLR04rRB9DG',
    redirectUri: window.location.href + "/callback",
    audience: 'https://katiearina.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  console.log(webAuth);

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});