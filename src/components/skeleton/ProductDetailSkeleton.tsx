const ProductDetailSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:py-20">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        {/* 상품 이미지 */}
        <div className="md:w-1/2 p-5 flex items-center justify-center bg-gray-200">
          <div className="w-full h-60 skeleton" />
        </div>
        {/* 상품 정보 */}
        <div className="md:w-1/2 p-6 pb-20 flex flex-col space-y-6 bg-gray-50">
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

          <button className="mt-6 w-full md:w-auto skeleton px-6 py-2 rounded-md shadow-lg"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
