import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import PageLink from './PageLink'

const Wrapper = styled.span`
  ${tw`ml-6 z-10`}
  svg {
    ${tw`max-w-full h-auto m-0`}
    box-sizing: border-box;
  }
`

export default class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.bPath = React.createRef()
    this.sPath = React.createRef()
    this.pathAnim = React.createRef()
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps)
  }
  
  componentDidMount() {
    let bPath = this.bPath
    let pathAnim = this.pathAnim
    let trackLength = bPath.getTotalLength().toString()
    bPath.setAttribute('stroke-dasharray', trackLength+','+trackLength)
    pathAnim.setAttribute('values','-'+trackLength+';0')
  }

  render() {
    let props = this.props
    return (
      <Wrapper className={this.props.className}>
        <PageLink direction='down' to={this.props.link}>
          <svg className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.92 188.66">
          	<title>Logo</title>
          	<path ref={(ref) => { this.sPath = ref }} id="sPath" className="sPath" d="M223.33,182.25c-1.92-.11-37.61-3.83-37.61,29,0,26.66,28.14,28.76,35.69,28.84,12.74.14,42.29,1.45,42.29,30.09,0,31.05-41.4,35.71-64.21,25.12" transform="translate(-178.22 -146.28)"/>
          	<path ref={(ref) => { this.bPath = ref }} id="bPath" className="bPath" d="M190.41,316.07v9.73c48.69,6.2,107.65-3,101.84-62.91-4.53-46.64-54.3-54.28-76.46-50.11-.22-3,42.57,5.39,38.72-36.31-4.41-29-46.35-21.64-64.1-22.33v10.15" transform="translate(-178.22 -146.28)">
              <animate ref={(ref) => { this.pathAnim = ref }} id="dashAnim" attributeName="stroke-dashoffset" from="0" to="0" dur="2.5s" begin="0" fill="freeze" keySplines="1 1 0.5 1.15" calcMode="spline" />
            </path>
          	<filter id="dropshadow" height="150%" x="-25%" width="180%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
              <feOffset dx="-0.5" dy="1.5" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5"/>
              </feComponentTransfer>
              <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
        	</svg>{props.children}
        </PageLink>
        <span className='logo-title'>Brett Stevenson</span>
      </Wrapper>
    )
  }
}