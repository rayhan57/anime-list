export const getAnimeData = async (endPoint, params = "") => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${url}${endPoint}?${params}`);
  const result = await response.json();

  return result.data;
};

export const getPaginationData = async (endPoint) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${url}${endPoint}`);
  const result = await response.json();

  return result.pagination;
};
