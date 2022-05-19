import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div `
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 245, 179, 0.8);
  border-bottom: dotted;
`;

const StyledContent = styled.div `
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const StyledHeader = styled.div `
  font-weight: bold;
  margin-right: 3px;
`;

const StyledData = styled.div `
  font-family: fantasy;
`;

function PromptsAndResponsesEntry({ entry }) {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeader>Prompt:</StyledHeader>
        <StyledData>{entry.props.set[0][0]}</StyledData>
      </StyledContent>
      <StyledContent>
        <StyledHeader>Response:</StyledHeader>
        <StyledData>{entry.props.set[0][1]}</StyledData>
      </StyledContent>
    </StyledContainer>
  )
}

export default PromptsAndResponsesEntry;