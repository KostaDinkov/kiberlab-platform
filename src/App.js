import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {createStore} from 'redux'
import Home from './Home'
import reducers from './reducers'
import sampleData from './data/sampleData'


const store = createStore(reducers,sampleData);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Home/>
                </Router>
            </Provider>
        );
    }
}

export default App;
