import React from 'react';

import { storiesOf } from '@storybook/react';
import Breadcrumb from './index'

storiesOf('Button', module)
  .add('show home', () => <Breadcrumb breadcrumb={['home']} />)
  .add('show links', () => <Breadcrumb breadcrumb={['home', 'second page']} />)
  .add('show two links', () => <Breadcrumb breadcrumb={['home', 'second page', 'three page']} />)
  .add('show page four page last', () => <Breadcrumb breadcrumb={['home', 'second page', 'three page', 'four page']} />)
  .add('show page five page last', () => <Breadcrumb breadcrumb={['home', 'second page', 'three page', 'four page', 'five page']} />)
