var React = require("react");

// var Link = require("react-router").Link;

var Header = require("./children/static/Header");
var NavBar = require("./children/static/Navbar");
var Footer = require("./children/static/Footer");
var PetDirectoryForm = require("./children/Pet-Directory-Form");
var PetDirectory = require("./children/Pet-Directory");

var helpers = require("./utils/helpers");


var Main = React.createClass({

    render: function() {
        return (
            <div className="container">
                <Header />
                <NavBar />
                <div className="row">
                    <div className="col-9">
                        <div className="main container">
                            {/* <PetDirectoryForm /> */}
                                 {this.props.children}
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="sidebar container">
                            <h4>Sidebar Test</h4>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});

module.exports = Main