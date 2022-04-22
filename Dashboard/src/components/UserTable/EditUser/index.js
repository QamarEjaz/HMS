import React, {useState} from "react";
import Roles from "../../DropDown";
import {
  FormButton,
  Form,
  FormContent,
  FormInput,
  FormLabel,
  PasswordField,
} from "../AddUser/AddUserStyles";
import {BiShow} from "react-icons/bi";
import axios from "axios";
import {updateUserById} from "../../../api/Api";
const EditUser = ({itemId, name, email, fetchData}) => {
  const modalIntialValue = {
    name: name,
    email: email,
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(modalIntialValue);
  const [role, setRole] = useState("");

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
    e.preventDefault();
    try {
      {
        const res = await axios.put(`${updateUserById}/${itemId}`, {
          ...user,
          role,
        });
        if (res.status === 200) {
          fetchData();
        }
      }
    } catch (error) {
      console.log("The error message is", error.message);
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
        <FormLabel htmlFor="for">Email</FormLabel>
        <FormInput
          type="email"
          required
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Please Enter Email"
        />
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
        <FormButton type="submit" onClick={submitHandler}>
          Update
        </FormButton>
      </Form>
    </FormContent>
  );
};

export default EditUser;
