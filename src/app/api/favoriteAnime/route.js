import { dbConnection } from "@/app/libs/dbConnection";
import FavoriteAnime from "../../models/FavoriteAnime";
import { handleResponse } from "@/app/libs/responseApi";

export const POST = async (request) => {
  await dbConnection();
  const { mal_id, cover_photo, title, user_email } = await request.json();

  const isAlready = await FavoriteAnime.findOne({ mal_id, user_email });
  if (isAlready) {
    return handleResponse("Data already exists", null);
  }

  const data = await FavoriteAnime.create({
    mal_id,
    cover_photo,
    title,
    user_email,
  });
  return handleResponse("Data added successfully", data);
};

export const GET = async (request) => {
  await dbConnection();
  const searchParams = request.nextUrl.searchParams;
  const user_email = searchParams.get("user_email");

  const data = await FavoriteAnime.find({ user_email: user_email });
  if (data.length > 0) {
    return handleResponse("Success", data);
  }

  return handleResponse("Data is missing", null);
};
