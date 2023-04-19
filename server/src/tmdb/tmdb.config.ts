const baseUrl: any = process.env.TMDB_BASE_URL;
const key: any = process.env.TMDB_KEY;

const getUrl = ({ endpoint, params }: any) => {
  const qs: any = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };
