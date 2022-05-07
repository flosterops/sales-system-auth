import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import {
  FontSizeTypes,
  WeightTypes,
  ISpaceTypes,
  AlignTextTypes,
  EFontFamilies,
} from 'models/layout';
import {
  styledSpace,
  styledWeight,
  styledFontSize,
  styledTextAlign,
  styledFontFamily,
  styledLh,
} from 'styles/functions';

const StyledDescription = styled.p<IDescription>`
  ${styledFontFamily}
  ${styledSpace};
  ${styledWeight};
  ${styledFontSize};
  ${styledTextAlign};
  ${styledLh};
  display: flex;
  width: auto;
  color: ${({ color }: IDescription): string => color as string};
  text-transform: ${(props: IDescription): string => (props.uppercase ? 'uppercase' : 'none')};
`;

export interface IDescription extends ISpaceTypes {
  color?: string;
  fontSize?: FontSizeTypes;
  uppercase?: boolean;
  textAlign?: AlignTextTypes;
  weight?: WeightTypes;
  children: ReactNode | ReactNodeArray;
  fontFamily?: EFontFamilies;
  lh?: string;
  onClick?: (...args: any) => any;
}

/**
 * @description - Default UI component for descriptions as <p></p>
 * @param children - react children
 * @param color - text color
 * @param fontSize - text font size
 * @param weight - text font weight
 * @param textAlign - text align
 * @param fontFamily - current font family type
 * @param lh - current line-height
 * @param props - other kind of props as onClick and etc
 */
const Description: React.FC<IDescription> = ({
  children,
  color = colors.textPrimary,
  fontSize = FontSizeTypes.s,
  weight = WeightTypes.w500,
  textAlign = AlignTextTypes.default,
  fontFamily = EFontFamilies.default,
  lh = 'auto',
  ...props
}: IDescription): ReactElement => (
  <StyledDescription
    color={color}
    fontSize={fontSize}
    textAlign={textAlign}
    weight={weight}
    fontFamily={fontFamily}
    lh={lh}
    {...props}
  >
    {children}
  </StyledDescription>
);

export { Description };
