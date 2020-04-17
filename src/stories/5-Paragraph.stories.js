import React from 'react';
import { action } from '@storybook/addon-actions';
import { Paragraph } from '../styled/Paragraph'

export default {
  title: 'Paragraph',
  component: Paragraph.Normal,
};

export const Normal = () => (
  <Paragraph.Normal>
    aljdflj alksdfjla dfkalkdfjla dflkjaljdf lajldfjalkdf lldfjlajdf aldfjlkajf 
    lajdflajdflja flajldfkj alfdjlajf laksjfla jfdlaj fdl
    lajdflajdlfkja lflakjf lafdjlajfd asldfjlasjfla flj asldkfjalsdjf
    aldsjflakjfj lj alsdjkfjla sdfljlasdjl aslk aljl 
  </Paragraph.Normal>
)
