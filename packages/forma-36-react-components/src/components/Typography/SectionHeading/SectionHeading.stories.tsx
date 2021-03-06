import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import SectionHeading from './SectionHeading';

storiesOf('Components/Typography/SectionHeading', module)
  .addParameters({
    propTypes: SectionHeading['__docgenInfo'],
    component: SectionHeading,
  })
  .add('default', () => (
    <SectionHeading
      className={text('className', '')}
      element={select(
        'element',
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
        'h1',
      )}
    >
      {text('children', 'Section heading')}
    </SectionHeading>
  ));
