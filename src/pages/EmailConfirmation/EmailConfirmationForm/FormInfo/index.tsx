import React, { ReactElement } from 'react';
import { Description } from 'ui/Description';
import { Icon } from 'ui/Icon';
import { colors } from 'styles/colors';
import { EIconTypes } from 'models/icons';
import {
  AlignItemsTypes,
  EFontFamilies,
  FontSizeTypes,
  JustifyContentTypes,
} from 'models/layout';
import { FormikInfoWrapper } from './styles';

interface IFormInfo {
  visible: boolean;
}

const FormInfo = ({ visible }: IFormInfo): ReactElement => (
  <FormikInfoWrapper
    ai={AlignItemsTypes.center}
    jc={JustifyContentTypes.spaceBetween}
    visible={visible}
  >
    <Description
      color={colors.white}
      fontSize={FontSizeTypes.l}
      fontFamily={EFontFamilies.bree}
    >
      Email has been sent!
    </Description>
    <Icon type={EIconTypes.check} color={colors.white} fontSize="44px" />
  </FormikInfoWrapper>
);

export { FormInfo };
