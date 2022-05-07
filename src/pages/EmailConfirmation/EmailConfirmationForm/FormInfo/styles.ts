import styled from 'styled-components';
import { ILayout, Row } from 'ui/Layout';
import { colors } from 'styles/colors';

interface IFormikInfoWrapper extends ILayout {
  visible: boolean;
}

export const FormikInfoWrapper = styled(Row)<IFormikInfoWrapper>`
  width: 100%;
  background-color: ${colors.turquoise};
  color: ${colors.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.05);
  padding: 40px 35px;
  box-sizing: border-box;
  z-index: -1;
  transition: 0.4s all ease;
  height: 110px;
  margin-bottom: ${({ visible }: IFormikInfoWrapper) => (visible ? '-10px' : '-110px')};
`;
