import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

//

const Button = ({ label, link, form }) => {
  if (!link && !form) return null;
  if (form)
    return (
      <ButtonWrapForm type="submit" onClick={form}>
        {label}
      </ButtonWrapForm>
    );

  return <ButtonWrap to={link}>{label}</ButtonWrap>;
};

export default Button;

//

const ButtonWrap = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 1.5rem;
  color: #fff;
  font-weight: 400;
  font-size: 0.875rem;
  text-decoration: none;
  background: linear-gradient(180deg, #06b4ea 0%, #009ee8 100%);
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 158, 235, 0.4);
  cursor: pointer;
  transition: 250ms ease-in-out box-shadow;

  &:hover {
    box-shadow: 0 0 16px rgba(0, 158, 235, 0.4);
  }
`;

const ButtonWrapForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 1.5rem;
  color: #fff;
  font-weight: 400;
  font-size: 0.875rem;
  text-decoration: none;
  background: linear-gradient(180deg, #06b4ea 0%, #009ee8 100%);
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 158, 235, 0.4);
  cursor: pointer;
  transition: 250ms ease-in-out box-shadow;

  &:hover {
    box-shadow: 0 0 16px rgba(0, 158, 235, 0.4);
  }
`;

//

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  form: PropTypes.func,
};

Button.defaultProps = {
  form: null,
  link: null,
};
