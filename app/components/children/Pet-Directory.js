var React = require("react");
var helpers = require("../utils/helpers");

var PetDirectory = React.createClass({

    getInitialState: function(){
        return { petList: ""};
    },

    componentDidMount: function() {
        helpers.listQuery().then(function(response){
            console.log(response.data);
            this.setState({petList: response.data})
        }.bind(this));
    },

    renderEmpty: function() {
        return (

                <div className="card-block">
                    <blockquote className="card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    </blockquote>
                </div>

        );

    },

    renderPets: function() {
        return this.state.petList.map(function(pets, index){

            return (
                <div className="card-block {index}">
                    <blockquote className="card-blockquote">
                    <p>Pet Name   : {pets.petName} </p>
                    <p>Owner Name : {pets.petOwner}</p>
                    <p>Phone #    : {pets.petPhone}</p>
                    </blockquote>
                </div>
            );
        });

    },

    renderContainer: function(){
        return (
            <div className="card-deck">
                {this.renderPets()}
            </div>
        )
    },

  render: function() {
    if (!this.state.petList) {
        return this.renderEmpty();
    }

    return this.renderContainer();
  }

});

module.exports = PetDirectory;