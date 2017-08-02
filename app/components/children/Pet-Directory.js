var React = require("react");
var helpers = require("../utils/helpers");

var PetDirectory = React.createClass({

    getInitialState: function(){
        return { petList: ""};
    },

    componentWillMount: function() {
        helpers.listQuery().then(function(response){
            // console.log(response.data);
            this.setState({petList: response.data})
        }.bind(this));
    },

    renderEmpty: function() {
        return (
                <div className="card-block" width="200">
                    <blockquote className="card-blockquote">
                        <p>No pets currently present in Pet Directory.</p>
                    </blockquote>
                </div>
        );
    },

    renderPets: function() {
        return this.state.petList.map(function(pets, index){
            return (
                <div key={index}>

                    <div className="card-block">
                        <img className="card-img-top" height={150} width={150} src={pets.petImage} alt="http://via.placeholder.com/250x250"/>
                        <blockquote className="card-blockquote">
                        <p>Pet Name   : {pets.petName} </p>
                        <p>Owner Name : {pets.petOwner}</p>
                        <p>Phone #    : {pets.petPhone}</p>
                        <p>{pets.petDescription}</p>
                        </blockquote>
                    </div>
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