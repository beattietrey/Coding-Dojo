import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: 0, 
        };
    }

    addYear = () => {
        let temp = this.state.ageCount;
        this.setState({ageCount: temp+1})
    } 
    
    render() {
        return(
            <div>
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p>Age: {this.props.age}</p>
                <p>Current Age: {this.props.age + this.state.ageCount}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.addYear}>Birthday</button>
            </div>
        )
    }
}

export default PersonCard;