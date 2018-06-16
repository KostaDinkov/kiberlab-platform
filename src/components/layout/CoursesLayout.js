import React, {Component, Fragment} from 'react'
import styles from './CoursesLayout.module.css';
import Logo from '../Logo'
import CourseList from '../CourseList'

export default class CoursesLayout extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.header}>
                    <Logo className={styles.logo}/>
                    <div className={styles.nav}>
                        <button>Home</button>
                        <button>Profile</button>
                    </div>
                    <div className={styles.search}>
                        <input type="text" placeholder={'Filter my courses'}/>
                    </div>
                </div>
                <div className={styles["course-list"]}>

                    <div className={styles.content}>
                        <CourseList/>
                    </div>
                    <div className={styles.footer}>3</div>

                </div>
            </Fragment>
        )
    }
}