import React, {Fragment} from 'react';
import styles from './CourseListItem.module.css'
import Card from '../../elements/Card/index'

export default (props) => {
    return (
        <Fragment>
            <Card>
                <div className={styles.container}>
                    <img src={props.src} alt="batman"/>
                    <div className={styles.info}>
                        <h2> Course Name</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ipsa.</p>
                    </div>
                </div>
            </Card>

        </Fragment>
    )
}