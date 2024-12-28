import { sendPasswordResetEmail } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  margin-top: 10px;
  border-radius: 40px;
  padding: 5px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

export default function ResetPassword({ email }: { email: string }) {
  const onClick = async () => {
    if (!email) {
      alert("Please enter your email address in the email field.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert(`Password reset email has been sent to ${email}`);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={onClick}>Forgot Password?</Button>;
}
