import { Artist } from "./utils/lesson-2-utils";

type UpdateArtistPayload = {
  artistId: string;
  userId: string;
  reason: "FIXING_ERROR" | "NEW_AVATAR" | "NEW_NAME";
  payload: Omit<Artist, "id">;
};

export async function updateArtist(payload: UpdateArtistPayload) {
  const success = !payload.artistId.startsWith("7") ? true : false;

  if (!success) {
    return {
      success: false as const,
      error: "Failed to update artist",
    };
  }

  return {
    success: true as const,
    changes: {
      name: "New Name",
    },
  };
}
