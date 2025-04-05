import { fetchBack } from "../../../components/Request/fetchPath";

export const ActiveProjects: any = async () => {

    try {
        const res = await fetchBack('http://srv-laserfichewf/RDL_API/api/Reports/countries-project', 'GET', null, { 'Authorization': `Bearer ${localStorage.getItem('token')}` });
        return res;

    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};

export const PercentTasksAdmin: any = async () => {

    try {
        const res = await fetchBack('http://srv-laserfichewf/RDL_API/api/Reports/percent-tasks-admin', 'GET', null, { 'Authorization': `Bearer ${localStorage.getItem('token')}` });
        return res;

    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};
