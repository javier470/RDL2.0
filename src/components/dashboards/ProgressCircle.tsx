import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number, customColor: any }
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress size={80} variant="determinate" {...props}  color={props.customColor}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography component="div" color={'text.secondary'}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
