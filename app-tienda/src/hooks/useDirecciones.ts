import { IDireccion } from "@/interfaces/IDirecciones";
import useSWR, { SWRConfiguration } from "swr";

export const useDirecciones = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IDireccion[]>(`http://localhost:3000/api${url}`, config)
    console.log("data = ", data, error);
    return {
        direcciones: data || [],
        isLoading: !error && data,
        isError: error
    }
}