import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

it('renders the component', () => {
  const output = shallow(
    <Accordion>
      <AccordionItem title="Accordion Title">Accordion content</AccordionItem>
    </Accordion>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Accordion className="my-extra-class">
      <AccordionItem title="Accordion Title">Accordion content</AccordionItem>
    </Accordion>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with chevron on the left', () => {
  const output = shallow(
    <Accordion align="start">
      <AccordionItem title="Accordion Title">Accordion content</AccordionItem>
    </Accordion>,
  );

  expect(output).toMatchSnapshot();
});

it('opens the accordion panel when the header is clicked', () => {
  const output = mount(
    <Accordion>
      <AccordionItem title="Accordion Title">Accordion content</AccordionItem>
    </Accordion>,
  );

  const accordionId = 'div[id^="accordion-panel"]';
  const expandedClass = 'AccordionPanel--expanded';

  expect(output.find(accordionId).hasClass(expandedClass)).toBe(false);
  output.find('button').simulate('click');
  expect(output.find(accordionId).hasClass(expandedClass)).toBe(true);
});

it('has no a11y issues', async () => {
  const output = mount(
    <Accordion>
      <AccordionItem title="Accordion Title">Accordion content</AccordionItem>
    </Accordion>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
