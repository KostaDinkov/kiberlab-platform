import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class Home extends Component{

    render(){
        const courses =this.props.store.courses;
        return(
            <Fragment>
                <h1>My Courses</h1>
                <ul>
                    {Object.keys(courses).map(c=>(
                        <li key={c}>
                            <h2>{courses[c].name}</h2>
                            <p>{courses[c].description}</p>
                            <h3>Lessons</h3>
                            <ul>
                                {Object.keys(courses[c].lessons).map(l=>(
                                    <li key={l}>
                                        <p>{courses[c].lessons[l].name}</p>
                                        <h4>Sections</h4>
                                        <ul>
                                            {Object.keys(courses[c].lessons[l].sections).map(s=>(
                                                <li key={s}>
                                                    <p>{s}</p>
                                                    <p>{courses[c].lessons[l].sections[s].name}</p>
                                                    <p>{courses[c].lessons[l].sections[s].type}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                            <hr/>
                        </li>
                    ))}
                </ul>

            </Fragment>
        )
    }
}

function mapStateToProps(store){
    return {
        store
    }
}

export default connect(mapStateToProps)(Home);
