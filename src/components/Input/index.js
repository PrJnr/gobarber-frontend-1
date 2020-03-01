import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Error } from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <Error>{error}</Error>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
