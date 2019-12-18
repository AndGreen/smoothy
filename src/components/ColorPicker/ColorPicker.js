import React, { useState } from "react";
import styled from "styled-components/macro";
import { SketchPicker } from "react-color";

const Swatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`;

const Color = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: rgba(
    ${p => p.color.r},
    ${p => p.color.g},
    ${p => p.color.b},
    ${p => p.color.a}
  );
`;

const Popover = styled.div`
  position: absolute;
  z-index: "2";
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const ColorPicker = () => {
  const [color, setColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1"
  });

  const [displayPicker, setDisplayPicker] = useState(false);

  const handleClick = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleClose = () => {
    setDisplayPicker(false);
  };

  const handleChange = color => {
    setColor(color.rgb);
  };

  return (
    <>
      <Swatch onClick={handleClick}>
        <Color color={color} />
      </Swatch>
      {displayPicker && (
        <Popover>
          <Cover onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </Popover>
      )}
    </>
  );
};
