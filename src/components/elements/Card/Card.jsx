import React, {Fragment} from 'react';
import styles from './Card.module.css'

export default (props) => {
    return (
        <Fragment>
            <div
                className={styles.container}
                children={props.children}
            >
            </div>
        </Fragment>
    )
}