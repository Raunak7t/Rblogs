import styled from "styled-components";

import React from "react";

const ST = styled.span`
  font-family: "Satisfy", cursive;
  -webkit-text-stroke: 0.1px #f1b0ff55;
`;

function StyledText({ children, className }) {
  return (
    <ST
      className={`bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent font-extrabold p-1 ${className}`}
    >
      {children}
    </ST>
  );
}

export default StyledText;
