/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
  ScrollViewStyled,
  Engine,
  Body,
  SectionContainer,
  SectionTitle,
  SectionDescription,
  Footer,
  Highlight,
} from './styles';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare var global: {HermesInternal: null | {}};

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollViewStyled contentInsetAdjustmentBehavior="automatic">
        <Header />
        {global.HermesInternal == null ? null : (
          <Engine>
            <Footer>Engine: Hermes</Footer>
          </Engine>
        )}
        <Body>
          <SectionContainer>
            <SectionTitle>Step One</SectionTitle>
            <SectionDescription>
              Edit <Highlight>App.tsx</Highlight> to change this screen and then
              come back to see your edits.
            </SectionDescription>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>See Your Changes</SectionTitle>
            <SectionDescription>
              <ReloadInstructions />
            </SectionDescription>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>Debug</SectionTitle>
            <SectionDescription>
              <DebugInstructions />
            </SectionDescription>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>Learn More</SectionTitle>
            <SectionDescription>
              Read the docs to discover what to do next:
            </SectionDescription>
          </SectionContainer>
          <LearnMoreLinks />
        </Body>
      </ScrollViewStyled>
    </SafeAreaView>
  </>
);

export default App;
