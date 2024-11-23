import { API_PATH } from '@/constants/path.ts';

export const selfCheckResultApi = async () => {
  try {
    const response = await fetch(`${API_PATH.CHAT_BOT.GET}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDgiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzIzNzMzNjQsImlhdCI6MTczMjM3MTU2NH0.e4wSDME_Xcoyz_6q_GRc-9xAhYZfVs3Hu9x1SZ5qFaMAD7DFDLCejuzMtdPauzSGGHrffcHlih6CwpNsJ1pfwA`,
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
