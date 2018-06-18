import React, { Fragment } from "react";
import Card from '../../elements/Card/Card';
import styles from './StatsPanel.module.css';
import { connect } from 'react-redux';

//available layout positions: avatar, achievements, courses, profile

class StatsPanel extends React.Component {
    render() {
        const user = this.props.activeUser;
        console.log(user.firstName);
        return (
            <Fragment>
                <Card>
                    <div className={styles.container}>
                        <div className={styles.avatar}>
                            <h1>Hello {user.firstName}</h1>
                        </div>
                        <div className={styles.achievements}>
                            <p>Achievements</p>
                        </div>
                        <div className={styles.courses}>
                            <p>Courses</p>
                        </div>
                        <div className={styles.profile}>
                            <p>Profile</p>
                        </div>
                    </div>
                </Card>
            </Fragment>
        )
    }
}
function mapStateToProps({ activeUser }) {
    console.log(activeUser);
    return {
        activeUser: activeUser
    }
}

export default connect(mapStateToProps)(StatsPanel)

