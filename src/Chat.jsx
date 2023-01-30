import React from "react";
import { FaWifi } from "react-icons/fa";
import { RiRotateLockFill } from "react-icons/ri";
import { BsChat, BsSearch, BsMusicNoteBeamed, BsGear, BsPerson, BsFillChatFill, BsThreeDots } from "react-icons/bs";
import { FirstBar, SecondBar, ThirdBar, TopBar } from "./Home";
import fullBattery from "./assets/images/배터리풀.png";
import Kakao from "./assets/images/카카오.png";
import styled from "styled-components";

function Chat() {
  return (
    <ChatWrap>
      <TopBar>
        <FirstBar>
          No Service <FaWifi className="wifi" />
        </FirstBar>
        <SecondBar>21:23</SecondBar>
        <ThirdBar>
          <RiRotateLockFill className="lock" size="20" />
          <span>100%</span>
          <img src={fullBattery} alt="battery" width={35} height={35} style={{ marginLeft: "6px" }} />
        </ThirdBar>
      </TopBar>
      <ChatOption>
        <ChatList>Chats</ChatList>
        <Options>
          <BsSearch className="search" size="27" />
          <BsChat className="chat" size="27" />
          <BsMusicNoteBeamed className="music" size="27" />
          <BsGear className="gear" size="27" />
        </Options>
      </ChatOption>
      <MyChat>
        <Profile>
          <img src={Kakao} alt="kakao" width={60} height={60} />
        </Profile>
        <LastChat>
          <Name>KakaoTalk</Name>
          <Content>Please check My Kakao Account Info</Content>
        </LastChat>
        <ChatTime>
          <Time>21:22</Time>
          <ChatCount>1</ChatCount>
        </ChatTime>
      </MyChat>
      <Footer>
        <div>
          <BsPerson size="30" className="person" />
        </div>
        <div>
          <BsFillChatFill size="30" className="footerChat" />
          <Count>1</Count>
        </div>
        <div>
          <BsSearch size="28" className="footerSearch" />
        </div>
        <div>
          <BsThreeDots size="30" className="dots" />
          <RedDot />
        </div>
      </Footer>
    </ChatWrap>
  );
}

export default Chat;

const ChatWrap = styled.div`
  width: 500px;
  height: 100vh;
  margin: auto;
  position: relative;
  overflow: hidden;
`;

const ChatOption = styled.div`
  width: 95%;
  margin: 20px auto;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
`;

const ChatList = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 10px;
  cursor: pointer;
`;

const Options = styled.div`
  width: 45%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .gear {
    margin-left: 15px;
    cursor: pointer;
  }
  .chat {
    margin-left: 15px;
    cursor: pointer;
  }
  .music {
    margin-left: 15px;
    cursor: pointer;
  }
  .search {
    margin-left: 15px;
    cursor: pointer;
  }
`;

const MyChat = styled.div`
  width: 95%;
  padding: 0 0.3rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  cursor: pointer;
`;

const Profile = styled.div`
  margin-left: 10px;
  img {
    border-radius: 23px;
  }
`;

const LastChat = styled.div`
  margin-top: 9px;
  margin-left: 9px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 7px;
`;
const Content = styled.p`
  font-size: 17px;
  color: #888888;
`;

const ChatTime = styled.div`
  margin-top: 9px;
  margin-left: 25px;
`;

const Time = styled.p`
  font-size: 15px;
  color: #888888;
`;

const ChatCount = styled.p`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  margin: 5px 0px 0px 15px;
  padding-top: 5px;
  font-size: 15px;
  color: #ffffff;
  background-color: red;
`;

const Footer = styled.div`
  width: 500px;
  height: 60px;
  padding: 13px 0px 0px 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: fixed;
  bottom: 0;
  border-top: 1px solid lightgray;
  background-color: #f9f9fa;
  .person {
    cursor: pointer;
  }
  .footerChat {
    cursor: pointer;
  }
  .footerSearch {
    cursor: pointer;
  }
  .dots {
    cursor: pointer;
  }
`;

const Count = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  padding-top: 5px;
  font-size: 15px;
  color: #ffffff;
  background-color: red;
  transform: translate(80%, -160%);
`;

const RedDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: red;
  transform: translate(500%, -550%);
`;
