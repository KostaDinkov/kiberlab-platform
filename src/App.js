import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {createStore} from 'redux'
import Home from './Home'
import reducers from './reducers'
import sampleData from './data/sampleData'
import CourseLayout from './components/layout/CoursesLayout.js'


const store = createStore(reducers,sampleData);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <CourseLayout/>
                </Router>
            </Provider>
        );
    }
}

export default App;
