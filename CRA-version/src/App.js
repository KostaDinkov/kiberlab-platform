import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import reducers from './data/reducers'
import sampleData from './data/sampleData'
import UserHome from './components/pages/UserHome/UserHome'
import CourseDetails from './components/pages/CourseDetails/CourseDetails';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from 'styled-components';

const store = createStore(reducers, sampleData);

const theme = {
  borderRadius: "5px",
  shadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  colors:{
    accent:'#FFC107'
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <ScrollToTop>
              <Route exact path="/courseDetails/:id" component={CourseDetails} />
              <Route exact path="/" component={UserHome} />
            </ScrollToTop>
          </ThemeProvider>
        </Router>

      </Provider>
    );
  }
}

export default App;
