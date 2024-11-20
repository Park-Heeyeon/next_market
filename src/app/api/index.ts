export async function fetchApi(url: string | undefined) {
  try {
    if (!url) throw new Error("URL is not defined in environment variables.");
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API 호출 중 오류 발생");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch API 오류:", error);
    throw error;
  }
}
