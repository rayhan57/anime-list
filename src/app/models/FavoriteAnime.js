import mongoose, { Schema } from "mongoose";

const favoriteAnimeSchema = new Schema(
  {
    mal_id: String,
    cover_photo: String,
    title: String,
    user_email: String,
  },
  {
    timestamps: true,
  }
);

const FavoriteAnime =
  mongoose.models.FavoriteAnime ||
  mongoose.model("FavoriteAnime", favoriteAnimeSchema);

export default FavoriteAnime;
