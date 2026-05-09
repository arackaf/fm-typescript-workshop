export type Artist = {
  id: string;
  name: string;
  avatar: string;
};

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
  const success = Math.random() > 0.5 ? true : false;

  return success
    ? {
        success: true,
        changes: {
          name: "New Name",
        },
      }
    : {
        success: false,
        error: "Failed to update artist",
      };
}

export function log(result: any) {
  console.log(result);
}
