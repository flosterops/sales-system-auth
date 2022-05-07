import styled from 'styled-components';
import { Column, ILayout } from 'ui/Layout';
import { Description, IDescription } from 'ui/Description';
import { colors } from 'styles/colors';

interface ILoginFormWrapper extends ILayout {
  hasError: boolean;
}

export const LoginFormWrapper = styled(Column)<ILoginFormWrapper>`
  max-width: 600px;
  &::before {
    width: 100%;
    content: "We couldn't find an account matching the email address and password you
    entered. Please check your email address and password and try again.";
    background-color: ${colors.error};
    color: ${colors.white};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 40px 35px;
    box-sizing: border-box;
    z-index: -1;
    transition: 0.4s all ease;
    height: 140px;
    margin-bottom: ${(props: ILoginFormWrapper) => (props.hasError ? '-10px' : '-140px')};
  }
`;

export const SubTitle = styled(Description)<IDescription>`
  opacity: 0.6;
`;
