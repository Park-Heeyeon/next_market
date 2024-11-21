const ProductCardSkeleton = () => {
  return (
    <div className="w-40 md:w-70 lg:w-80 bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer pt-4">
      {/* 상품 이미지 */}
      <div className="relative w-24 h-24 md:w-40 lg:w-40 md:lg-40 lg:h-48 mx-auto">
        <div className="skeleton h-full w-full" />
      </div>
      {/* 상품 제목과 가격 */}
      <div className="p-4 space-y-2">
        <div className="skeleton h-4 w-24 md:w-40 lg:w-40" />
        <div className="skeleton h-4 w-20" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
