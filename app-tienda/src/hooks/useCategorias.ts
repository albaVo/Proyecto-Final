import { ICategoria } from "@/interfaces/ICategorias";
import useSWR, { SWRConfiguration } from "swr";

export const useCategorias = (url: string, config: SWRConfiguration={}) => {
    // console.log(url);
    const { data, error } = useSWR<ICategoria[]>(`http://localhost:3000/api${url}`, config)
    // console.log("data = ", data, error);
    return {
        categorias: data || [],
        isLoading: !error && data,
        isError: error
    }
}