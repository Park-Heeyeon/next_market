import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url); // 요청 URL 파싱
  const productId = url.searchParams.get("id"); // `id` 쿼리 매개변수 추출

  if (!productId) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  const serverUrl = process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL;
  if (!serverUrl) {
    return NextResponse.json(
      { error: "Server URL is not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`${serverUrl}/${productId}`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null); // JSON 파싱 실패 대비
      const errorMessage =
        errorData?.message || `Failed to fetch product with id: ${productId}`;
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const data = await response.json(); // 응답 데이터를 JSON으로 파싱
    return NextResponse.json(data);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
