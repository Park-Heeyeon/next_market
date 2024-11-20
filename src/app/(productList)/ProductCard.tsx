import Image from "next/image";
import { ProductType } from "./ProductList";
import { useRouter } from "next/navigation";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  const { id, image, title, price } = product;
  const router = useRouter();

  return (
    <div
      className="w-72 bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={() => router.push(`/product?id=${id}`)}
    >
      {/* 상품 이미지 */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-t-lg"
        />
      </div>
      {/* 상품 제목과 가격 */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-xl font-bold text-gray-900 mt-2">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
