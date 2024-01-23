import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  placeholder: string;
  type: string;
  isRequired: boolean;
}

const TextInputController = ({
  name,
  placeholder,
  type,
  isRequired,
}: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: isRequired,
      }}
      defaultValue=''
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type}
          error={!!error}
          helperText={error ? error?.message : null}
          variant='outlined'
          required={isRequired}
        />
      )}
    />
  );
};

export default TextInputController;
