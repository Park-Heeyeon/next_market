import { NextResponse } from "next/server";

export async function GET() {
  const url = `${process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL}/categories`;

  if (!url) {
    return NextResponse.json(
      { error: "Server URL is not defined in environment variables." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null); // JSON 파싱 실패 대비
      const errorMessage = errorData?.message || "Failed to fetch getCategory.";
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data); // 성공적으로 데이터 반환
  } catch (error: unknown) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Unexpected error occurred." },
      { status: 500 }
    );
  }
}
