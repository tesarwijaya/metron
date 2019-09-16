import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import {
  Grid,
} from '@material-ui/core'

import { Container } from './index'

describe('Components/Container', () => {
  it('should have Grid container component', () => {
    const mount = createMount()
    const wrapper = mount(<Container><div /></Container>)

    expect(wrapper.find(Grid).props().container).toEqual(true)

    mount.cleanUp()
  })

  it('should render child component', () => {
    const mount = createMount()
    const wrapper = mount(<Container><div /></Container>)

    expect(wrapper.find(Grid).children().containsMatchingElement(<div />)).toEqual(true)

    mount.cleanUp()
  })
})
