import React, {Component, Fragment} from 'react'
import styles from './UserHome.module.css';
import Logo from '../../elements/Logo'
import CourseList from '../../layout/CourseList'
import Card from '../../elements/Card/index'
import MainNav from '../../layout/MainNav'
import setLayoutPosition from '../../../util/setLayoutPosition';

const PageContainer = setLayoutPosition(styles.page);
const HeaderContainer = setLayoutPosition(styles.header);
const LogoContainer = setLayoutPosition(styles.logo);
const NavContainer = setLayoutPosition(styles.nav);
const ProfileContainer = setLayoutPosition(styles.profile);
const CourseContainer = setLayoutPosition(styles["course-list"]);

export default class UserHome extends Component {
    render() {
        return (
            <Fragment>
                <PageContainer>
                    <HeaderContainer>
                        <LogoContainer>
                            <Logo/>
                        </LogoContainer>
                        <NavContainer>
                            <MainNav/>
                        </NavContainer>
                        <ProfileContainer>
                            <Card>
                                <h1>Hello</h1>
                            </Card>
                        </ProfileContainer>
                    </HeaderContainer>
                    <CourseContainer>
                        <CourseList/>
                    </CourseContainer>
                </PageContainer>
            </Fragment>
        )
    }
}