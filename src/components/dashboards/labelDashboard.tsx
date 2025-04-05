import {
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Stack,
    Typography,
    Box,
} from "@mui/material";
import React from "react";

type LabelBoxProps = {
    title: string;
    subtitle: string;
    progress?: number;
    height?: string;
    width?: string;
};

const LabelBox: React.FC<LabelBoxProps> = ({ title, subtitle, progress, height = "100%", width = "100%" }) => {
    return (
        <Card
            sx={{
                boxShadow: 4,
                p: 2,
                borderRadius: 3,
                height: height,
                width: width,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}

        >
            <CardContent>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Stack direction="column" alignItems="center" spacing={1}>
                            <Typography variant="h4" fontWeight="bold" align="center">
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" align="center">
                                {subtitle}
                            </Typography>
                        </Stack>
                    </Grid>
                    {progress !== undefined && (
                        <Grid item xs={12}>
                            <Stack direction="column" alignItems="center" spacing={2}>
                                <Box sx={{ width: '100%', mt: 2 }}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={progress}
                                        sx={{
                                            height: 15,
                                            borderRadius: 5,
                                        }}
                                    />
                                </Box>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {progress}%
                                </Typography>
                            </Stack>
                        </Grid>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default LabelBox;
