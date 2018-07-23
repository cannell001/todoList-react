import React, {Component} from "react"

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };

        //this.climb = this.climb.bind(this);
    }

    climb(){
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div onClick={this.climb.bind(this)}>
                <h1>Counting: {this.state.count}</h1>
            </div>
        )
    }
}