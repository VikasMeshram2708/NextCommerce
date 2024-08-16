"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { removeProduct } from "../state/ProductSlice";
import toast from "react-hot-toast";
import Link from "next/link";

export default function BasketPage() {
  const allProducts = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (productId: number) => {
    if (!productId) return alert("Product Id is required");
    dispatch(removeProduct(productId));
    return toast.success("Product Removed");
  };

  return (
    <section className="min-h-screen">
      <h2 className="text-2xl font-bold text-center py-10">
        {allProducts.product.length >= 1 ? (
          <p>Total Items</p>
        ) : (
          <p>
            No Products
            <Link href="/" className="text-sm font-semibold hover:underline hover:text-blue-500 ml-2">
            Add Some
            </Link>
          </p>
        )}
      </h2>
      <ul className="container mx-auto my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allProducts?.product?.map((product: Product) => (
          <Card key={product?.id}>
            <CardHeader>
              <CardTitle className="text-ellipsis whitespace-nowrap overflow-hidden">
                {product?.title ? (
                  product?.title
                ) : (
                  <Skeleton className="h-6 w-full" />
                )}
              </CardTitle>
              <CardDescription className="text-ellipsis whitespace-nowrap overflow-hidden">
                {product?.description ? (
                  product?.description
                ) : (
                  <Skeleton className="h-4 w-3/4" />
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video">
                {product?.image ? (
                  <Image
                    src={product?.image}
                    alt={product?.title}
                    layout="fill"
                    className="bg-cover"
                  />
                ) : (
                  <Skeleton className="h-full w-full" />
                )}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <p className="border p-2">
                {product?.price ? (
                  `$${product?.price}`
                ) : (
                  <Skeleton className="h-6 w-12" />
                )}
              </p>
              <Button
                onClick={() => handleRemove(product?.id)}
                variant="destructive"
              >
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </section>
  );
}
