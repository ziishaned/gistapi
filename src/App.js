import {useState} from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import GlobalStyles from './GlobalStyle';
import GistList from './components/GistList';

const App = () => {
  const [username, setUsername] = useState('');

  const onChangeUsername = (value) => {
    setUsername(value);
  };

  return (
    <Wrapper className="App" data-testid="app">
      <Header onChangeUsername={onChangeUsername} />
      <GlobalStyles />
      <GistList username={username} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
