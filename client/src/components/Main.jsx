import ItemsList from "./ItemsList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemsList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          individualPath="/artist"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemsList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          individualPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
