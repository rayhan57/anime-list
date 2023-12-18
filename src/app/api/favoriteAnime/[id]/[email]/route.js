import { dbConnection } from "@/app/libs/dbConnection";
import { handleResponse } from "@/app/libs/responseApi";
import FavoriteAnime from "@/app/models/FavoriteAnime";

export const GET = async (request, { params }) => {
  await dbConnection();
  const id = params.id;
  const email = params.email;

  const data = await FavoriteAnime.findOne({ mal_id: id, user_email: email });
  if (data) {
    return handleResponse("Success", data);
  }

  return handleResponse("Data is missing", null);
};

export const DELETE = async (request, { params }) => {
  await dbConnection();
  const id = params.id;
  const email = params.email;

  const dataToDelete = await FavoriteAnime.findOne({
    mal_id: id,
    user_email: email,
  });

  if (dataToDelete) {
    const data = await FavoriteAnime.deleteOne({
      mal_id: id,
      user_email: email,
    });
    return handleResponse("Data deleted", data);
  }

  return handleResponse("Data is missing", null);
};
