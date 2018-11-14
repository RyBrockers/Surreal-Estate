import React from 'react';
import Enzyme from 'enzyme';
import PropertyCard from '../src/propertyCardCompnent';

it('renders the prop of title', () => {
  const wrapper = Enzyme.shallow((
    <PropertyCard title="flat" />
  ));
  expect(wrapper.find('div').find('.title').text()).toContain('flat');
});

it('renders the prop of type', () => {
  const wrapper = Enzyme.shallow((
    <PropertyCard type="flat" />
  ));
  expect(wrapper.find('div').find('.type').text()).toContain('flat');
});

it('renders the prop of city', () => {
  const wrapper = Enzyme.shallow((
    <PropertyCard city="Manchester" />
  ));
  expect(wrapper.find('div').find('.city').text()).toContain('Manchester');
});

it('renders the prop of bedrooms', () => {
  const wrapper = Enzyme.shallow((
    <PropertyCard bedrooms="3" />
  ));
  expect(wrapper.find('div').find('.bedrooms').text()).toContain('3');
});

it('renders the prop of bathrooms', () => {
  const wrapper = Enzyme.shallow((
    <PropertyCard bathrooms="3" />
  ));
  expect(wrapper.find('div').find('.bathrooms').text()).toContain('3');
});

it('renders the prop of price', () => {
  const wrapper = Enzyme.shallow((
    <PropertyCard price="3" />
  ));
  expect(wrapper.find('div').find('.price').text()).toContain('3');
});

it('renders the prop of email', () => {
  const wrapper = Enzyme.shallow((
    <PropertyCard email="3" />
  ));
  expect(wrapper.find('div').find('.email').text()).toContain('3');
});
