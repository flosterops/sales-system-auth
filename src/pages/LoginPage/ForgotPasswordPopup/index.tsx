import React, { ReactElement, useEffect, useState } from 'react';
import { colors } from 'styles/colors';
import { Icon } from 'ui/Icon';
import { EIconTypes } from 'models/icons';
import { Description } from 'ui/Description';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout';
import { ClosePopup, ClosePopupContainer, ForgotPasswordPopupWrapper } from './styles';

interface IForgotPasswordPopup {
  open: boolean;
}

const ForgotPasswordPopup = ({ open }: IForgotPasswordPopup): ReactElement | null => {
  const [visible, setVisible] = useState<boolean>();

  useEffect((): void => {
    setVisible(open);
  }, [open]);

  if (!visible) {
    return null;
  }

  const handleClose = () => setVisible(false);

  return (
    <ForgotPasswordPopupWrapper
      bg={colors.turquoise}
      padding="12px 28px 12px 13px"
      ai={AlignItemsTypes.center}
      componentWidth="auto"
    >
      <ClosePopupContainer
        jc={JustifyContentTypes.center}
        ai={AlignItemsTypes.center}
        bg={colors.turquoise}
        componentWidth="27px"
        componentHeight="27px"
      >
        <ClosePopup
          type={EIconTypes.closeCircle}
          color={colors.white}
          onClick={handleClose}
          fontSize="25px"
        />
      </ClosePopupContainer>
      <Icon mright="10px" type={EIconTypes.infoCircle} fontSize="26px" color={colors.white} />
      <Description color={colors.white} fontSize={FontSizeTypes.s}>
        Click here to reset your password
      </Description>
    </ForgotPasswordPopupWrapper>
  );
};

export { ForgotPasswordPopup };
