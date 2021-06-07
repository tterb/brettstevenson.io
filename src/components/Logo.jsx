import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// Config
import config from 'config/website'
// Components
import PageLink from 'components/PageLink'


const Title = styled.span`
  font-size: 1.4rem;
  top: -0.125rem;
`

class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.bPath = React.createRef()
    this.sPath = React.createRef()
    // this.pathAnim = React.createRef()
  }

  componentDidMount() {
    const bPath = this.bPath
    // const pathAnim = this.pathAnim
    const trackLength = bPath.getTotalLength().toString()
    bPath.setAttribute('stroke-dasharray', `${trackLength},${trackLength}`)
    // pathAnim.setAttribute('values', `-${trackLength};0`)
  }

  render() {
    const { className, link, children } = this.props
    const siteTitle = config.siteTitleShort
    return (
      <div className={`group flex absolute text-white items-normal justify-center ml-6 z-10 ${className}`}>
        <PageLink 
          className='relative w-6 h-auto'
          label={siteTitle} 
          to={link}
        >
          <svg 
            className='logo text-white stroke-current max-w-full h-auto m-0 box-border z-999'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 121.92 188.66'
          >
            <title>Logo</title>
            <path
              ref={(ref) => { this.sPath = ref }}
              id='sPath' className='sPath'
              d='M223.33,182.25c-1.92-.11-37.61-3.83-37.61,29,0,26.66,28.14,28.76,35.69,28.84,12.74.14,42.29,1.45,42.29,30.09,0,31.05-41.4,35.71-64.21,25.12'
              transform='translate(-178.22 -146.28)' />
            <path
              ref={(ref) => { this.bPath = ref }}
              id='bPath' className='bPath' d='M190.41,316.07v9.73c48.69,6.2,107.65-3,101.84-62.91-4.53-46.64-54.3-54.28-76.46-50.11-.22-3,42.57,5.39,38.72-36.31-4.41-29-46.35-21.64-64.1-22.33v10.15'
              transform='translate(-178.22 -146.28)'>
            </path>
            <filter id='dropshadow' height='150%' x='-25%' width='180%'>
              <feGaussianBlur in='SourceAlpha' stdDeviation='4' />
              <feOffset dx='-0.5' dy='1.5' result='offsetblur' />
              <feComponentTransfer>
                <feFuncA type='linear' slope='0.5' />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode /><feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </svg>
          {children}
        </PageLink>
        <Title className='logo-title relative font-medium text-white text-opacity-90 opacity-0 group-hover:opacity-100 ml-3 transition-opacity duration-300 ease-in-out cursor-default z-10'>{siteTitle}</Title>
      </div>
    )
  }
}
Logo.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Logo
