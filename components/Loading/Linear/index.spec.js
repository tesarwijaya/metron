import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import {
  LinearProgress,
} from '@material-ui/core'

import { Linear } from './index'

describe('Components/Loading/Linear', () => {
  it('should have LinearProgress component', () => {
    const mount = createMount()
    const wrapper = mount(<Linear><div id="test" /></Linear>)

    expect(wrapper.find(LinearProgress).length).toEqual(1)

    mount.cleanUp()
  })

  it('should render child component', () => {
    const mount = createMount()
    const wrapper = mount(<Linear><div id="test" /></Linear>)

    expect(wrapper.children().containsMatchingElement(<div id="test" />)).toEqual(true)

    mount.cleanUp()
  })
})
