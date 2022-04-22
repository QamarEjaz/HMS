import React from "react";
import styled from "styled-components";
import {Button} from "../GlobalStyles";
import Heading from "../Heading/Heading";
import ModalContainer from "../ModalContainer/ModalContainer";
import AddUser from "./AddUser";
import ContactTable from "./UserTable";

const ContactData = () => {
  return (
    <>
      <ContactContainer>
        <TopLine>
          <Heading level={1}>Doctors</Heading>
          <ModalContainer
            lg
            title="Create New User"
            btnComponent={({onClick}) => (
              <Button primary font onClick={onClick}>
                Add User
              </Button>
            )}
            content={({onClose}) => <AddUser onClose={onClose} />}
          />
        </TopLine>
        <ContactTable />
      </ContactContainer>
    </>
  );
};

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
`;
export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
`;

export default ContactData;
