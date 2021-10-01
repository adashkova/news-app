import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f0a500;
  list-style: none;
  padding: 0 20px;
  margin-bottom: 10px;
`;
const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
  list-style-type: none;
  :hover {
    color: #cdfeaa;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>
        <StyledLink to="/">
          <i className="fas fa-code"></i> Stories
        </StyledLink>
      </h2>
      <StyledLink to="/story">Story</StyledLink>
    </StyledHeader>
  );
};

export default Header;
