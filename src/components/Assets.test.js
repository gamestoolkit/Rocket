import React from 'react'
import renderer from 'react-test-renderer'
import Assets from './Assets'

jest.mock('./Asset', () => 'Asset')

it('renders correctly', () => {
  const tree = renderer
    .create(<Assets assets={[]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('fails when no list is given', () => {
  expect(() => renderer
      .create(<Assets assets={{}} />)).toThrowError()
})