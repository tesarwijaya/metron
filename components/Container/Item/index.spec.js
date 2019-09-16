import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import {
  Grid,
} from '@material-ui/core'

import { Item } from './index'

describe('Components/Container/Item', () => {
  it('should have Grid item component', () => {
    const mount = createMount()
    const wrapper = mount(<Item><div /></Item>)

    expect(wrapper.find(Grid).props().item).toEqual(true)
  })

  it('should render child component', () => {
    const mount = createMount()
    const wrapper = mount(<Item><div /></Item>)

    expect(wrapper.find(Grid).children().containsMatchingElement(<div />)).toEqual(true)
  })
})
