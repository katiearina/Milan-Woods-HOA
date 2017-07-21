var React = require("react");

// var Link = require("react-router").Link;

var Header = require("./children/static/Header");
var Navbar = require("./children/static/Navbar");
var Footer = require("./children/static/Footer");
var Content = require("./children/static/Content");
var Sidebar = require("./children/static/Sidebar");
var PetDirectoryForm = require("./children/Pet-Directory-Form");
var PetDirectory = require("./children/Pet-Directory");

var helpers = require("./utils/helpers");


var Main = React.createClass({

    render: function() {
        return (
            <div className="container">
                <Header />
                <Navbar />
                <div className="row">
                    <Content />
                    <Sidebar />
                </div>
                <Footer />
            </div>
        );
    }
});

module.exports = Main;