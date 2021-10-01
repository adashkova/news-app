import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { Context } from '../../Context';
import { Button } from 'antd';

const StyledNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;
const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  p, a,
  button {
    margin-right: 10px;
  }
  button {
    border: none;
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;

const StyledLink = styled.a`
display: flex;
flex-direction: row;
align-items: center;

text-decoration: none;
color: #212121;
cursor: pointer;
:hover {
color: #F0A500;

`;

export const Story = ({ news, idx }) => {
  const { url, title, by, score } = news.data;

  const onClick = () => {
    console.log(`click`);
  };

  return (
    <StyledNewsContainer>
      <StyledMain>
        <p>{`${idx}. `}</p>
        <Button type="primary" onClick={onClick}>
          <i class="fas fa-arrow-circle-up"></i>
        </Button>
        <StyledLink href={url}>{` ${title} (${by})`}</StyledLink>
      </StyledMain>

      <StyledMain>
        <p>{` ${score} points`}</p>
        <StyledLink href={url}> | Comments</StyledLink>
      </StyledMain>
      
    </StyledNewsContainer>
  );
};
export default Story;
