import { useMemo, useState } from "react";
import styled from "@emotion/styled";
import Profile from "../components/profile";
import { profiles } from "../data/profile";

export type ProfileType = (typeof profiles)[number]["key"];
const MyView = () => {
  const [page, setPage] = useState<ProfileType>("mail");

  const currentProfile = useMemo(
    () => profiles.find((profile) => profile.key === page),
    [page]
  );

  return (
    <div>
      <Profile setPage={setPage} />
      <ContentContainer>{currentProfile?.content}</ContentContainer>
    </div>
  );
};

export default MyView;

const ContentContainer = styled.div`
  margin-top: 20px;
  transition: all 0.3s ease;
`;
