import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  placeholder: string;
  isRequired: boolean;
  [key: string]: unknown;
}

const DateInputController = ({
  name,
  placeholder,
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
      defaultValue={null}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={placeholder}
            value={value}
            onChange={onChange}
            {...otherProps}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DateInputController;
