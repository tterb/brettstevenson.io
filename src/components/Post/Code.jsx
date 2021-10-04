import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from 'styled-components'
// Icons
import { Copy as CopyIcon } from '@styled-icons/fa-regular'


const RE = /{([\d,-]+)}/

const Wrapper = styled.div`
  &.multiline {
    button {
      top: 0.75rem !important;
      right: 0.75rem;
    }
  }
  pre {
    width: 95%;
    border-radius: 5px;
    transition: all 350ms ease-in-out;
    @media (max-width: 500px) {
      width: 100vw;
      border-radius: 0;
      box-shadow: inset 0 -4px 30px -10px rgba(0,0,0,0.8);
      .token-line .number-line {
        display: none;
      }
    }
  }
`

const CopyBtn = styled.button`
  background: hsl(280, 5%, 22%);
  top: 0.6rem;
  right: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  transition: background 300ms ease;
  &:hover {
    background: hsl(280, 5%, 25%);
  }
  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.01);
    left: -2%;
    top: -2%;
    width: 104%;
    height: 104%;
    border-radius: 5px;
  }
`

function copyToClipboard(toCopy) {
  const el = document.createElement('textarea')
  el.value = toCopy
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) => (
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start))
      return inRange
    };
  }
  return () => false
}

const CodeBlock = ({ codeString, language, metaString }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metaString)
  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => {
        const multiline = tokens.length > 1 ? ' mx-auto my-0 multiline' : ''
        const preClass = `${className} group relative p-4${multiline.length ? ' pt-3 pb-5 my-0' : ''}`
        return (
          <Wrapper className={`w-full mr-auto mb-0 overflow-auto${multiline}`}>
            <pre className={preClass}>
              <CopyButton toCopy={codeString} />
              {tokens.map((line, index) => {
                const { className } = getLineProps({
                  line,
                  key: index,
                  className: shouldHighlightLine(index) ? 'highlight-line' : '',
                })

                return (
                  <div key={index} className={className}>
                    <span className='number-line'>{index + 1}</span>
                    {line.map((token, key) => {
                      const { className, children } = getTokenProps({ token, key })
                      return (
                        <span key={key} className={className}>
                          {children}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </pre>
          </Wrapper>
        )
      }}
    </Highlight>
  )
}
CodeBlock.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  metaString: PropTypes.string,
}

export default CodeBlock

function CopyButton({ toCopy }) {

  const [hasCopied, setHasCopied] = useState(false)

  function copyToClipboardOnClick() {
    if (hasCopied) {
      return
    }
    copyToClipboard(toCopy)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false);
    }, 4000)
  }

  return (
    <CopyBtn
      onClick={copyToClipboardOnClick}
      className='absolute hidden sm:flex text-xs text-white text-opacity-60 hover:text-opacity-80 leading-none items-start rounded outline-none p-2 pl-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer'
      data-a11y='false'
    >
      {hasCopied ? (
        <>Copied <CopyIcon className='text-sm leading-none pl-1' size='1em' /></>
      ) : (
        <>Copy <CopyIcon className='text-sm leading-none pl-1' size='1em' /></>
      )}
    </CopyBtn>
  )
}
CopyButton.propTypes = {
  toCopy: PropTypes.string.isRequired,
}