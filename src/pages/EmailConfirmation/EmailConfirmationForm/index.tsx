import React, { ReactElement, useState } from 'react';
import {
  AlignItemsTypes,
  AlignTextTypes,
  ComponentSizesTypes,
  FontSizeTypes,
  JustifyContentTypes,
  WeightTypes,
} from 'models/layout';
import { SubTitle } from 'pages/LoginPage/LoginForm/styles';
import { EIconTypes } from 'models/icons';
import { colors } from 'styles/colors';
import { Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import { Button } from 'ui/Button';
import { Box } from 'ui/Box';
import { EButtonsVariants } from 'models/button';
import { Icon } from 'ui/Icon';
import { ERouteLinks } from 'models/route';
import { FormInfo } from './FormInfo';
import { EmailConfirmationFormWrapper } from './styles';

const EmailConfirmationForm = (): ReactElement => {
  const [succeed, setSucceed] = useState<boolean>(true);
  return (
    <EmailConfirmationFormWrapper>
      <FormInfo visible={succeed} />
      <Box padding="52px 40px 65px" ai={AlignItemsTypes.center}>
        <SubTitle
          fontSize={FontSizeTypes.m}
          color={colors.black}
          textAlign={AlignTextTypes.center}
        >
          Please check your inbox and click in the received link to reset a password
        </SubTitle>
        <Icon
          type={EIconTypes.paperPlane}
          fontSize="100px"
          mtop="30px"
          color={colors.yellow}
        />
        <Button
          variant={EButtonsVariants.link}
          mtop="37px"
          width="204px"
          color={colors.primary}
          icon={EIconTypes.rightChevron}
          to={ERouteLinks.login}
        >
          <Description
            fontSize={FontSizeTypes.xm}
            color={colors.white}
            weight={WeightTypes.w800}
          >
            Login
          </Description>
        </Button>
        <Row mtop="27px" jc={JustifyContentTypes.center}>
          <SubTitle fontSize={FontSizeTypes.m} color={colors.black} mright="5px">
            Didn&apos;t receive the link?
          </SubTitle>
          <Button
            onClick={() => setSucceed(!succeed)}
            variant={EButtonsVariants.text}
            componentSize={ComponentSizesTypes.auto}
          >
            Resend
          </Button>
        </Row>
      </Box>
    </EmailConfirmationFormWrapper>
  );
};

export { EmailConfirmationForm };
