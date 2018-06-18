import React, {Component, Fragment} from 'react'
import styles from './UserHome.module.css';
import Logo from '../../elements/Logo'
import CourseList from '../../layout/CourseList'
import StatsPanel from '../../layout/StatsPanel';
import MainNav from '../../layout/MainNav'
import setClass from '../../../util/setClass';
import Search from '../../elements/Search';


export default class UserHome extends Component {
    render() {
        return (
            <Fragment>
                <div PAGE className={styles.page}>
                    <div HEADER className={styles.header}>
                        <div LOGO clssName={styles.logo}>
                            <Logo/>
                        </div>
                        <div NAV className={styles.nav}>
                            <MainNav/>
                        </div>
                        <div SEARCH className={styles.search}>
                            <Search/>
                        </div>
                        <div PROFILE className={styles.profile}>
                            <StatsPanel/>
                        </div>
                    </div>
                    <div COURSES className={styles["course-list"]}>
                        <CourseList/>
                    </div>
                </div>
            </Fragment>
        )
    }
}