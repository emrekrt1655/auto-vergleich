import { useQuery } from "@tanstack/react-query";
import { getCarBrands, getCarModels } from "@/services/carApiService";
import type { CarBrand, CarModel } from "@/types/Car";
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
