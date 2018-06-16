import React from 'react';
import styles from './CourseList.module.css';
import CourseListItem from './CourseListItem'

export default function (props) {
    return (

        <div className={styles.container}>
            <CourseListItem src = {"./assets/batman.jpg"}/>
            <CourseListItem src={"./assets/joker.jpg"}/>
            <CourseListItem src={"./assets/ironman.jpg"}/>
            <CourseListItem src={"./assets/ironman.jpg"}/>
        </div>
    )
}

