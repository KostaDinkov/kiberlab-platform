import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {createStore} from 'redux'
import reducers from './data/reducers'
import sampleData from './data/sampleData'
import UserHome from './components/pages/UserHome'


const store = createStore(reducers,sampleData);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <UserHome/>
                </Router>
            </Provider>
        );
    }
}

export default App;
