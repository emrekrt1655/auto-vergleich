import { useQuery } from "@tanstack/react-query";
import {
  getCarBrands,
  getCarModels,
  getCarSubModels,
} from "@/services/carApiService";
import type { CarBrand, CarModel, SubModel } from "@/types/Car";
import carBrands from "@/data/carBrands.json" assert { type: "json" };

export const useCarBrands = () => {
  return useQuery<CarBrand[]>({
    queryKey: ["carBrands"],
    queryFn: () => getCarBrands(),
    initialData: carBrands,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};

export const useCarModels = (brand: string) => {
  return useQuery<CarModel[]>({
    queryKey: ["carModels", brand],
    queryFn: async () => {
      const allModels = await getCarModels();
      if (!brand) return allModels;
      return allModels.filter((model) => model.make === brand);
    },
    enabled: !!brand,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};

export const useCarSubModels = (brand: string, model: string) => {
  return useQuery<SubModel[]>({
    queryKey: ["subModels", brand, model],
    queryFn: async () => {
      return await getCarSubModels(brand, model);
    },
    select: (subModels) => {
      return [...new Map(subModels.map((car) => [car.submodel, car])).values()];
    },
    enabled: !!brand && !!model,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};
