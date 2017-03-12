import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import './HelloWorldList.css';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = {names:["Christoph","Developer","User"]};
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    renderNames() {
        return this.state.names.map(name => (
            <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting}/>
        ));
    }

    addGreeting(newName) {
        this.setState({ names:[...this.state.names, newName] });
    }

    removeGreeting(removeName) {
        const filteredNames = this.state.names.filter(name => { return name !== removeName });
        this.setState({ names: filteredNames });
    }

    render() {
        return (
            <div className="HelloWorldList for-sidebar">
                <AddGreeter addGreeting={this.addGreeting}/>
                { this.renderNames() }
            </div>
        )
    }
}

export default HelloWorldList;