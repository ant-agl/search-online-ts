import api from "@/app/api/apiConfig";
import { CityModel } from "../model";
import { LocationFormState } from "../types";

export const getCities = async () => {
  try {
    const response = await api.get<{ result: CityModel[] }>("/common/cities");
    console.log("get_cities", response);
    const cities = convertModelToType(response.data.result);
    return cities;
  } catch (error) {
    console.log("get_cities error", error);
    return Promise.reject(error);
  }
};

const convertModelToType = (cities: CityModel[]): LocationFormState[] => {
  return cities.map((city: CityModel) => ({
    value: city.id.toString(),
    label: city.name,
  }));
};
