import React from 'react'
import PropTypes from 'prop-types'
import CodeBlock from 'components/Post/Code'


function preToCodeBlock(preProps) {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === 'code'
  ) {
    const {
      children: codeString,
      className = '',
      ...props
    } = preProps.children.props

    const matches = className.match(/language-(?<lang>.*)/)
    return {
      codeString: codeString.trim(),
      language: matches && matches.groups && matches.groups.lang ? matches.groups.lang : '',
      className,
      ...props,
    }
  }
  return null
}

const CodePre = (props) => {
  const preProps = preToCodeBlock(props)
  return preProps ? <CodeBlock {...preProps} /> : <pre {...props} />
}
CodePre.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
}

export default CodePre
