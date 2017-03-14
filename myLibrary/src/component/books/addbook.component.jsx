import React, { Component } from 'react';
import AddBookForm from './addbookform.component.jsx';

class AddBook extends Component {
    render() {
        return (
            <div>
                <h1>AddBook Page Here</h1>
                <AddBookForm />
            </div>
        )
    }
}

export default AddBook;