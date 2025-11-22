export interface CarBrand {
  id: number;
  name: string;
}

export interface ApiCollectionMeta {
  url: string;
  count: number;
  pages: number;
  total: number;
  next: string | null;
  prev: string | null;
  first: string;
  last: string | null;
}

export interface CarBrandResponse {
  collection: ApiCollectionMeta;
  data: CarBrand[];
}

export interface CarModel {
  id: number;
  make_id: number;
  make: string;
  name: string;
}

export interface SubModel {
  id: number;
  oem_make_model_id: number;
  year: number;
  make: string;
  model: string;
  submodel: string;
}

export interface CarModelResponse {
  collection: ApiCollectionMeta;
  data: CarModel[];
}
