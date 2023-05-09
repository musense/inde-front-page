import React from 'react'
import styles from './decoBackground.module.css'

export default function DecoBackground({ type }) {

  const repeat = type === 'content' ? 'repeat' : 'no-repeat'
  const position = type === 'content' ? 'absolute' : 'fixed';

  return <div className={`${styles['deco-background']} ${styles[repeat]} ${styles[position]}`} />;
}
