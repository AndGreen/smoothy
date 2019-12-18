import React from "react";
import styled from 'styled-components/macro';

import { ColorPicker } from '../../components/ColorPicker/ColorPicker';
import { DatePicker } from '../../components/DatePicker/DatePicker';

const Wrapper = styled.div`
  padding: 10px;
`;

const Header = styled.header`
  display: flex;
`;

function App() {
  return <Wrapper>
    <Header>
      <DatePicker />
      <ColorPicker />
    </Header>
  </Wrapper>;
}

export default App;
