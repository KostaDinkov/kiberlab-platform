import React from 'react'
import { connect } from 'react-redux';
import Card from '../../elements/Card/Card'
import { Button, PrimaryButton } from '../../elements/Button/Button';
import styled from 'styled-components'

//#region Styling
const PageContainer = styled.div`
	width:100%;
	display:flex;
	justify-content: center;
`
const Grid = styled.div`
	max-width: 800px;
	grid-gap:50px;
	padding:50px;
	display:grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
	'logo nav' 
	'video video' 
	'details details'
	'description description';
`

const Navigation = styled.div`
  grid-area:nav;
  background-color:deepskyblue;
`
const Video = styled.div`
  border-radius:5px;
  overflow: hidden;
  height:400px;
  grid-area: video;
  background-color:rgb(207, 233, 94);
  img{
    width:100%;
    height:100%;
    object-fit: cover;
  }
`
const Details = styled.div`
    grid-area:details;
    display:flex;
`

const Description = styled.div`
  grid-area:description;
`

const Item = styled.div`
  flex:1;
`
//#endregion

//#region Component
class CourseDetails extends React.Component {
  render() {
    const course = this.props.course;
    return (
      <PageContainer>
        <Grid>
          <Navigation>
            <h1>Navigation</h1>
          </Navigation>
          <Video>
            <img src={course.imageUrl} alt={course.name} />
          </Video>
          <Details>

            <Item>
              <p>Level:</p>
              <p>{course.level}</p>
            </Item>
            <Item>
              <p>Duration:</p>
              <p>{course.duration}</p>
            </Item>
            <Item>
              <p>Prerequisites:</p>
              <p>{course.prerequisiteTags}</p>
            </Item>
            <Item>
              <p>Price:</p>
              <p>{course.price}</p>
            </Item>
            <PrimaryButton>Enroll</PrimaryButton>
          </Details>
          <Description>
            <Card>
              <h1>{course.name}</h1>
              <p>{course.description}</p>
              <h1>Prerequisites</h1>
              <p>{course.prerequisites}</p>
            </Card>
          </Description>
        </Grid>
      </PageContainer>
    )
  }
}

//#endregion

function mapStateToProps({ courses }, ownProps) {

  const courseId = ownProps.match.params.id;
  return {
    course: courses[courseId]
  }
}

export default connect(mapStateToProps)(CourseDetails);

