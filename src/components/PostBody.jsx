import React from 'react'

const PostBody = (props) => {
  return (
    <div className='post-body'
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PostBody