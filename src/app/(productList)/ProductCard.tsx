import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductType } from "../page";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  const { id, image, title, price } = product;
  const router = useRouter();

  return (
    <div
      className="w-40 md:w-70 lg:w-80 bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer pt-2"
      onClick={() => router.push(`/product?id=${id}`)}
    >
      {/* 상품 이미지 */}
      <div className="relative w-24 h-24 md:w-24 lg:w-24 md:lg-40 lg:h-48 mx-auto">
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
        <h3 className="text-base md:text-lg lg:text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-base md:text-xl lg:text-xl font-bold text-gray-900 mt-2">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
