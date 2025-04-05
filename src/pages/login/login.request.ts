import { fetchBack } from "../../components/Request/fetchPath";
import { ILoginForm } from "../../interfaces/auth.interface";

export const SignIn: any = async (body: ILoginForm) => {
  if (!body.username || !body.password) {
    throw new Error("El nombre de usuario y la contraseña son obligatorios");
  }

  try {
    const res = await fetchBack('http://srv-laserfichewf/RDL_API/api/Auth/SignIn', 'POST', body);
    return res;

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};
