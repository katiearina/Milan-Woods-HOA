// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("./config/react-routes");

// var Main = require("./components/Main");

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));
// ReactDOM.render(<Main />, document.getElementById("app"));