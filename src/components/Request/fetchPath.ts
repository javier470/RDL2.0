type MetodoHTTP = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RespuestaAPI<T> {
  data: T;
  status: number;
  message: string;
}

export const fetchBack = async <T>(url: string, metodo: MetodoHTTP = 'GET', datos: Record<string, any> | null = null, cHeadears: any|undefined = {}): Promise<RespuestaAPI<T>> => {
  const opciones: RequestInit = {
    method: metodo,
    headers: {
      ...cHeadears,
      'Content-Type': 'application/json',
    },
  };

  if (datos) {
    opciones.body = JSON.stringify(datos);
  }

  try {
    const respuesta = await fetch(url, opciones);

    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
    }

    const respuestaJson = await respuesta.json();

    return {
      data: respuestaJson,
      status: respuesta.status,
      message: respuesta.statusText,
    };
  } catch (error) {
    console.error('Error al hacer la petición:', error);
    throw error;
  }
};
