import { API_PATH } from '@/constants/path.ts';
import { accessToken } from '@/api/chatbotApi.ts';

const getHouseResultApi = async (city: string, county: string) => {
  try {
    const queryString = new URLSearchParams({ city, county });

    const response = await fetch(`api/v1/houses?${queryString}`, {
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

export default getHouseResultApi;
