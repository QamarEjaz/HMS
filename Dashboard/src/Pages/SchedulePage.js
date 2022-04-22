import React, {useEffect} from "react";
import styled from "styled-components";
import ScheduleList from "../components/Schedule/ScheduleData";
import {useNavigate} from "react-router-dom";

const SchedulePage = ({sidebarOpen}) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token]);

  return (
    <SchedulePageContent isOpen={sidebarOpen}>
      <ScheduleList />
    </SchedulePageContent>
  );
};
const SchedulePageContent = styled.div`
  margin-left: ${({isOpen}) => (isOpen ? `100px` : `270px`)};
  margin-top: 40px;
  margin-right: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 1100px) {
    margin: 40px 10px;
  }
`;

export default SchedulePage;
