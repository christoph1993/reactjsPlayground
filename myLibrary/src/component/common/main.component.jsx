import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="/" className="navbar-brand">My Library</a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Main;