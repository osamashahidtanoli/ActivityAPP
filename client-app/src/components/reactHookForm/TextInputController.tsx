import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  placeholder: string;
  type: string;
  isRequired: boolean;
  [key: string]: unknown;
}

const TextInputController = ({
  name,
  placeholder,
  type,
  isRequired,
  ...otherProps
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
          id={name}
          label={placeholder}
          onChange={onChange}
          value={value}
          type={type}
          error={!!error}
          helperText={error ? 'This Field is Required' : null}
          variant='outlined'
          required={isRequired}
          fullWidth
          {...otherProps}
        />
      )}
    />
  );
};

export default TextInputController;
