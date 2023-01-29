import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as TypedLib from 'typed.js';

export const Typed = (props) => {
  // Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  // useEffect(() => {
  //   if (!ref.current) {
  //     return;
  //   }
  //   const typed = new TypedLib(ref.current, options);

  //   return () => {
  //     if (!typed) {
  //       return;
  //     }
  //     typed.destroy();
  //   };
  // }, [ref, options]);

  useEffect(() => {
    // const options = {
    // 	strings: [
    //     'Some <i>strings</i> are slanted',
    //     'Some <strong>strings</strong> are bold',
    //     'HTML characters &times; &copy;'
    //   ],
    //   typeSpeed: 50,
    //   backSpeed: 50,
    // };

    // elRef refers to the <span> rendered below
    // debugger;
    // if (props.strings != null || props.strings.length !== 0) {
    typed.current = new TypedLib(el.current, props);
    // }

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