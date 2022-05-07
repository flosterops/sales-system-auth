import { EAppKeyTypes } from 'models/applications';
import { colors } from 'styles/colors';
import { ERouteLinks } from 'models/route';

const getApplicationColor = (key: EAppKeyTypes): string => {
  switch (key) {
    case EAppKeyTypes.admin:
      return colors.turquoise;
    case EAppKeyTypes.salma:
      return colors.error;
    default:
      return colors.primary;
  }
};

const getApplicationPath = (key: EAppKeyTypes): ERouteLinks | null => {
  switch (key) {
    case EAppKeyTypes.admin:
      return process.env.REACT_APP_ADMIN_PANEL_PATH as ERouteLinks;
    case EAppKeyTypes.salma:
      return process.env.REACT_APP_SALMA_PATH as ERouteLinks;
    default:
      return null;
  }
};

export { getApplicationColor, getApplicationPath };
