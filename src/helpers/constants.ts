import {
  faCheck,
  faChevronRight,
  faEnvelope,
  faInfoCircle,
  faSearch,
  faTimesCircle,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane as farPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { EIconTypes } from 'models/icons';
import { EPageComponentTypes } from 'models/route';
import { LoginPage } from 'pages/LoginPage';
import { ForgotPassword } from 'pages/ForgotPassword';
import { ResetPassword } from 'pages/ResetPassword';
import { EmailConfirmation } from 'pages/EmailConfirmation';

export const icons = {
  [EIconTypes.email]: faEnvelope,
  [EIconTypes.password]: faUnlockAlt,
  [EIconTypes.rightChevron]: faChevronRight,
  [EIconTypes.search]: faSearch,
  [EIconTypes.infoCircle]: faInfoCircle,
  [EIconTypes.closeCircle]: faTimesCircle,
  [EIconTypes.check]: faCheck,
  [EIconTypes.paperPlane]: farPaperPlane,
};

export const pageComponentTypes = {
  [EPageComponentTypes.LoginPage]: LoginPage,
  [EPageComponentTypes.ForgotPassword]: ForgotPassword,
  [EPageComponentTypes.ResetPassword]: ResetPassword,
  [EPageComponentTypes.EmailConfirmation]: EmailConfirmation,
};
