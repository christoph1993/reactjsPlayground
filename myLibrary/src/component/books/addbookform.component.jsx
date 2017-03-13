import React, { Component } from 'react';

import CheckboxRadioButton from '../form/checkbox-radiobutton.component.jsx';
import Select from '../form/select.component.jsx';
import TextArea from '../form/textarea.component.jsx';
import TextInput from '../form/textinput.component.jsx';

class AddBookForm extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    handleFormSubmit() {

    }

    handleClearForm() {

    }

    render() {
        return(
            <form className="container" onSubmit={this.handleFormSubmit}>
                <h3>Add A Book to your library</h3>
                <TextInput />{/* Currently a placeholder, will add in needed props */}
                <TextInput />{/* Currently a placeholder, will add in needed props */}
                <Select />{/* Currently a placeholder, will add in needed props */}
                <TextArea />{/* Currently a placeholder, will add in needed props */}
                <CheckboxRadioButton />{/* Currently a placeholder, will add in needed props */}
                <input type="submit" className="btn btn-primary" value="Submit" />
                <button className="btn" onClick={this.handleClearForm}>Clear Form</button>
            </form>
        );
    }
}