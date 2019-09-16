import React from 'react'
import PropTypes from 'prop-types'

import {
  Grid,
  makeStyles,
} from '@material-ui/core'

const styles = makeStyles(() => ({
  grid: {
    padding: '15px',
    '@media screen and (max-width: 767px)': {
      padding: '0 0 !important',
    },
  },
}))

function Component({
  children,
  className,
  ...rest
}) {
  const classes = styles()
  return (
    <Grid item {...rest} className={`${classes.grid} ${className || ''}`}>
      {children}
    </Grid>
  )
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Item = Component

export default Item
