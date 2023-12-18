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

export const addFavoriteAnime = async (
  mal_id,
  cover_photo,
  title,
  user_email,
  onSuccess
) => {
  const body = {
    mal_id: mal_id,
    cover_photo: cover_photo,
    title: title,
    user_email: user_email,
  };

  const response = await fetch("http://localhost:3000/api/favoriteAnime", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (response.ok) {
    onSuccess();
  }
};

export const checkFavoriteAnime = async (mal_id, user_email) => {
  const url = "http://localhost:3000/api/favoriteAnime";
  const response = await fetch(`${url}/${mal_id}/${user_email}`);
  const result = await response.json();

  return result.data;
};

export const listFavoriteAnime = async (user_email) => {
  const url = "http://localhost:3000/api/favoriteAnime";
  const response = await fetch(`${url}?user_email=${user_email}`);
  const result = await response.json();

  return result.data;
};

export const removeAnimeFromFavorite = async (mal_id, user_email) => {
  const url = "http://localhost:3000/api/favoriteAnime";
  const response = await fetch(`${url}/${mal_id}/${user_email}`, {
    method: "DELETE",
  });

  return response;
};
