import { CarModel, SubModel } from "@/types/Car";

export const getCarBrands = async () => {
  try {
    const res = await fetch("/api/cars/brands", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch car brands:", error);
    return [];
  }
};

export const getCarModels = async (): Promise<CarModel[]> => {
  try {
    const res = await fetch("/api/cars/models", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data: CarModel[] = await res.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch car models:", error);
    return [];
  }
};

export const getCarSubModels = async (
  make: string,
  model: string
): Promise<SubModel[]> => {
  try {
    if (!make || !model) return [];

    const res = await fetch(
      `/api/cars/submodels?make=${encodeURIComponent(
        make
      )}&model=${encodeURIComponent(model)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data: SubModel[] = await res.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch submodels:", error);
    return [];
  }
};
