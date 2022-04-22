import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading';
import Contacts from './Contacts';
const ContactList = () => {
  return (
    <ContactContainer>
        <Heading level={1}>Contact Us Queries</Heading>
        <Contacts />
    </ContactContainer>
  )
}

export const ContactContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
grid-gap: 30px;
`;

export default ContactList