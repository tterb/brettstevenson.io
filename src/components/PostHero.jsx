import React from 'react'
import Image from 'gatsby-image'
// Styles
import styles from '../styles/hero.scss'

export default ({ post }) => (
  <div className={styles.hero}>
    <Image className={styles.heroImage} alt={post.title} fluid={post.heroImage.fluid} />
  </div>
)
