import styled from 'styled-components';
import { Column, ILayout } from 'ui/Layout';
import { colors } from 'styles/colors';

interface IResetPasswordFormWrapper extends ILayout {
  hasError: boolean;
}

export const ResetPasswordFormWrapper = styled(Column)<IResetPasswordFormWrapper>`
  max-width: 600px;
  &::before {
    width: 100%;
    content: 'Please enter a valid email address';
    background-color: ${colors.error};
    color: ${colors.white};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 40px 35px;
    box-sizing: border-box;
    z-index: -1;
    transition: 0.4s all ease;
    height: 110px;
    margin-bottom: ${({ hasError }) => (hasError ? '-10px' : '-110px')};
  }
`;
