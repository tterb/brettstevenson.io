import React, { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

const RE = /{([\d,-]+)}/

const Wrapper = styled.div`
  ${tw`mr-auto mb-5 overflow-auto`}
  width: 100%;
  &.multiline {
    width: 100%;
    pre {
      padding: 1rem 1rem 1.5rem !important;
    }
    button {
      top: 1rem !important;
    }
  }
  pre {
    ${tw`relative p-4`}
  }
  button {
    transition: all 350ms ease-in-out;
    opacity: 0.45;
  }
  &:hover {
    button {
      opacity: 1;
    }
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
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      );
      return inRange
    };
  } else {
    return () => false
  }
}

const CodeBlock= ({ codeString, language, metastring, ...props }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => {
        const multiline = tokens.length > 1 ? 'multiline' : ''
        return (
          <Wrapper className={multiline}>
            <pre className={className}>
              <Copy toCopy={codeString} />
              {tokens.map((line, index) => {
                const { className } = getLineProps({
                  line,
                  key: index,
                  className: shouldHighlightLine(index)
                    ? 'highlight-line'
                    : ''
                })

                return (
                  <div key={index} className={className}>
                    <span className='number-line'>{index + 1}</span>
                    {line.map((token, key) => {
                      const { className, children } = getTokenProps({
                        token,
                        key
                      })
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

export default CodeBlock

function Copy({ toCopy }) {
  const [hasCopied, setHasCopied] = useState(false)

  function copyToClipboardOnClick() {
    if (hasCopied) return
    copyToClipboard(toCopy)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false);
    }, 4000)
  }

  return (
    <CopyButton onClick={copyToClipboardOnClick} data-a11y='false'>
      {hasCopied ? (
        <>Copied <FontAwesomeIcon icon={faCopy} /></>
      ) : (
        <>Copy <FontAwesomeIcon icon={faCopy} /></>
      )}
    </CopyButton>
  )
}

const CopyButton = styled.button`
  ${tw`absolute text-sm align-middle cursor-pointer outline-none py-2 px-3`}
  background: hsl(275, 5%, 25%);
  color: rgba(255,255,255,0.65);
  top: 0.5rem;
  right: 1rem;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.1);
  transition: background 300ms ease;
  svg {
    ${tw`text-base align-bottom pl-1`}
  }
  &:hover {
    background: hsl(275, 5%, 28%);
    color: rgba(255,255,255,0.8);
  }
  &[data-a11y='true']:focus::after {
    ${tw`absolute`}
    content: '';
    background: rgba(255, 255, 255, 0.01);
    left: -2%;
    top: -2%;
    width: 104%;
    height: 104%;
    border-radius: 5px;
  }
`

const Container = styled.div`
  ${tw`w-full mt-4 mx-auto overflow-scroll`}
  max-width: 750px;
  font-size: 13px;
  margin-bottom: 50px;
  border-radius: 5px;
  textarea,
  pre {
    ${tw`p-8`}
  }
`
