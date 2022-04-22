import React, {useState} from "react";
import Roles from "../../DropDown";
import {AddUserValidator} from "./AddUserValidation";
import {
  FormButton,
  Form,
  FormContent,
  FormInput,
  FormLabel,
  PasswordField,
} from "./AddUserStyles";
import {BiShow} from "react-icons/bi";
import axios from "axios";
import {register} from "../../../api/Api";

const AddUser = () => {
  const modalIntialValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(modalIntialValue);
  const [role, setRole] = useState("");
  const [modalErrors, setModalErrors] = useState({});
  const AddUserModalClear = () => {
    setUser(modalIntialValue);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    const errorsCount = AddUserValidator(user);
    setModalErrors(errorsCount);
    e.preventDefault();
    try {
      if (Object.keys(errorsCount).length === 0) {
        const res = await axios.post(user, {
          ...user,
        });
      }
    } catch (error) {
      console.log("The error message is", error.message);
    }
    {
      const res = await axios.post(`${register}`, {
        ...user,
        role,
      });
    }
  };

  return (
    <FormContent>
      <Form action="#">
        <FormLabel htmlFor="for">Name</FormLabel>
        <FormInput
          type="text"
          required
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Please Enter Name"
        />
        <p>{modalErrors.name ? modalErrors.name : " "} </p>
        <FormLabel htmlFor="for">Email</FormLabel>
        <FormInput
          type="email"
          required
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Please Enter Email"
        />
        <p> {modalErrors.email ? modalErrors.email : " "}</p>
        <FormLabel htmlFor="role">Role</FormLabel>
        <Roles role={role} setRole={setRole} />
        <FormLabel htmlFor="for">Password</FormLabel>
        <PasswordField>
          <input
            type={passwordShown ? "text" : "password"}
            required
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Please Enter Password"
          />
          <BiShow onClick={togglePassword} />
        </PasswordField>
        <p>{modalErrors.password ? modalErrors.password : " "} </p>
        <FormLabel htmlFor="for">Confirm Password</FormLabel>
        <PasswordField>
          <input
            type={passwordShown ? "text" : "password"}
            required
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            placeholder="Please Confirm Password"
          />
          <BiShow onClick={togglePassword} />
        </PasswordField>
        <p>
          {modalErrors.confirmpassword ? modalErrors.confirmpassword : " "}
        </p>
        <FormButton type="submit" onClick={submitHandler}>
          Add User
        </FormButton>
      </Form>
    </FormContent>
  );
};

export default AddUser;
