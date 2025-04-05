import { Button } from "@mui/material";
import './NotFound.scss'
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <section className="NotFound">
            <h3 className="NotFound-404">404</h3>
            <h3 className="NotFound-404">Ha ocurrido un error</h3>
            <p className="NotFound-text">Parece que la página que buscas no existe</p>
            <Button variant="contained" className="NotFound-btn" onClick={() => { navigate("/")}}>Regresar a Inicio</Button>
        </section>
    )
}

export default NotFoundPage;