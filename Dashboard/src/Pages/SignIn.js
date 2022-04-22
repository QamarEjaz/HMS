import React, {useState} from "react";
import styled from "styled-components";
import {
  FormButton,
  FormInput,
  FormLabel,
  PasswordField,
} from "../components/UserTable/AddUser/AddUserStyles";
import front from "../assets/images/front.png";
import Heading from "../components/Heading/Heading";
import {Img} from "../components/GlobalStyles";
import {BiShow} from "react-icons/bi";
import axios from "axios";
import {userlogin} from "../api/Api";
import {Profile} from "../components/Sidebar/SideBarStyles";
import webevis from "../assets/images/webevis.png";
import {useNavigate} from "react-router-dom";
function SignIn() {
  let navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const loginIntialValues = {
    email: "",
    password: "",
  };

  const [loginInfo, setLoginInfo] = useState(loginIntialValues);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${userlogin}`, {
        ...loginInfo,
      });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        setEmailError("");
        setPasswordError("");
        navigate("/");
      } else if (res.status === 204) {
        setEmailError("This email dont exist");
        setPasswordError("");
      } else if (res.status === 205) {
        setPasswordError("Incorrect password");
        setEmailError("");
      }
    } catch (error) {
      console.log("The error message is", error.message);
    }
  };

  const renderForm = (
    <FrontPage>
      <CompanyName>
        <Img src={front} alt="frontImage" />
      </CompanyName>
      <LogInForm>
        <Heading level={1} Cen Big>Health Care</Heading>
        <Heading level={1}>Sign In</Heading>
        <FormContent>
          <InputContainer>
            <FormLabel>Email </FormLabel>
            <FormInput
              type="text"
              placeholder="Enter Email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
              required
            />
            <Error> {emailError ? emailError : ""}</Error>
          </InputContainer>
          <InputContainer>
            <FormLabel>Password </FormLabel>
            <PasswordField>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
                required
              />
              <BiShow onClick={togglePassword} />
            </PasswordField>
            <Error> {passwordError ? passwordError : ""}</Error>
          </InputContainer>
          <FormButton type="submit" onClick={submitHandler}>
            LogIn
          </FormButton>
        </FormContent>
      </LogInForm>
    </FrontPage>
  );

  return <div>{renderForm}</div>;
}

export const Error = styled.p`
  font-size: 12px;
  color: red;
`;
export const FrontPage = styled.div`
  display: flex;
  grid-gap: 50px;
  padding: 20px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const CompanyName = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 800px) {
    Img {
      display: none;
    }
  }
`;
export const LogInForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 30px;
  width: 50%;

  @media screen and (max-width: 800px) {
    justify-content: center;
    background: #fff;
    padding: 80px 60px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
  }
`;
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default SignIn;
