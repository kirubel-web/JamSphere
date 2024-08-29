import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Define dynamic styles
const gradientBackground = (props) => css`
  background-image: linear-gradient(
    to right,
    ${props.theme.colors.primaryLight} 0%,
    ${props.theme.colors.primary} 51%,
    ${props.theme.colors.primaryLight} 100%
  );
  background-size: 200% auto;
`;

const gradientHoverBackground = (props) => css`
  background-position: right center;
`;

const gradientSecondaryBackground = (props) => css`
  background-image: linear-gradient(
    to right,
    ${props.theme.colors.secondaryLight} 0%,
    ${props.theme.colors.secondary} 51%,
    ${props.theme.colors.secondaryLight} 100%
  );
  background-size: 200% auto;
`;

const gradientSecondaryHoverBackground = (props) => css`
  background-position: right center;
`;

// Styled Button component
const Button = styled.button`
  padding: 10px 45px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  display: block;
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  color: white;
  box-shadow: 0 0 20px #eee;
  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 14px;
  }

  ${(props) =>
    props.secondary ? gradientSecondaryBackground : gradientBackground}

  &:hover {
    ${(props) =>
      props.secondary
        ? gradientSecondaryHoverBackground
        : gradientHoverBackground}
    color: #fff;
    text-decoration: none;
  }

  ${(props) =>
    props.gradient &&
    css`
      background-image: linear-gradient(
        to right,
        #1d2b64 0%,
        #f8cdda 51%,
        #1d2b64 100%
      );
    `}
`;

export default Button;
