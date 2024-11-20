const ProductCardSkeleton = () => {
  return (
    <div className="w-72 bg-white border rounded-lg shadow-md overflow-hidden">
      {" "}
      {/* 상품 이미지 */}
      <div className="relative w-full h-48">
        <div className="skeleton h-full w-full" />
      </div>
      {/* 상품 제목과 가격 */}
      <div className="p-4 space-y-2">
        <div className="skeleton h-4 w-40" />
        <div className="skeleton h-4 w-20" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
