import React, { Component } from 'react';
import './HelloWorld.css';
import './button.css';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello', nextGreet: 'Informal' };
        this.informalGreeting = this.informalGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    informalGreeting() {
        const informal = 'G\'day';
        if(this.state.greeting === informal){
            this.setState({ greeting: "Hello", nextGreet: 'Informal' });
        } else {
            this.setState({ greeting: informal, nextGreet: 'Formal' });
        }
    }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }

    render() {
        return (
            <div className="HelloWorld for-sidebar">
                { this.state.greeting } {this.props.name}!!
                <br/>
                <button className="GreetButton" onClick={this.informalGreeting}>{ this.state.nextGreet }</button>
                <button className="RemoveButton" onClick={this.removeGreeting}>Remove</button>
            </div>
        )
    }
}

export default HelloWorld;