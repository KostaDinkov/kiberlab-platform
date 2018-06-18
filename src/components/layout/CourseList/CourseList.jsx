import React from 'react';
import styles from './CourseList.module.css';
import CourseListItem from '../CourseListItem/CourseListItem'

export default function (props) {
    const courses = props.courses;
    return (
        <div className={styles.container}>
            <h1>My Courses</h1>
            {courses.map(c => (
                <CourseListItem key={c.id} course={c} />
            ))}
        </div>
    )
}

