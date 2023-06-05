import USDToBRL from "./USDToBRL";

declare global {
  interface ProductRaw {
    id: string;
    name: string;
    price: number;
    images: string;
    description: string;
    brand: string;
    currency: string;
    isOnPromotion: boolean;
    discountPrice: number;
    discount: number;
    totalSales: number;
  }
  interface Product {
    id: string;
    name: string;
    price: number;
    images: Array<string>;
    description: string;
    brand: string;
    currency: "USD" | "BRL";
    isOnPromotion: boolean;
    discountPrice: number;
    discount: number;
    totalSales: number;
  }
}

export const normalizeData = (data: ProductRaw): Product => {
  return {
    id: data.id,
    name: data.name,
    price: USDToBRL(data.price),
    images: data.images.split(" | "),
    currency: "BRL",
    description: data.description,
    brand: data.brand,
    isOnPromotion: data.isOnPromotion,
    discountPrice: USDToBRL(data.discountPrice),
    discount: data.discount,
    totalSales: data.totalSales,
  };
};
