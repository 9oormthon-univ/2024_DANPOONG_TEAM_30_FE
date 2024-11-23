// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_PATH = {
  SELF_CHECK: {
    MAIN: { GET: 'api/v1/diagnosis/diagnosis-page' },
    RESULT: { GET: '/api/v1/diagnosis/result' },
    QUESTION: { GET: '/api/v1/diagnosis/questions' },
    SURVEY: { POST: '/api/v1/diagnosis' },
  },
};
