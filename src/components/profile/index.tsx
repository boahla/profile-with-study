import styled from "@emotion/styled";
import Avatar from "./Avatar";
import Actions from "./Actions";
import NavigationButtons from "./NavigationButtons";
import { ProfileType } from "../../sections/MyView";

const Profile = ({ setPage }: { setPage: (page: ProfileType) => void }) => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <Avatar />
        <Actions />
      </ProfileHeader>
      <ProfileContent>
        <NavigationButtons setPage={setPage} />
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 420px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #e3e5e8, 0 1px 2px 0 rgba(0, 0, 0, 0.04);
`;

const ProfileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 18px 22px 18px 10px;
  align-items: center;
  box-sizing: border-box;
  gap: 20px;
`;

const ProfileContent = styled.div`
  border-radius: 0 0 8px 8px;
  border-top: 1px solid #e3e5e8;
`;
