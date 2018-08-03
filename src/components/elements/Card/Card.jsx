import React, { Fragment } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 100%;
    border-radius:${props=>props.theme.borderRadius};
    background-color:white;
    box-shadow:${props=>props.theme.shadow};
    overflow: hidden;
`

export default (props) => {
  return (
    <Fragment>
      <Container

        children={props.children}
      >
      </Container>
    </Fragment>
  )
}