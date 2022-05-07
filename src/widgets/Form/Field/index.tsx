import React, { ReactElement } from 'react';
import { FieldHelperProps, FieldInputProps, FieldMetaProps, useField } from 'formik';
import { EFieldTypes, EInputTypes, TFieldTypes } from 'models/forms';
import { Input } from 'widgets/Form/Input';
import { FieldConfig } from 'formik/dist/Field';
import { Column } from 'ui/Layout';
import { Description } from 'ui/Description';
import { FontSizeTypes, ISpaceTypes } from 'models/layout';
import { colors } from 'styles/colors';
import { ISelectOptionsModel, ISpecialSelectOptions, Select } from 'widgets/Form/Select';
import { EIconTypes } from 'models/icons';
import { Checkbox } from 'widgets/Form/Checkbox';

interface IFieldComponent {
  field: FieldInputProps<string>;
  meta: FieldMetaProps<string>;
  helpers: FieldHelperProps<string>;
  name: string;
  type: TFieldTypes;
  options?: ISelectOptionsModel[];
  selectProps?: ISpecialSelectOptions;
  placeholder?: string;
}

export const FieldComponent = ({
  field,
  helpers,
  meta,
  name,
  type,
  options = [],
  selectProps = {},
  ...props
}: IFieldComponent): ReactElement => {
  switch (type) {
    case EFieldTypes.checkbox:
      return <Checkbox {...props} {...field} {...meta} name={name} helpers={helpers} />;
    case EFieldTypes.select:
      return (
        <Select
          {...props}
          {...field}
          {...meta}
          options={options}
          name={name}
          helpers={helpers}
          selectProps={selectProps}
        />
      );
    case EInputTypes.number:
    case EInputTypes.password:
    case EInputTypes.search:
    case EInputTypes.email:
    case EInputTypes.text:
    default:
      return (
        <Input
          {...props}
          {...field}
          {...meta}
          helpers={helpers}
          name={name}
          type={type as EInputTypes}
        />
      );
  }
};

export interface IField extends FieldConfig {
  name: string;
  type: TFieldTypes;
  // Can be only string | number | boolean
  value: any;
  spaces?: ISpaceTypes;
  color?: string;
  options?: ISelectOptionsModel[];
  selectProps?: ISpecialSelectOptions;
  placeholder?: string;
  icon?: EIconTypes;
  label?: string;
  withError?: boolean;
}

export const Field = ({
  type,
  color,
  spaces = {},
  withError = false,
  ...props
}: IField): ReactElement => {
  const [field, meta, helpers] = useField(props);
  const showError = !!meta.error && meta.touched && withError;

  return (
    <Column componentWidth="100%" {...spaces}>
      <FieldComponent
        {...props}
        field={field}
        meta={meta}
        type={type}
        name={props.name}
        helpers={helpers}
      />
      {showError && (
        <Description mtop="6px" fontSize={FontSizeTypes.s} color={colors.error}>
          {meta.error}
        </Description>
      )}
    </Column>
  );
};
