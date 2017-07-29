// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// var hashHistory = router.hashHistory;
var hashHistory = router.browserHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Home = require("../components/children/static/Home");
var ArcApp = require("../components/children/ARC-Application");
var BoardMembers = require("../components/children/Board-Members");
var CollectionSchedule = require("../components/children/Collection-Schedule");
var GoverningDocs = require("../components/children/Governing-Docs");
var PetDirectoryForm = require("../components/children/Pet-Directory-Form");
var PetDirectory = require("../components/children/Pet-Directory");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      <Route path="ArcApp" component={ArcApp} />
      <Route path="BoardMembers" component={BoardMembers} />
      <Route path="Collection" component={CollectionSchedule} />
      <Route path="GoverningDocs" component={GoverningDocs} />
      <Route path="PetForm" component={PetDirectoryForm} />
      <Route path="PetDirectory" component={PetDirectory} />

      {/* Default path */}
      <IndexRoute component={Home} />

    </Route>
  </Router>
);
