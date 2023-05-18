import React from 'react'
import styles from './decoBackground.module.css'
import { cx, css } from '@emotion/css'


export default function DecoBackground({ repeat, position, left = '-240px' }) {

  // const repeat = type === 'content' ? 'repeat' : 'no-repeat'
  // const position = type === 'content' ? 'absolute' : 'fixed';
  // const repeat = type === 'content' ? 'repeat' : 'no-repeat'
  // const position = type === 'content' ? 'absolute' : 'fixed';
  const cls1 = css`
      --category-background-offset:${left}
  `
  return <div className={cx(
    cls1,
    styles['deco-background'],
    styles[repeat],
    styles[position],
  )}
  />;
}
