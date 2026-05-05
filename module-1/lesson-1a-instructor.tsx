import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

type Artist = {
  id: string;
  name: string;
  avatar: string;
};

export const useArtist = (id: string) => {
  return useQuery({
    queryKey: ["artist", id],
    queryFn: async () => {
      const artistResponse = await fetch("/artist/" + id);
      const artist = (await artistResponse.json()) as Artist;

      return artist;
    },
  });
};

const ArtistComponent: FC<{ artistId: string }> = (props) => {
  const { artistId } = props;
  const artistPayload = useArtist(artistId);

  return null;
};
