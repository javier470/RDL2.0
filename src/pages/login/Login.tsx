
import { Button, Divider } from '@mui/material';
import TextFieldWrapper from '../../components/TextFieldWrapper/TextFieldWrapper';
import './Login.scss'
import { authInterface, ILoginForm } from '../../interfaces/auth.interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignIn } from './login.request';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>();
    const { login } = useContext(AuthContext)

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        
        let response = await SignIn({
            username: data.username,
            password: data.password,
        })
       
        if (response.message == 'OK') {
            let userD: authInterface = {
                isAuthenticated: true,
                // accessibleRoutes: [],
                role: 'user',
                token: response.data.token,
            };
            login(response.data.token, userD);
            navigate('/dahsboard')
        } else {
            alert('error')
        }
    };

    return (
        <section className="Login">
            <div className="Login-Box">
                <div className="Login-Box-Title">
                    <h5>Inicio de Sesión</h5>
                </div>
                <div className="Login-Box-Inputs">
                    <form onSubmit={handleSubmit(onSubmit)} className='Login-Box-Inputs-Form'>
                        {/* <TextFieldWrapper label={"Usuario"} register={{ ...register }} /> */}
                        <TextFieldWrapper
                            label={"Usuario"}
                            fullWidth
                            name="username"
                            register={register}
                            errors={errors}
                            validationRules={{ required: "El nombre de usuario es obligatorio" }}
                        />
                        <TextFieldWrapper
                            label={"Contraseña"}
                            fullWidth
                            name="password"
                            register={register}
                            errors={errors}
                            validationRules={{ required: "La contraseña es obligatoria" }}
                            type="password"
                        />
                        <div className="send">
                            <a href="" className="recoverPassword">¿Olvidó la contraseña?</a>
                            <div className='login-btnCont'>
                                <Button variant='contained' type='submit' className="login-button">Iniciar Sesión</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <Divider />
                <div className="Login-Box-Register">
                    <h6 className='register-redirect'>¿No tienes una cuenta?</h6>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;