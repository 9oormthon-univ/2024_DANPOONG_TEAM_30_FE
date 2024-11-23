import { API_PATH } from '@/constants/path.ts';

export const chatbotDepthApi = async (questionType: string) => {
  const queryString = new URLSearchParams({ questionType });
  try {
    const response = await fetch(
      `${API_PATH.CHAT_BOT.DEPTH.GET}?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDgiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzI0MDcwMjksImlhdCI6MTczMjM4OTAyOX0.ycOtWzJSQtWAoQXnwoOSfDVjQHQlO6xjT_6zuDsEZ78B-gpeZ5TVslcy5yrkeAzM5gUHOt_3nhJ-BbtJX_kTag`,
        },
      }
    );

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error);
    }
    return result;
  } catch (err) {
    alert(err);
  }
};

export const chatbotResultApi = async (questionType: string, depth: string) => {
  const queryString = new URLSearchParams({ questionType, depth });
  try {
    const response = await fetch(
      `${API_PATH.CHAT_BOT.RESULT.GET}?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDgiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzI0MDcwMjksImlhdCI6MTczMjM4OTAyOX0.ycOtWzJSQtWAoQXnwoOSfDVjQHQlO6xjT_6zuDsEZ78B-gpeZ5TVslcy5yrkeAzM5gUHOt_3nhJ-BbtJX_kTag`,
        },
      }
    );

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error);
    }
    return result;
  } catch (err) {
    alert(err);
  }
};
