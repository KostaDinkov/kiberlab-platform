import React, { Fragment } from "react";
import Card from '../../elements/Card/Card';
import { connect } from 'react-redux';
import styled from 'styled-components'

//#region Styles

const MainContainer = styled.div`
  display:grid;
  grid-template-rows: auto 1fr 1fr 1fr;
  grid-template-areas: 'avatar' 'achievements' 'courses' 'profile';
`

const AvatarContainer = styled.div`
  grid-area: avatar;
`

const AchevementsContainer = styled.div`
  grid-area: achievements;
`

const CoursesContainer = styled.div`
  grid-area: courses;
`

const ProfileContainer = styled.div`
  grid-area:profile;
`
//#endregion
class StatsPanel extends React.Component {
    render() {
        const user = this.props.activeUser;
        console.log(user.firstName);
        return (
            <Fragment>
                <Card>
                    <MainContainer >
                        <AvatarContainer>
                            <h1>Hello {user.firstName}</h1>
                        </AvatarContainer>
                        <AchevementsContainer>
                            <p>Achievements</p>
                        </AchevementsContainer>
                        <CoursesContainer >
                            <p>Courses</p>
                        </CoursesContainer>
                        <ProfileContainer>
                            <p>Profile</p>
                        </ProfileContainer>
                    </MainContainer>
                </Card>
            </Fragment>
        )
    }
}
function mapStateToProps({ activeUser }) {
    console.log(activeUser);
    return {
        activeUser: activeUser
    }
}

export default connect(mapStateToProps)(StatsPanel)

