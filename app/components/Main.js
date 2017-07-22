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
          <div>
            <div className="container" id="wrap">
                <Header />
                <Navbar />

                <div className="row" id="main-row">

                  {/*<Main Content />*/}
                  <div className="col-9"> 
                    <div className="main container">
                        {this.props.children}
                    </div> 
                  </div>
                  <Sidebar />

                </div>

            </div>
            <Footer />
            </div>
        );
    }
});

module.exports = Main;