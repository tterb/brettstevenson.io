import React from 'react'
import styled from 'styled-components'


const PostBody = (props) => {
  return (
    <div className='post-body'
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PostBody