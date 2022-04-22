import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading';
import Schedule from './Schedule';
const ScheduleList = () => {
  return (
    <ScheduleContainer>
            <Heading level={1}>Schedulers</Heading>
        <Schedule />
    </ScheduleContainer>
  )
}

export const ScheduleContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
grid-gap: 30px;
`;

export default ScheduleList