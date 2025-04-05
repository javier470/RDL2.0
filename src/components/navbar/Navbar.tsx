import { Button, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import canellaLogo from '../../assets/canella-logo_white.svg'
import ThemeToggleButton from '../ThemeToggle/ThemeToggleBtn';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './Navbar.scss'
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    const navigate = useNavigate();
    const { authState, logout } = useContext(AuthContext);

    return (
        <>

            <nav className='NavbarCont'>
                <section className='NavbarCont-Body'>
                    <section className='NavbarCont-Body-Title'>
                        <img src={canellaLogo} className='logoNavbar' alt="Canella" />
                        <hr className='vertical-divider' />
                        <h6 className='Title'>Portal de Proyectos</h6>
                    </section>
                    {
                        authState &&
                        authState.isAuthenticated &&
                        <section className="NavbarCont-Body-User">
                            <ThemeToggleButton />
                            <Tooltip title="Mi Perfil">
                                <Button variant="text" sx={{ color: 'white' }}>
                                    <div className='Profile-Menu-div'>
                                        <div className='imgName'>
                                            N
                                        </div>
                                        <p>Nombre</p>
                                    </div>
                                </Button>
                            </Tooltip>
                            <Tooltip title="Cerrar Sesión">
                                <IconButton
                                    onClick={() => {logout(); navigate('login')}}
                                    sx={{ color: 'white', marginLeft: 2 }}
                                >
                                    <LogoutIcon />
                                </IconButton>
                            </Tooltip>
                        </section>
                    }
                </section>
            </nav>
        </>
    );
}

export default NavbarComponent