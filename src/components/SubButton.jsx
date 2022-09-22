import React from 'react';
import styled from 'styled-components';

const Button = ({buttonName}) => {
  return <PrimaryButton type='button'>{buttonName}</PrimaryButton>;
};

const PrimaryButton = styled.button`
  min-width: 98px;
  height: 34px;
  background: #fff;
  border: 1px solid #5e43ff;
  border-radius: 30px;
  font-weight: 400;
  color: #252224;
`;

export default Button;