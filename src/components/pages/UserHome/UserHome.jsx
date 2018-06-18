import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import styles from './UserHome.module.css';
import Logo from '../../elements/Logo/Logo'
import CourseList from '../../layout/CourseList/CourseList'
import StatsPanel from '../../layout/StatsPanel/StatsPanel';
import MainNav from '../../layout/MainNav/MainNav'  
import Search from '../../elements/Search/Search';

class UserHome extends Component {
    
    render() {
        const courses = this.props.courses;
        return (
            <Fragment>
                <div className={styles.page}>
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <Logo/>
                        </div>
                        <div className={styles.nav}>
                            <MainNav/>
                        </div>
                        <div className={styles.search}>
                            <Search/>
                        </div>
                        <div className={styles.profile}>
                            <StatsPanel/>
                        </div>
                    </div>
                    <div className={styles["course-list"]}>
                        <CourseList courses={courses}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps({courses}){
    const courseList = Object.values(courses);
    return(
        {courses:courseList}
    )
}

export default connect(mapStateToProps)(UserHome);