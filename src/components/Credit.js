import React from 'react';
import styled from 'styled-components';

export default function Credit({text}) {
  return (
    <CreditContainer>
      <CreditText>Photo by {text}</CreditText>
    </CreditContainer>
  );
}

const CreditContainer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  bottom: 4px;
  right: 4px;
  border-radius: 4px;

  :hover {
    background-color: white;
  }
`;

const CreditText = styled.p`
  margin: 0;
  font-size: 10px;
  padding: 0px 4px;
  color: rgba(0, 0, 0, 0.7);
`;
