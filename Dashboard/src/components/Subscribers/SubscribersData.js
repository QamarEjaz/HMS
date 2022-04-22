import React from 'react'
import styled from 'styled-components'
import Subscribers from './Subscribers';
const SubscribersList = () => {
  return (
    <SubscribersContainer>
        <Subscribers />
    </SubscribersContainer>
  )
}

export const SubscribersContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
grid-gap: 30px;
`;

export default SubscribersList