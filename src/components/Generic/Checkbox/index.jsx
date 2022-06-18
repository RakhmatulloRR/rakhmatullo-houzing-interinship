import React from 'react';
import { AntCheckbox } from './style';

export default function Checkbox(props) {
  const { children, width } = props;
  return <AntCheckbox width={width}>{children}</AntCheckbox>;
}
