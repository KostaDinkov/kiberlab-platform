import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import reducers from './data/reducers'
import sampleData from './data/sampleData'
import UserHome from './components/pages/UserHome/UserHome'
import CourseDetails from './components/pages/CourseDetails/CourseDetails';
import ScrollToTop from './components/ScrollToTop'


const store = createStore(reducers, sampleData);



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <ScrollToTop>
                        
                        <Route exact path="/courseDetails/:id" component={CourseDetails} />
                        <Route exact path="/" component={UserHome}/>
                    </ScrollToTop>
                </Router>

            </Provider>
        );
    }
}

export default App;
