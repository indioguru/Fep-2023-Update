import axios from "axios";

export const urlBase = "https://fep2023.herokuapp.com";
// export const urlBaseHeroku = "http://localhost:1337";
// export const urlBaseCMS = "https://fep-vassar.herokuapp.com";

export const getArtistas = async () => {
  const url = `${urlBase}/artistas/`;
  return await axios.get(url);
};

export const getViajero = async () => {
  const url = `${urlBase}/pagina-de-viajero-internacional/`;
  return await axios.get(url);
};

export const getVip = async () => {
  const url = `${urlBase}/pagina-de-vip/`;
  return await axios.get(url);
};

export const getCashless = async () => {
  const url = `${urlBase}/pagina-de-cashless/`;
  return await axios.get(url);
};

export const getHome = async () => {
  const url = `${urlBase}/pagina-de-home/`;
  return await axios.get(url);
};

export const getEntradas = async () => {
  const url = `${urlBase}/entradas-individuales/`;
  return await axios.get(url);
};

export const getEntradasCombo = async () => {
  const url = `${urlBase}/entradas-combos/`;
  return await axios.get(url);
};
