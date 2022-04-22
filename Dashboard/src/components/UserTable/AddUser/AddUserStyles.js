import styled from "styled-components";

export const FormContent = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;

 @media screen and (max-width: 480px) {
     padding: 10px;
 }
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
grid-gap: 5px;
 z-index: 1;
 padding: 30px 0;

 @media screen and (max-width: 400px) {
     padding: 32px;
 }
`;

export const FormLabel = styled.label`
 font-size: 14px;
 color:  #109CF1;
`;

export const FormInput = styled.input`
 padding: 10px 15px;
 border: 1px solid  #109CF1;
 outline: none;
 color: #109CF1;
 border-radius: 4px;
 ::placeholder{
     color: #109CF1;
 }
`;

export const FormButton = styled.button`
 background:  #109CF1;
 padding: 10px 20px;
 border: none;
 border-radius: 4px;
 color: #FFF;
 font-size: 20px;
 margin-top: 20px;
 font-weight: bold;
 cursor: pointer;
 &:hover{
     transition: all 0.2s ease-in-out;
     background: #00bf80;
 }
`;
export const PasswordField = styled.div`
display: flex;
 padding: 10px 20px;
 border: 1px solid  #109CF1;
 outline: none;
 color: #109CF1;
 border-radius: 4px;
 input{
     border: none;
     outline: none;
     width: 100%;
     color: #109CF1;
 ::placeholder{
     color: #109CF1;
 }
 }
`;