import React, {Component} from 'react';


class myComp extends Component {
    state = {
        spaceFarers: {people:[{name: 'loading'}]}
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                spaceFarers: data
            })
            console.log(this.state.spaceFarers)
        })   
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default myComp

