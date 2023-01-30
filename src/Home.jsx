import React from "react";
import styled from "styled-components";
import { FaWifi } from "react-icons/fa";
import { RiRotateLockFill } from "react-icons/ri";
import lowBattery from "./assets/images/배터리부족.png";
import thunder from "./assets/images/번개.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/chat");
  };
  return (
    <Container>
      <TopBar>
        <FirstBar>
          No Service <FaWifi className="wifi" />
        </FirstBar>
        <SecondBar>18:43</SecondBar>
        <ThirdBar>
          <RiRotateLockFill className="lock" size="20" />
          <span>11%</span>
          <img src={lowBattery} alt="battery" width={35} height={35} />
          <img src={thunder} alt="thunder" width={15} height={18} />
        </ThirdBar>
      </TopBar>
      <Welcome>
        <p>Welcome to KakaoTalk</p>
        <div>If you have a Kakao Account,</div>
        <div>log in with your email or phone number.</div>
      </Welcome>
      <Form>
        <EmailInput placeholder="Email or phone number" required />
        <PasswordInput type="password" placeholder="Password" required />
      </Form>
      <ButtonWrap>
        <LogIn onClick={logIn}>Log In</LogIn>
        <SignUp>Sign Up</SignUp>
        <p>Find Kakao Account or Password</p>
      </ButtonWrap>
    </Container>
  );
}

export default Home;

export const Container = styled.div`
  width: 500px;
  margin: auto;
`;

export const TopBar = styled.div`
  display: grid;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 18px;
  font-weight: 600;
  .wifi {
    vertical-align: -2px;
    margin-left: 3px;
  }
  .lock {
    vertical-align: -4px;
    margin-right: 6px;
  }
`;

export const FirstBar = styled.div`
  padding-top: 9px;
`;

export const SecondBar = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: 800;
  padding-top: 10px;
`;

export const ThirdBar = styled.div`
  display: flex;
  align-items: center;
  padding-left: 48px;
  img {
    margin-left: 3px;
  }
`;

const Welcome = styled.div`
  width: 90%;
  text-align: center;
  margin: 80px auto;
  p {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  div {
    margin-top: 5px;
    font-size: 20px;
    color: #888888;
  }
`;

const Form = styled.div`
  width: 90%;
  margin: auto;
`;
const EmailInput = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 20px;
  border-bottom: #888888 2px solid;
  border-left: medium none;
  border-right: medium none;
  border-top: medium none;
  :focus {
    outline: none;
  }
`;
const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  font-size: 20px;
  border-bottom: #888888 2px solid;
  border-left: medium none;
  border-right: medium none;
  border-top: medium none;
  :focus {
    outline: none;
  }
`;

const ButtonWrap = styled.div`
  width: 90%;
  margin: auto;
  p {
    margin-top: 25px;
    text-align: center;
    font-size: 17px;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`;

const LogIn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const SignUp = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
