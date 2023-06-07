import { IPedido } from "@/interfaces/IPedidos";
import useSWR, { SWRConfiguration } from "swr";

export const usePedidos = (url: string, config: SWRConfiguration={}) => {
    // console.log(url);
    const { data, error } = useSWR<IPedido[]>(`http://localhost:3000/api${url}`, config)
    // console.log("data=", data, error)
    return {
        pedidos: data || [],
        isLoading: !error && data,
        isError: error
    }
}