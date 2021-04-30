import React, {Component} from 'react';

class PlaceAstros extends Component {
 
    render() {
        return (
            <li key={this.props.farer.name}>{this.props.farer.name}</li>
        )
    }
}



export default PlaceAstros