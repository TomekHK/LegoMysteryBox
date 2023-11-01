import apiConfig from "../../apiConfig";

const url = apiConfig.fakePostApiUrl;

async function postData(
  data: Record<string, any>
): Promise<{ success: boolean; error?: Error }> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      return { success: true };
    } else {
      throw new Error("Failed to create the resource.");
    }
  } catch (error) {
    return { success: false, error: error as Error };
  }
}

export default postData;
