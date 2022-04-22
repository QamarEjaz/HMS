import React, {useEffect} from "react";
import styled from "styled-components";
import ContactList from "../components/Contact/ContactData";
import {useNavigate} from "react-router-dom";

const ContactsPage = ({sidebarOpen}) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token]);

  return (
    <ContactsPageContent isOpen={sidebarOpen}>
      <ContactList />
    </ContactsPageContent>
  );
};
const ContactsPageContent = styled.div`
  margin-left: ${({isOpen}) => (isOpen ? `100px` : `270px`)};
  margin-top: 40px;
  margin-right: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 1100px) {
    margin: 40px 10px;
  }
`;

export default ContactsPage;
