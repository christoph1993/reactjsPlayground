import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = {names:["Christoph","Developer","User"]};
    }

    renderNames() {
        return this.state.names.map(name => (
            <HelloWorld key={name} name={name} />
        ));
    }

    render() {
        return (
            <div className="HelloWorldList for-sidebar">
                { this.renderNames() }
            </div>
        )
    }
}

export default HelloWorldList;