import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";

import "moment/locale/ru";
import styled from "styled-components/macro";

const DayPickerStyled = styled.div`
  input {
    padding: 0.5em 1em;
  }
`;

export const DatePicker = () => (
  <DayPickerStyled>
    <DayPickerInput
      formatDate={formatDate}
      parseDate={parseDate}
      format="LL"
      placeholder={`${formatDate(new Date(), "LL", "ru")}`}
      dayPickerProps={{
        locale: "ru",
        localeUtils: MomentLocaleUtils
      }}
    />
  </DayPickerStyled>
);
