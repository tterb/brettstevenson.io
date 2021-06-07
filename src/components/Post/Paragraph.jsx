import React from 'react'
import PropTypes from 'prop-types'


const pStyles = {
    letterSpacing: '0.015em',
    lineHeight: '1.55',
}

const Paragraph = ({ children }) => (
    <p className='text-black text-opacity-80 w-9/10 mx-auto sm:w-full sm:m-0 mb-4' style={pStyles}>
        {children}
    </p>
)
Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Paragraph
