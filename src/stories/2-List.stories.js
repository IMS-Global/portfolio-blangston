import React from 'react';
import { action } from '@storybook/addon-actions';
import { List } from '../styled/List'

export default {
  title: 'List',
  component: List.UnOrdered,
};

export const UnOrdered = () => (
  <List.UnOrdered onClick={action('clicked')}>
    <List.Item>First List Item</List.Item>
    <List.Item>Second List Item</List.Item>
    <List.Item>Third List Item</List.Item>
    <List.Item>Fourth List Item</List.Item>
  </List.UnOrdered>
)
