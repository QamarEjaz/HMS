import React from 'react'
import styled from 'styled-components'
import Leads from './Leads';
const LeadList = () => {
  return (
    <LeadContainer>
        <Leads />
    </LeadContainer>
  )
}

export const LeadContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
grid-gap: 30px;
`;
export default LeadList