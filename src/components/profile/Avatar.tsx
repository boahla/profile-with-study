import logo from "../../assets/logo192.png";
import styled from "@emotion/styled";

const Avatar = () => {
  return (
    <AvatarContainer>
      <img src={logo} className="App-logo" alt="logo" />
    </AvatarContainer>
  );
};

export default Avatar;

const AvatarContainer = styled.div`
  width: 64px;
  height: 64px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`;
