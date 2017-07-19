var React = require("react");

// var Link = require("react-router").Link;

var Header = require("./children/static/Header");
var NavBar = require("./children/static/Navbar");
var Footer = require("./children/static/Footer");

var Main = React.createClass({
    render: function() {
        return (
            <div className="container">
                <Header />
                <NavBar />
                    <div className="col-9">
                        <div className="main container">
                            <h1>Test</h1>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="sidebar container">
                            <h4>Sidebar Test</h4>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }

});

module.exports = Main