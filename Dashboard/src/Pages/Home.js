import React, {useEffect} from "react";
import styled from "styled-components";
import UserData from "../components/UserTable/UserData";
import { useNavigate } from "react-router-dom";
const Home = ({sidebarOpen}) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token]);

  return (
    <UserContent isOpen={sidebarOpen}>
      <UserData />
    </UserContent>
  );
};
const UserContent = styled.div`
  margin-left: ${({isOpen}) => (isOpen ? `100px` : `270px`)};
  margin-top: 40px;
  margin-right: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 1100px) {
    margin: 40px 10px;
  }
`;

export default Home;
