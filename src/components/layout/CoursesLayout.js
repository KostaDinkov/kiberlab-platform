import React, {Component, Fragment} from 'react'
import styles from '../pages/UserHome/UserHome.module.css';
import Logo from '../elements/Logo/index'
import CourseList from './CourseList/index'
import Card from '../elements/Card/index'


export default class CoursesLayout extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.page}>
                    <div className={styles.header}>
                        <Logo className={styles.logo}/>
                        <div className={styles.nav}>
                            <button>Home</button>
                            <button>Profile</button>
                        </div>
                        <div className={styles.search}>
                            <input type="text" placeholder={'Filter my courses'}/>
                        </div>
                        <div className={styles.profile}>
                            <Card>
                                <h1>Hello</h1>
                            </Card>
                        </div>
                    </div>
                    <div className={styles["course-list"]}>
                        <div className={styles.content}>
                            <CourseList/>
                        </div>
                        <div className={styles.footer}>3</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}