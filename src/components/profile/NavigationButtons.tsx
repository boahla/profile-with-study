import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProfileType } from "../../sections/MyView";

const NavigationButtons = ({
  setPage,
}: {
  setPage: (page: ProfileType) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const buttons = [
    <NavButton onClick={() => setPage("mail")}>메일</NavButton>,
    <NavButton onClick={() => setPage("cafe")}>카페</NavButton>,
    <NavButton onClick={() => setPage("blog")}>블로그</NavButton>,
    <NavButton onClick={() => setPage("pay")}>페이</NavButton>,
    <NavButton onClick={() => setPage("photo")}>사진</NavButton>,
    <NavButton onClick={() => setPage("post")}>포스트</NavButton>,
  ];

  const handleSlide = (direction: "prev" | "next") => {
    if (!containerRef.current) return;

    const scrollAmount = 250;
    const currentScroll = containerRef.current.scrollLeft;

    containerRef.current.scrollTo({
      left:
        direction === "next"
          ? currentScroll + scrollAmount
          : currentScroll - scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScroll = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowPrev(scrollLeft > 0);
    setShowNext(scrollLeft + clientWidth < scrollWidth);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll(); // 초기 상태 체크

      // 창 크기 변경 시에도 체크
      window.addEventListener("resize", checkScroll);

      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll]);

  return (
    <ButtonSliderContainer>
      {showPrev && (
        <SlideButton
          style={{ left: "-17px" }}
          onClick={() => handleSlide("prev")}
        >
          ←
        </SlideButton>
      )}

      <ButtonContainer ref={containerRef}>
        {buttons.map((item, idx) => (
          <>
            {item}
            {idx !== buttons.length - 1 && <Divider />}
          </>
        ))}
      </ButtonContainer>

      {showNext && (
        <SlideButton
          style={{ right: "-17px" }}
          onClick={() => handleSlide("next")}
        >
          →
        </SlideButton>
      )}
    </ButtonSliderContainer>
  );
};
export default NavigationButtons;

const ButtonSliderContainer = styled.div`
  position: relative;
  width: 420px;
  border-radius: 8px;
  background-image: linear-gradient(to top, #fafbfd 100%, #fff 83%);
`;

const ButtonContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  padding: 10px 0;
  align-items: center;
`;

const NavButton = styled.button`
  flex-shrink: 0;
  padding: 12px 24px;
  white-space: nowrap;
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;

  width: 105px;
  line-height: 22px;
  font-weight: bold;

  border-radius: 8px;

  &.active {
    font-weight: bold;
    color: #333;
  }
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ddd;
  cursor: pointer;
  z-index: 1;

  &:left {
    left: 25px;
  }

  &:right {
    right: 25px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const Divider = styled.div`
  height: 15px;
  border-left: solid 1px rgb(222, 225, 229);
`;
