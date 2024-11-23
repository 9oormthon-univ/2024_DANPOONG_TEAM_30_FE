import { API_PATH } from '@/constants/path.ts';
import { accessToken } from '@/api/chatbotApi.ts';

export const selfCheckResultApi = async () => {
  try {
    const response = await fetch(`${API_PATH.SELF_CHECK.RESULT.GET}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
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
          Authorization: `Bearer ${accessToken}`,
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
        Authorization: `Bearer ${accessToken}`,
      },
      body: data,
    });

    return response.ok;
  } catch (err) {
    alert(err);
  }
};

export const getSelfCheckMain = async () => {
  try {
    const response = await fetch(`${API_PATH.SELF_CHECK.MAIN.GET}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
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
