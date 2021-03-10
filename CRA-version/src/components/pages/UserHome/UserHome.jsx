import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Logo from '../../elements/Logo/Logo'
import CourseList from '../../layout/CourseList/CourseList'
import StatsPanel from '../../layout/StatsPanel/StatsPanel';
import MainNav from '../../layout/MainNav/MainNav'
import Search from '../../elements/Search/Search';
import styled from 'styled-components';

//#region Styles

const Page = styled.div`
  background: url("/assets/layout_bg.svg") no-repeat fixed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'left right';
  grid-auto-rows: 100vh;
`
const Header = styled.header`
  grid-area: left;
  position: fixed;
  padding: 50px;
  grid-gap: 10px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'logo logo' 'nav search' 'profile profile';
`

const LogoContainer = styled.div`
  grid-area: logo;
`
const Navigation = styled.div`
  grid-area: nav;
`

const SearchContainer = styled.div`
  grid-area: search;
`

const StatsContainer = styled.div`
  padding-top: 20px;
  grid-area: profile;
`

const CourseListContainer = styled.div`
  grid-area: right;
`
//#endregion

class UserHome extends Component {
  render() {
    const courses = this.props.courses;
    return (
      <Fragment>
        <Page>
          <Header>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <Navigation>
              <MainNav />
            </Navigation>
            <SearchContainer >
              <Search />
            </SearchContainer>
            <StatsContainer>
              <StatsPanel />
            </StatsContainer>
          </Header>
          <CourseListContainer>
            <CourseList courses={courses} />
          </CourseListContainer>
        </Page>
      </Fragment>
    )
  }
}

function mapStateToProps({ courses }) {
  const courseList = Object.values(courses);
  return (
    { courses: courseList }
  )
}

export default connect(mapStateToProps)(UserHome);