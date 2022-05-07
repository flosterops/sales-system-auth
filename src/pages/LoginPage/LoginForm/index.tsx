import React, { ReactElement, useEffect } from 'react';
import { Title, TitleTags } from 'ui/Title';
import {
  AlignItemsTypes,
  EFontFamilies,
  FontSizeTypes,
  JustifyContentTypes,
  WeightTypes,
} from 'models/layout';
import { FormikProps } from 'formik';
import { Form } from 'widgets/Form';
import { Row } from 'ui/Layout';
import { Button } from 'ui/Button';
import { Description } from 'ui/Description';
import { Field } from 'widgets/Form/Field';
import { colors } from 'styles/colors';
import { EIconTypes } from 'models/icons';
import { isRequired } from 'widgets/Form/validations';
import { EInputTypes, IInitialLoginFormValues } from 'models/forms';
import { initialFormValues } from 'helpers/forms';
import { NavLink } from 'ui/NavLink';
import { Box } from 'ui/Box';
import { ERouteLinks } from 'models/route';
import { EButtonTypes } from 'models/button';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'store/reducers/user-reducer/actions';
import { useModal } from 'widgets/Modal/context';
import { EModalTypes } from 'models/modal';
import { fetchUserApps } from 'requests/user-apps';
import { isError } from 'models/guards';
import { TStore } from 'store';
import { ForgotPasswordPopup } from 'pages/LoginPage/ForgotPasswordPopup';
import { setUserError } from 'store/reducers/user-reducer';
import { LoginFormWrapper, SubTitle } from './styles';

const getSelectors = (state: TStore) => ({
  error: state.user.error,
  accessToken: state.user.auth.accessToken,
});

const LoginForm = (): ReactElement => {
  const dispatch = useDispatch();
  const { error } = useSelector(getSelectors);
  const { openModal } = useModal();

  useEffect(
    () => () => {
      dispatch(setUserError(null));
    },
    [dispatch],
  );

  const handleSubmit = async (values: IInitialLoginFormValues): Promise<void> => {
    const { email, password } = values;
    try {
      const data: any = await dispatch(loginUser({ email, password, remember: true }));
      if (data.payload && data.payload.accessToken) {
        const userApps = await fetchUserApps(data.payload.accessToken);
        if (!isError(userApps)) {
          openModal(EModalTypes.appList, { applications: userApps });
        }
      }
    } catch (e: any) {
      console.error('Login error');
    }
  };

  return (
    <LoginFormWrapper hasError={!!error}>
      <Box>
        <Title
          tagName={TitleTags.h2}
          fontSize={FontSizeTypes.l}
          lh="1.5"
          fontFamily={EFontFamilies.bree}
          mbottom="15px"
        >
          Login to your account
        </Title>
        <SubTitle lh="2.25" fontSize={FontSizeTypes.m} mbottom="10px">
          Please fill in the form below
        </SubTitle>
        <Form
          initialValues={initialFormValues.login}
          onSubmit={handleSubmit}
          validations={{
            email: [isRequired()],
            password: [isRequired()],
          }}
        >
          {(formikProps: FormikProps<IInitialLoginFormValues>): ReactElement => (
            <>
              <Field
                name="email"
                spaces={{ margin: '30px 0 0 0' }}
                type={EInputTypes.email}
                placeholder="Email address"
                icon={EIconTypes.email}
                color={colors.primary}
                label="Email address"
                value={formikProps.values.email}
              />
              <Field
                name="password"
                spaces={{ margin: '30px 0 0 0' }}
                type={EInputTypes.password}
                placeholder="Password"
                icon={EIconTypes.password}
                color={colors.primary}
                label="Password"
                value={formikProps.values.password}
              />
              <Row componentWidth="auto">
                <NavLink mtop="20px" to={ERouteLinks.forgotPassword} color={colors.primary}>
                  Forgot password?
                </NavLink>
                <ForgotPasswordPopup open={!!error} />
              </Row>
              <Row
                ai={AlignItemsTypes.center}
                // TODO will be used later. Fix: https://team-1611154638490.atlassian.net/browse/CRZM-487
                // jc={JustifyContentTypes.spaceBetween}
                jc={JustifyContentTypes.flexEnd}
                mtop="34px"
              >
                {/* TODO will be used later. Fix: https://team-1611154638490.atlassian.net/browse/CRZM-487 */}
                {/* <Field */}
                {/*  name="remember" */}
                {/*  type={EFieldTypes.checkbox} */}
                {/*  label="Remember me" */}
                {/*  value={formikProps.values.remember} */}
                {/* /> */}
                <Button
                  type={EButtonTypes.submit}
                  onClick={formikProps.handleSubmit}
                  width="204px"
                  color={colors.primary}
                  icon={EIconTypes.rightChevron}
                >
                  <Description
                    fontSize={FontSizeTypes.xm}
                    color={colors.white}
                    weight={WeightTypes.w800}
                  >
                    Login
                  </Description>
                </Button>
              </Row>
            </>
          )}
        </Form>
      </Box>
    </LoginFormWrapper>
  );
};
export { LoginForm };
