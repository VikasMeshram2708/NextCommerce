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
  // console.log('p', product)
  return (
    <Card>
      <Link href={`/${id}`}>
        <CardHeader>
          <CardTitle className="text-ellipsis whitespace-nowrap overflow-hidden">
            {title}
          </CardTitle>
          <CardDescription className="text-ellipsis whitespace-nowrap overflow-hidden">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video">
            <Image src={image} alt={title} layout="fill" className="bg-cover" />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p className="border p-2">${price}</p>
          <Button variant={"outline"}>Add</Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
