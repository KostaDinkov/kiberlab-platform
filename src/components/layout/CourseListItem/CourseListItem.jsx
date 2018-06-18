import React, {Fragment} from 'react';
import styles from './CourseListItem.module.css'
import Card from '../../elements/Card/Card'

export default (props) => {
    const course = props.course;
    return (
        <Fragment>
            <Card>
                <div className={styles.container}>
                    <img src={course.imageUrl} alt="batman"/>
                    <div className={styles.info}>
                        <h2> {course.name}</h2>
                        <hr/>
                        <p>{course.description}</p>
                    </div>
                </div>
            </Card>


        </Fragment>
    )
}