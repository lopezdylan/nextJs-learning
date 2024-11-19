import Products from "../products";
import { getAllProducts } from "@/app/lib/api";


export default async function Page() {
    const allProducts = await getAllProducts(true);
    return (
        <Products products={allProducts} />
    );
}