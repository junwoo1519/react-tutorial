import React from "react";
import styled from "styled-components";

function Header(props) {
  return (
    <HeaderDiv>
      {props.headerMessage}
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 2rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 1px 1px 10px #aaa;
`;

export default Header;