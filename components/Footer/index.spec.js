import React from 'react'
import { createMount } from '@material-ui/core/test-utils'

import {
  IconButton,
} from '@material-ui/core'

import Facebook from 'mdi-material-ui/Facebook'
import Instagram from 'mdi-material-ui/Instagram'
import Youtube from 'mdi-material-ui/Youtube'
import EmailOutline from 'mdi-material-ui/EmailOutline'

import {
  Container,
  ContainerItem,
} from 'components/Container'

import { Footer } from './index'

describe('Components/Footer', () => {
  it('should have Container component', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(Container).length).toEqual(1)

    mount.cleanUp()
  })

  it('should have Container component with column direction', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(Container).props().direction).toEqual('column')

    mount.cleanUp()
  })

  it('should have Container component with justify center', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(Container).props().justify).toEqual('center')

    mount.cleanUp()
  })

  it('should have Container component with alignItems center', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(Container).props().alignItems).toEqual('center')

    mount.cleanUp()
  })

  it('should have Container component with 2 containerItem child components', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(Container).children().find(ContainerItem).length).toEqual(2)

    mount.cleanUp()
  })

  it('should have 4 IconButton components', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(IconButton).length).toEqual(4)

    mount.cleanUp()
  })

  it('should have IconButton component with Facebook icon', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(IconButton).children().find(Facebook).length).toEqual(1)

    mount.cleanUp()
  })

  it('should have IconButton component with Instagram icon', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(IconButton).children().find(Instagram).length).toEqual(1)

    mount.cleanUp()
  })

  it('should have IconButton component with Youtube icon', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(IconButton).children().find(Youtube).length).toEqual(1)

    mount.cleanUp()
  })

  it('should have IconButton component with EmailOutline icon', () => {
    const mount = createMount()
    const wrapper = mount(<Footer />)

    expect(wrapper.find(IconButton).children().find(EmailOutline).length).toEqual(1)

    mount.cleanUp()
  })
})
