import { ISubcategoria } from "@/interfaces/ISubcategorias";
import useSWR, { SWRConfiguration } from "swr";

export const useSubcategorias = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ISubcategoria[]>(`http://localhost:3000/api${url}`, config)
    console.log("data = ", data, error);
    return {
        subcategorias: data || [],
        isLoading: !error && data,
        isError: error
    }
}