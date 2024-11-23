import { API_PATH } from '@/constants/path.ts';

export const selfCheckResultApi = async () => {
  try {
    const response = await fetch(`${API_PATH.SELF_CHECK.RESULT.GET}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDgiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzI0MDcwMjksImlhdCI6MTczMjM4OTAyOX0.ycOtWzJSQtWAoQXnwoOSfDVjQHQlO6xjT_6zuDsEZ78B-gpeZ5TVslcy5yrkeAzM5gUHOt_3nhJ-BbtJX_kTag`,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error);
    }
    return result;
  } catch (err) {
    alert(err);
  }
};

export const GetSelfCheckQuestionsApi = async (page: string) => {
  const queryString = new URLSearchParams({ page });

  try {
    const response = await fetch(
      `${API_PATH.SELF_CHECK.QUESTION.GET}?${queryString}`,
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

export const PostSelfCheckQuestionsApi = async (data: string) => {
  try {
    const response = await fetch(`${API_PATH.SELF_CHECK.SURVEY.POST}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDgiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzI0MDcwMjksImlhdCI6MTczMjM4OTAyOX0.ycOtWzJSQtWAoQXnwoOSfDVjQHQlO6xjT_6zuDsEZ78B-gpeZ5TVslcy5yrkeAzM5gUHOt_3nhJ-BbtJX_kTag`,
      },
      body: data,
    });

    return response.ok;
  } catch (err) {
    alert(err);
  }
};
