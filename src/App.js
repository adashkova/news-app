import styled from 'styled-components';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Context } from './Context';
import Header from './components/layout/Header';
import Story from './components/stories/Story';
import Stories from './components/stories/Stories';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #e6e6e6;
`;

function App() {
  const [context, setContext] = useState([]);

  return (
    <Router>
      <Context.Provider value={[context, setContext]}>
        <StyledContainer>
          <Header />

          <Route exact path="/" component={Stories} />
          {/* // <Route component={Story} /> */}
        </StyledContainer>
      </Context.Provider>
    </Router>
  );
}

export default App;
