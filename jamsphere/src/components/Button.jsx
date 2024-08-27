import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Define dynamic styles
const gradientBackground = (props) => css`
  background: linear-gradient(
    135deg,
    ${props.theme.colors.primaryLight},
    ${props.theme.colors.primary}
  );
`;

const gradientHoverBackground = (props) => css`
  background: linear-gradient(
    135deg,
    ${props.theme.colors.primaryDark},
    ${props.theme.colors.primary}
  );
`;

const gradientSecondaryBackground = (props) => css`
  background: linear-gradient(
    135deg,
    ${props.theme.colors.secondaryLight},
    ${props.theme.colors.secondary}
  );
`;

const gradientSecondaryHoverBackground = (props) => css`
  background: linear-gradient(
    135deg,
    ${props.theme.colors.secondaryDark},
    ${props.theme.colors.secondary}
  );
`;

// Styled Button component
const Button = styled.button`
  padding: 12px 24px;
  border-radius: 50px;
  border: none;
  ${gradientBackground}
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.08);
  outline: none;

  &:hover {
    ${gradientHoverBackground}
    transform: translateY(-4px);
    box-shadow:
      0 8px 16px rgba(0, 0, 0, 0.1),
      0 3px 6px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.08);
  }

  ${(props) =>
    props.secondary &&
    css`
      ${gradientSecondaryBackground}

      &:hover {
        ${gradientSecondaryHoverBackground}
      }
    `}
`;

export default Button;
