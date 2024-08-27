import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow:
    0 4px 6px rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 7px 14px rgba(50, 50, 93, 0.1),
      0 3px 6px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(1px);
  }

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${props.theme.colors.secondary};
    `}
`;

export default Button;
