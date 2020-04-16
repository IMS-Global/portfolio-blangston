import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../styled/Buttons'

export default {
  title: 'Button',
  component: Button.Plain,
};

export const Plain = () => <Button.Plain onClick={action('clicked')}>Hello Button</Button.Plain>;
