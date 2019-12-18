import React from "react";
import styled from 'styled-components/macro';

import { ColorPicker } from '../../components/ColorPicker/ColorPicker';
import { DatePicker } from '../../components/DatePicker/DatePicker';

const Wrapper = styled.div`
  width: 414px;
  padding: 10px;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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
