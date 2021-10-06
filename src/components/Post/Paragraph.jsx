import React from 'react'
import PropTypes from 'prop-types'


const pStyles = {
    letterSpacing: '0.015em',
    lineHeight: '1.55',
}

const Paragraph = ({ className, children }) => (
    <p className={`text-black text-opacity-80 w-9/10 sm:w-full mx-auto mt-0 mb-4${className ? ` ${className}` : ''}`} style={pStyles}>
        {children}
    </p>
)
Paragraph.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Paragraph
