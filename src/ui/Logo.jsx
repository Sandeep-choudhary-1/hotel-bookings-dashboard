import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const logogo = "Bookings.com";

  const src = isDarkMode ? logogo : logogo;

  return (
    <StyledLogo>
      {/* <Img src={src} alt="Logo" /> */}
      <p>{src}</p>
    </StyledLogo>
  );
}

export default Logo;
