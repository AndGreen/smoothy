import styled from 'styled-components';

import {ScrollView, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const ScrollViewStyled = styled(ScrollView)`
  background-color: ${Colors.lighter};
`;

export const Engine = styled(View)`
  position: absolute;
  right: 0;
`;

export const Body = styled(View)`
  background-color: ${Colors.white};
`;

export const SectionContainer = styled(View)`
  margin-top: 32px;
  padding: 0 24px;
`;

export const SectionTitle = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.black};
`;

export const SectionDescription = styled(Text)`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

export const Highlight = styled(Text)`
  font-weight: 700;
`;

export const Footer = styled(Text)`
  color: ${Colors.dark};
  font-size: 12px;
  font-weight: 600;
  padding: 4px;
  padding-right: 12px;
  text-align: right;
`;
