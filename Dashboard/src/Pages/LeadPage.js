import React, {useEffect} from "react";
import styled from "styled-components";
import LeadList from "../components/Lead/LeadData";
import {useNavigate} from "react-router-dom";

const LeadsPage = ({sidebarOpen}) => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token]);

  return (
    <LeadsPageContent isOpen={sidebarOpen}>
      <LeadList />
    </LeadsPageContent>
  );
};
const LeadsPageContent = styled.div`
  margin-left: ${({isOpen}) => (isOpen ? `100px` : `270px`)};
  margin-top: 40px;
  margin-right: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 1100px) {
    margin: 40px 10px;
  }
`;

export default LeadsPage;
