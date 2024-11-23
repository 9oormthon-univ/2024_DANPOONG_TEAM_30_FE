export const API_PATH = {
  SELF_CHECK: {
    MAIN: { GET: 'api/v1/diagnosis/diagnosis-page' },
    RESULT: { GET: '/api/v1/diagnosis/result' },
    QUESTION: { GET: '/api/v1/diagnosis/questions' },
    SURVEY: { POST: '/api/v1/diagnosis' },
  },
  CHAT_BOT: {
    DEPTH: { GET: '/api/v1/chatbot/depth-list' },
    RESULT: { GET: '/api/v1/chatbot' },
  },
};
