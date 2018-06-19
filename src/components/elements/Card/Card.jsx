import React, { Fragment } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  height: 100%;
    
    border-radius:var(--radius);
    background-color:#fff;
    box-shadow:var(--shadow);
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