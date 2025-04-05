import { useEffect, useState } from "react";
import { ActiveProjects, PercentTasksAdmin } from "./reports.request";
import LabelBox from "../../../components/dashboards/labelDashboard";
import { Box, Grid } from "@mui/material";
import StatBox from "../../../components/dashboards/statBox";
import { IconClipboardCheck } from "@tabler/icons-react";

const AdminDashboardPage = () => {

    const [activeProjects, setActiveProjects] = useState(0);
    const [percentTasksNum, setPercentTasksNum] = useState(0)

    useEffect(() => {

        getActiveProjects()
        getPercentTasks()
    }, [])

    async function getActiveProjects() {
        const response = await ActiveProjects();
        if (response.message === 'OK') {
            setActiveProjects(response.data[0].projectCountries);
        }
    }

    async function getPercentTasks() {
        const response = await PercentTasksAdmin();
        if (response.message === 'OK') {
            setPercentTasksNum(response.data);
        }
    }
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <LabelBox title={activeProjects ? activeProjects.toString() : "0"}
                            subtitle="Proyectos Activos" />
                    </Grid>
                    <Grid item xs={3}>
                        <StatBox
                            title="Tareas"
                            subtitle="Tareas realizadas"
                            progress={percentTasksNum || 0}
                            increase={0}
                            hasIncrease={false}
                            icon={<IconClipboardCheck size={50} />}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default AdminDashboardPage;