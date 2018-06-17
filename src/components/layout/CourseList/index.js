import React from 'react';
import styles from './CourseList.module.css';
import CourseListItem from '../CourseListItem/index'

export default function (props) {
    return (

        <div className={styles.container}>
            <h1>My Courses</h1>
            <CourseListItem src = {"./assets/batman.jpg"}/>
            <CourseListItem src={"./assets/joker.jpg"}/>
            <CourseListItem src={"./assets/ironman.jpg"}/>
            <CourseListItem src={"./assets/ironman.jpg"}/>
        </div>
    )
}

