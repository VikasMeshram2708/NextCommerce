"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/state/store";
import { addProduct } from "@/app/state/ProductSlice";
import toast from "react-hot-toast";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export default function ProductCard(ProductCardProps: ProductCardProps) {
  const { title, id, description, price, category, image } = ProductCardProps;
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    dispatch(addProduct(ProductCardProps));
    return toast.success("Added to Cart");
  };
  return (
    <Card>
      <Link href={`/${id}`}>
        <CardHeader>
          <CardTitle className="text-ellipsis whitespace-nowrap overflow-hidden">
            {title ? title : <Skeleton className="h-6 w-full" />}
          </CardTitle>
          <CardDescription className="text-ellipsis whitespace-nowrap overflow-hidden">
            {description ? description : <Skeleton className="h-4 w-3/4" />}
          </CardDescription>
        </CardHeader>
      </Link>

      <CardContent>
        <div className="relative aspect-video">
          {image ? (
            <Image src={image} alt={title} layout="fill" className="bg-cover" />
          ) : (
            <Skeleton className="h-full w-full" />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="border p-2">
          {price ? `$${price}` : <Skeleton className="h-6 w-12" />}
        </p>
        <Button onClick={handleAdd} variant="outline">
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
