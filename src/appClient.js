import React from 'react';
import ReactDOM from 'react-dom';
import appRouting from './components/appRouting';

window.onload=()=> {
    ReactDom.render(<appRouting/>,document.getElementById('main'));
}