import React, { Component } from 'react';

import CheckboxRadioButton from '../form/checkbox-radiobutton.component.jsx';
import Select from '../form/select.component.jsx';
import TextArea from '../form/textarea.component.jsx';
import TextInput from '../form/textinput.component.jsx';

class AddBookForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authorName: '',
            bookTitle: '',
            ISBN: '',
            currentReadLevel: ['Read','Reading','Bookshelf','Wishlist'],
            myCurrentReadLevel: '',
            bookDetails: '',
            currentRecommendations:['Yes','Eh','No'],
            recommendation: []
        };

        this.handleAuthorName = this.handleAuthorName.bind(this);
        this.handleBookTitle = this.handleBookTitle.bind(this);
        this.handleISBN = this.handleISBN.bind(this);
        this.handleCurrentLevel = this.handleCurrentLevel.bind(this);
        this.handleBookDetail = this.handleBookDetail.bind(this);
        this.handleRecommend = this.handleRecommend.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    //Handle Book Title creation/change
    handleBookTitle(e) {
        this.setState({ bookTitle: e.target.value });
    }

    //Handle Author Name creation/change
    handleAuthorName(e) {
        this.setState({ authorName: e.target.value });
    }

    //Handle ISBN creation/change
    handleISBN(e) {
        this.setState({ ISBN: e.target.value });
    }

    //Handle my current read level
    handleCurrentLevel(e) {
        this.setState({ myCurrentReadLevel: e.target.value });
    }

    //Handle book details
    handleBookDetail(e) {
        this.setState({ bookDetails: e.target.value });
    }

    //Handle recommendation
    handleRecommend(e) {
        this.setState({ recommendation: e.target.value });
    }

    handleFormSubmit(e) {
        //Function to handle form submission
        e.preventDefault();
        //Set up form-payload here...
        //Send form-payload via post here...
        //Want to clear form after submission
        this.handleClearForm(e)
    }

    handleClearForm(e) {
        //Function to handle clearing form
        e.preventDefault();
        //Set state to default here...
        this.setState({
            authorName: '',
            bookTitle: '',
            ISBN: '',
            myCurrentReadLevel: '',
            bookDetails: '',
            recommendation: []
        });
    }

    /* Add all relevent handles here. Need handles for title, author, ISBN, Read Status, Details, Recommend. */

    render() {
        return(
            <form className="container" onSubmit={this.handleFormSubmit}>
                <h3>Add A Book to your library</h3>
                {/* ISBN input */}
                <TextInput 
                    name={"ISBN"}
                    title={"ISBN"}
                    inputType={"text"}
                    controlFunction={this.handleISBN}
                    content={this.state.ISBN}
                    placeholder={'Enter ISBN here...'}
                />
                {/* Title Input */}
                <TextInput 
                    name={"title"}
                    title={"Title"}
                    inputType={"text"}
                    controlFunction={this.handleBookTitle}
                    content={this.state.bookTitle}
                    placeholder={'Enter Title here...'}
                />
                {/*{Author Input}*/}
                <TextInput 
                    name={"author"}
                    title={"Author"}
                    inputType={"text"}
                    controlFunction={this.handleAuthorName}
                    content={this.state.authorName}
                    placeholder={'Enter Author here...'}
                />
                {/* Reading Level Selection */}
                <Select 
                    name={"readingLevel"}
                    options={this.state.currentReadLevel}
                    selectedOption={this.state.myCurrentReadLevel}
                    controlFunction={this.handleCurrentLevel}
                    placeholder={'Select your current Reading level for this book:'}
                />
                {/* Textarea for Book description */}
                <TextArea 
                    name={'detail'}
                    title={'Book Details'}
                    resize={true}
                    rows={3}
                    content={this.state.bookDetails}
                    controlFunction={this.handleBookDetail}
                    placeholder={'Describe the book...'}
                />
                {/* Recommend Book Input */}
                <CheckboxRadioButton 
                    setName={'recommend'}
                    title={'Would you recommend this book?'}
                    type={'radio'}
                    options={this.state.currentRecommendations}
                    selectedOptions={this.state.recommendation}
                    controlFunction={this.handleRecommend}
                />
                <input type="submit" className="btn btn-primary" value="Submit" onClick={this.handleFormSubmit} />
                <button className="btn" onClick={this.handleClearForm}>Clear Form</button>
            </form>
        );
    }
}

export default AddBookForm;