import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as TypedLib from 'typed.js';

export const Typed = (props) => {
  // Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  useEffect(() => {
    // elRef refers to the <span> rendered below
    typed.current = new TypedLib(el.current, props);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [props.strings])

  return (
    <div>
      <span style={{ whiteSpace: 'pre' }} ref={el} />
    </div>
  );
};


Typed.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeSpeed: PropTypes.number,
  backSpeed: PropTypes.number,
  smartBackspace: PropTypes.bool,
}.isRequired;