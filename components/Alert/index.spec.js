import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import {
  Snackbar,
} from '@material-ui/core'

import {
  Alert,
  CustomSnackbarContentWrapper,
} from './index'

describe('Components/Alert', () => {
  it('should have Snackbar component', () => {
    const mount = createMount()
    const wrapper = mount(<Alert message="hello world" open />)

    expect(wrapper.find(Snackbar).length).toEqual(1)

    mount.cleanUp()
  })

  it('should pass open props to Snackbar component', () => {
    const mount = createMount()
    const wrapper = mount(<Alert message="hello world" open />)

    expect(wrapper.find(Snackbar).props().open).toEqual(true)

    mount.cleanUp()
  })

  it('should have Snackbar component with one CustomSnackbarContent children', () => {
    const mount = createMount()
    const wrapper = mount(<Alert message="hello world" open />)

    expect(wrapper.find(Snackbar).children().find(CustomSnackbarContentWrapper).length).toEqual(1)

    mount.cleanUp()
  })

  it('should pass message props to CustomSnackbarContent component', () => {
    const mount = createMount()
    const wrapper = mount(<Alert message="hello world" open />)

    expect(wrapper.find(Snackbar).children().find(CustomSnackbarContentWrapper).props().message).toEqual('hello world')

    mount.cleanUp()
  })
})
