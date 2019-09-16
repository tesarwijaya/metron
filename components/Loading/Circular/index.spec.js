import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import {
  CircularProgress,
} from '@material-ui/core'

import { Circular } from './index'

describe('Components/Loading/Circular', () => {
  it('should have CircularProgress component', () => {
    const mount = createMount()
    const wrapper = mount(<Circular />)

    expect(wrapper.find(CircularProgress).length).toEqual(1)

    mount.cleanUp()
  })
})
