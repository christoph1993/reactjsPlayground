import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello', nextGreet: 'Informal' };
        this.informalGreeting = this.informalGreeting.bind(this);
    }

    informalGreeting() {
        const informal = 'G\'day';
        if(this.state.greeting === informal){
            this.setState({ greeting: "Hello", nextGreet: 'Informal' });
        } else {
            this.setState({ greeting: informal, nextGreet: 'Formal' });
        }
    }

    render() {
        return (
            <div className="HelloWorld for-sidebar">
                { this.state.greeting } {this.props.name}!!
                <br/>
                <button className="GreetButton" onClick={this.informalGreeting}>{ this.state.nextGreet }</button>
            </div>
        )
    }
}

export default HelloWorld;