import React from "react";
import styled, { css } from "styled-components/macro";
import moment from "moment";

const border = "1px solid black";
const boldBorder = "3px solid black";

export const Table = styled.div`
  display: table;
  width: 100%;
  border-spacing: 0;
`;
export const Row = styled.div`
  display: table-row;
  height: 36px;
`;
export const Cell = styled.div`
  display: table-cell;
  width: 33px;
`;
export const Time = styled(Cell)`
  text-align: center;
  vertical-align: middle;
`;
export const Block = styled(Cell)`
  border: ${border};
  border-right: ${p => p.bordered ? boldBorder : border };
`;

export const DayTable = () => {
  const times = [
    "00:00",
    "03:00",
    "06:00",
    "09:00",
    "12:00",
    "15:00",
    "18:00",
    "21:00"
  ];
  const renderLine = time => {
    return (
      <Row>
        <Time>{time}</Time>
        <Block></Block>
        <Block></Block>
        <Block bordered></Block>
        <Block></Block>
        <Block></Block>
        <Block bordered></Block>
        <Block></Block>
        <Block></Block>
        <Block></Block>
      </Row>
    );
  };
  return <Table>{times.map(time => renderLine(time))}</Table>;
};
