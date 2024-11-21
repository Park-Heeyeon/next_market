const ProductDetailSkeleton = () => {
  return (
    <div className="container w-[70%] md:w-[50%] h-[100%] mx-auto py-10 md:py-14">
      <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center md:flex-row bg-gray-200">
        {/* 상품 이미지 */}
        <div className="w-full flex items-center justify-center p-10 md:p-0">
          <div className="w-full h-60 skeleton" />
        </div>
        {/* 상품 정보 */}
        <div className="w-full p-6 flex flex-col space-y-6 bg-gray-50">
          <div className="w-2/3 h-6 skeleton" />
          <div className="w-2/3 h-6 skeleton" />
          <div className="w-1/3 h-6 skeleton" />
          <div className="w-4/5 h-6 skeleton" />
          <div className="w-4/5 h-6 skeleton" />

          <div className="text-gray-500 text-sm flex items-center">
            Category: <div className="skeleton w-1/4 h-4 ml-2" />
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="w-4 h-4 skeleton rounded-full"></span>
              ))}
            </div>
            <div className="w-1/4 h-4 skeleton rounded" />
          </div>

          <div className="mt-6 w-full md:w-auto skeleton px-6 py-4 rounded-md shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
