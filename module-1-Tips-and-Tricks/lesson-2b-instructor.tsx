import React, { FC } from "react";
import { Artist } from "./utils/lesson-2-utils";

type UpdateArtistPayload = {
  artistId: string;
  userId: string;
  reason: "FIXING_ERROR" | "NEW_AVATAR" | "NEW_NAME";
  payload: Omit<Artist, "id">;
};

type UpdateArtistResponse =
  | {
      success: true;
      changes: Partial<Artist>;
    }
  | {
      success: false;
      error: string;
    };

export async function updateArtist(
  payload: UpdateArtistPayload
): Promise<UpdateArtistResponse> {
  const success = !payload.artistId.startsWith("7") ? true : false;

  if (!success) {
    return {
      success: false,
      error: "Failed to update artist",
    };
  }

  return {
    success: true,
    changes: {
      name: "New Name",
    },
  };
}
