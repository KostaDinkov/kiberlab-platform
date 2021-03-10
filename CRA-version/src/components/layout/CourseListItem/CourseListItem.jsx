import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../elements/Card/Card'
import styled from 'styled-components'

//#region Styles

const MainContainer = styled.div`
  display:grid;
  grid-template-columns: 200px auto;
  grid-template-areas: 'image info';
  overflow: hidden;
    
`
const Image = styled.img`
  grid-area: image;
  border-radius:var(--radius) 0 0 var(--radius);
  width:100%;
  height:100%;
  object-fit: cover;
    
`

const InfoContainer = styled.div`
  grid-area: info;
  padding:0 10px 10px 20px;
`

const StyledLink = styled(Link)`
  color:inherit;   
  text-decoration:none;

  &:hover{
    color:${props => props.theme.colors.accent}
  }
  
`
//#endregion

export default (props) => {
  const course = props.course;
  return (
    <Fragment>
      <Card>
        <MainContainer >
          <Image src={course.imageUrl} alt="batman" />
          <InfoContainer >
            <StyledLink to={`/courseDetails/${course.id}`} >
              <h2> {course.name}</h2>
            </StyledLink>
            <hr />
            <p>{course.description}</p>
          </InfoContainer>
        </MainContainer>
      </Card>
    </Fragment>
  )
}