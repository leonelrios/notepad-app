import React from "react";
import styled from "@emotion/styled";

const TextMessage = styled.p`
  text-align: center;
  margin-top: 20%;
`;

const Footer = ({ message }) => {
  return (
    <div>
      <TextMessage>{message}</TextMessage>
    </div>
  );
};

export default Footer;
