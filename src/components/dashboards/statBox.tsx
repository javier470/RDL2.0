import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Stack,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import CircularProgressWithLabel from "./ProgressCircle";
  
  type StatBoxProps = {
    title: string;
    subtitle: string;
    icon: React.ReactElement;
    progress: number;
    increase: number;
    height?: string;
    hasIncrease?: boolean;
    colorCircle?: string;
    valuePercent?: string;
  };
  
  const StatBox: React.FC<StatBoxProps> = ({
    title,
    subtitle,
    icon,
    progress,
    increase,
    height = "100%",
    hasIncrease = true,
    colorCircle = "primary",
    valuePercent= "%"
  }) => {
    const [increseColor, setIncreseColor] = useState('');
  
    useEffect(() => {
      if (increase < 0) {
        setIncreseColor('error')
      }
      else {
        setIncreseColor('success.main')
      }
    }, [increase])
  
    return (
      <Card sx={{ boxShadow: 4, p: 2, borderRadius: 3, height: height }} >
        <CardHeader
          title={title}
          titleTypographyProps={{ variant: "h6", fontWeight: 'bold' }}
          sx={{ pb: 0 }}
        />
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <Stack direction="column" alignItems="center">
                <Box sx={{ fontSize: 48, color: "primary.main" }}>
                  {icon}
                </Box>
                <Typography variant="subtitle1" color="textSecondary">
                  {subtitle}
                </Typography>
                {
                  hasIncrease &&
                  <Typography variant="h6" color={increseColor}>
                    {increase > 0 ? '+' : ''} {increase}{valuePercent}
                  </Typography>
                }
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgressWithLabel value={progress} customColor={colorCircle} />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };
  
  export default StatBox;
  