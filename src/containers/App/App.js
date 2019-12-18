import React from "react";
import styled from "styled-components/macro";

import { ColorPicker } from "../../components/ColorPicker/ColorPicker";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import { DayTable } from "../../components/DayTable/DayTable";

const Wrapper = styled.div`
  width: 414px;
  padding: 10px;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Content = styled.section`
  padding-top: 30px;
`;

function App() {
  return (
    <Wrapper>
      <Header>
        <DatePicker />
        <ColorPicker />
      </Header>
      <Content>
        <DayTable />
      </Content>
    </Wrapper>
  );
}

export default App;
