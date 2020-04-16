import React from 'react';
import { action } from '@storybook/addon-actions';
import { Table } from '../styled/Table'

export default {
  title: 'Table',
  component: Table.Frame,
};

export const Simple = () => (
  <Table.Frame>
    <Table.Header>
      <Table.Row justifyContent='center'>
        <Table.Cell>
          <h1>Simple Header</h1>
        </Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell 1</Table.Cell>
        <Table.Cell>Cell 2</Table.Cell>
        <Table.Cell>Cell 3</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell 4</Table.Cell>
        <Table.Cell>Cell 5</Table.Cell>
        <Table.Cell>Cell 6</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell 7</Table.Cell>
        <Table.Cell>Cell 8</Table.Cell>
        <Table.Cell>Cell 9</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Frame>
)
