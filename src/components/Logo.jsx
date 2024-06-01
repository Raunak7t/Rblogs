import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-family: "Satisfy", cursive;
  -webkit-text-stroke: 0.1px #f1b0ff55;
`;

function Logo() {
  return (
    <StyledLogo className="bg-gradient-to-r from-purple-400 to-purple-200 text-4xl inline bg-clip-text text-transparent font-extrabold">
      R blogs
    </StyledLogo>
  );
}

export default Logo;
