import styled from "@emotion/styled";
import StackDivider from "../common/StackDivider";

const Actions = () => {
  return (
    <ActionContainer>
      <StackDivider
        items={[
          <NameTypography>나보아님</NameTypography>,
          <LockTypography>네이버ID</LockTypography>,
        ]}
      />
      <EmailTypography>boahla@naver.com</EmailTypography>
      <StackDivider
        style={{ marginTop: "7px" }}
        items={[
          <ActionDefaultTypography>시작하기</ActionDefaultTypography>,
          <ActionDefaultTypography>쪽지</ActionDefaultTypography>,
          <ActionDefaultTypography>해피빈</ActionDefaultTypography>,
        ]}
      />
    </ActionContainer>
  );
};

export default Actions;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const EmailTypography = styled.div`
  font-size: 13px;
  color: #000;
  line-height: 20px;
  margin-top: 1px;
`;

const NameTypography = styled.div`
  font-weight: 800;
  font-size: 15px;
`;

const LockTypography = styled.div`
  font-size: 13px;
  color: #606060;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ActionDefaultTypography = styled.div`
  font-size: 13px;
  color: #000;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
