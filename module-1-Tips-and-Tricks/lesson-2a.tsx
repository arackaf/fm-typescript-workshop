import React, { FC } from "react";

import { log, updateArtist } from "./utils/lesson-2-utils";

//                                        TODO: 1
async function updateArtistAndLog(payload: any) {
  const response = await updateArtist(payload);
  log(response);

  return response;
}

const ArtistForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [result, setResult] = React.useState<any>();

  async function handleSave() {
    const next = await updateArtistAndLog({
      artistId: "artist-1",
      userId: "user-1",
      reason: "NEW_NAME",
      payload: { name, avatar: "" },
    });
    setResult(next);
  }

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="button" onClick={handleSave}>
        Save
      </button>
      {result ? <ArtistUpdateResultDisplay payload={result} /> : null}
    </>
  );
};

//                                             TODO: 2
const ArtistUpdateResultDisplay: FC<{ payload: any }> = ({ payload }) => {
  if (payload.success) {
    return <p>Success: {JSON.stringify(payload.changes)}</p>;
  }
  return <p>Error: {payload.error}</p>;
};

export { ArtistForm };
