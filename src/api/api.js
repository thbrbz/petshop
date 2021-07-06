import Axios from "axios";

export const api = Axios.create ({
    baseURL: 'http://localhost:5000',
});

export const busca = async(url, setDados) => {
    const resposta = await api.get(url);
    setDados(resposta.data);
};