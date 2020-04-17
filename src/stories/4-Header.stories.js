import React from 'react';
import { action } from '@storybook/addon-actions';
import { Header } from '../styled/Header'

export default {
  title: 'Header',
  component: Header.H1,
};

export const Headers = () => (
  <>
  <Header.H1>H1 Header</Header.H1>
  <Header.H2>H2 Header</Header.H2>
  <Header.H3>H3 Header</Header.H3>
  <Header.H4>H4 Header</Header.H4>
  </>
)

export const H1 = () => <Header.H1>H1 Header</Header.H1>
export const H2 = () => <Header.H2>H2 Header</Header.H2>
export const H3 = () => <Header.H3>H3 Header</Header.H3>
export const H4 = () => <Header.H4>H4 Header</Header.H4>
