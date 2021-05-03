import React from 'react';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  UseFormSetValue,
} from 'react-hook-form';
import classnames from 'classnames';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

type Props = {
  param: string;
  title: string;
  errors: DeepMap<any, FieldError>;
  control: Control<any>;
  setValue: UseFormSetValue<any>;
};

const InputGroupPlaces = ({
  errors,
  param,
  title,
  control,
  setValue,
}: Props) => {
  return (
    <div className={classnames('inputGroup places', { error: errors[param] })}>
      <label htmlFor={param}>{title}</label>
      <Controller
        control={control}
        name="address"
        render={({ field: { value, ref } }) => (
          <GooglePlacesAutocomplete
            apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY}
            ref={ref}
            onLoadFailed={(error) =>
              console.error('Could not inject Google script', error)
            }
            selectProps={{
              value: value,
              placeholder: value,
              onChange: (e: any) => setValue('address', e.label),
            }}
          />
        )}
      />
      {errors[param] && <div className="errorMsg">{errors[param].message}</div>}
    </div>
  );
};
export default InputGroupPlaces;
