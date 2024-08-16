import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!res.ok) {
    throw new Error("Failed to fetch products...");
  }

  const products: Product[] = await res.json();

  return (
    <main className="min-h-screen">
      <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Suspense fallback={<h2>Loading...</h2>}>
          {products?.map((item) => (
            <ProductCard {...item} key={item?.id} />
          ))}
        </Suspense>
      </div>
    </main>
  );
}
