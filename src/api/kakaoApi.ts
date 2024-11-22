const kakaoApiKey = import.meta.env.VITE_KAKAORESTKEY;

export const getSearchList = async (query: string, x: string, y: string) => {
  const queryString = new URLSearchParams({ query, x, y });

  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?${queryString}`,
      {
        method: 'GET',
        headers: {
          Authorization: `KakaoAK ${kakaoApiKey}`,
        },
      }
    );
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error);
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};
