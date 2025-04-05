import React from 'react';
import TextField from '@mui/material/TextField';
import { UseFormRegister } from 'react-hook-form';

interface TextFieldWrapperProps {
    name: string;
    disabled?: boolean;
    defaultValue?: string;
    register: UseFormRegister<any>;
    errors: { [key: string]: any };
    validationRules?: object;
    fullWidth?: boolean;
    [key: string]: any; // Esto permite pasar otros props no definidos específicamente
}

const TextFieldWrapper: React.FC<TextFieldWrapperProps> = ({
    name,
    disabled = false,
    defaultValue = '',
    register,
    errors,
    validationRules = {},
    fullWidth = false,
    ...otherProps
}) => {
    return (
        <div>
            <TextField
                {...register(name, validationRules)}
                name={name}
                fullWidth={fullWidth}
                defaultValue={defaultValue}
                disabled={disabled}
                error={!!errors[name]}
                helperText={errors[name]?.message}
                InputLabelProps={{ shrink: true }}
                {...otherProps}
            />
        </div>
    );
};

export default TextFieldWrapper;


// import TextField from '@mui/material/TextField';
// import { useField } from 'formik';
// import React, { useMemo } from 'react';
// import { ConfigTextField, CustomTextFieldProps } from '../interfaces/Form';
// import { Tooltip, useTheme } from '@mui/material';

// const TextFieldWrapper: React.FC<CustomTextFieldProps> = ({ name, disabled = false, tooltipText = false, defaultValue, ...otherProps }) => {
//   const [field, meta] = useField(name);
//   const theme = useTheme();

//   const configTextField: ConfigTextField = useMemo(() => {
//     const config: ConfigTextField = {
//       ...field,
//       fullWidth: true,
//       variant: 'outlined',
//       ...otherProps,
//     };

//     if (meta && meta.touched && meta.error) {
//       config.error = true;
//       config.helperText = meta.error;
//     }

//     return config;
//   }, [field, meta, otherProps]);

//   return (
//     <>
//       {tooltipText ? (
//         <Tooltip title={field.value || ''} arrow>
//           <TextField
//             defaultValue={defaultValue}
//             InputLabelProps={{ shrink: true }}
//             style={{ backgroundColor: theme.palette.grey[50] }}
//             {...configTextField}
//             InputProps={{ inputProps: { min: 0 } }}
//             disabled={disabled}
//           />
//         </Tooltip>
//       ) : (
//         <TextField
//           defaultValue={defaultValue}
//           InputLabelProps={{ shrink: true }}
//           style={{ backgroundColor: theme.palette.grey[50] }}
//           {...configTextField}
//           InputProps={{ inputProps: { min: 0 } }}
//           disabled={disabled}
//         />
//       )}
//     </>
//   );
// };

// export default TextFieldWrapper;

