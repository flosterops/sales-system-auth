import styled from 'styled-components';
import { ILayout, Row } from 'ui/Layout';
import { Icon, IIcon } from 'ui/Icon';
import { colors } from 'styles/colors';

export const ForgotPasswordPopupWrapper = styled(Row)<ILayout>`
  position: absolute;
  z-index: 10;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0 20px 20px 20px;
  top: calc(100% + 15px);
  left: 70px;
  &::before {
    position: absolute;
    left: 0;
    top: -15px;
    content: '';
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid ${colors.turquoise};
  }
`;

export const ClosePopupContainer = styled(Row)<ILayout>`
  position: absolute;
  right: 0;
  top: -12px;
  border-radius: 100%;
`;

export const ClosePopup = styled(Icon)<IIcon>``;
