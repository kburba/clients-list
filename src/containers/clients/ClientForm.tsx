import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import InputGroup from '../../components/InputGroup';
import useYupValidationResolver from '../../hooks/useYupValidatorResolver';
import { TClientNew } from '../../store/types/clients.types';
import InputGroupPlaces from '../../components/InputGroupPlaces';

type Props = {
  onSave: (values: TClientNew) => void;
  defaultValues?: TClientNew;
  handleClose: () => void;
};
export default function ClientForm({
  handleClose,
  onSave,
  defaultValues,
}: Props) {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TClientNew>({ resolver, defaultValues });

  const onSubmit = handleSubmit((data) => onSave(data));

  return (
    <form onSubmit={onSubmit}>
      <InputGroup
        param="firstName"
        title="First name"
        register={register}
        errors={errors}
      />
      <InputGroup
        param="lastName"
        title="Last name"
        register={register}
        errors={errors}
      />
      <InputGroup
        param="phone"
        title="Phone"
        register={register}
        errors={errors}
      />
      <InputGroupPlaces
        param="address"
        title="Address"
        control={control}
        setValue={setValue}
        errors={errors}
      />
      <div className="inline text-right">
        <button type="button" className="kbbutton" onClick={handleClose}>
          Close
        </button>
        <button type="submit" className="kbbutton primary">
          Save
        </button>
      </div>
    </form>
  );
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
  address: Yup.string().required('Required'),
});
