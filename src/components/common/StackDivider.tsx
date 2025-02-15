import styled from "@emotion/styled";
import { ReactNode } from "react";

const StackDivider = ({
  items,
  style,
}: {
  items: ReactNode[];
  style?: React.CSSProperties;
}) => {
  return (
    <Container style={style}>
      {items.map((item, idx) => (
        <ItemStack key={idx}>
          {item}
          {idx !== items.length - 1 && <Divider />}
        </ItemStack>
      ))}
    </Container>
  );
};

export default StackDivider;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const ItemStack = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Divider = styled.div`
  border-left: solid 1px #999da1;
  height: 10px;
`;
