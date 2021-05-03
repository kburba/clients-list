import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import InputGroup from '../../components/InputGroup';
import useYupValidationResolver from '../../hooks/useYupValidatorResolver';
import { TClientNew } from '../../store/types/clients.types';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (values: TClientNew) => void;
};
export default function ClientForm({ setIsOpen, onSave }: Props) {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TClientNew>({ resolver });

  const onSubmit = handleSubmit((data) => {
    onSave(data);
    setIsOpen(false);
  });

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
      <InputGroup
        param="address"
        title="Address"
        register={register}
        errors={errors}
      />
      <div className="inline text-right">
        <button
          type="button"
          className="kbbutton"
          onClick={() => setIsOpen(false)}
        >
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