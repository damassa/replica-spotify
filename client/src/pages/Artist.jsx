import SongList from "../components/SongList";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();

  const { name, banner } = artistArray.filter(
    (currArtistObj) => currArtistObj._id === id
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currSongObj) => currSongObj.artist === name
  );

  const randomSongIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomSongIndex]._id;

  let bgImage = `linear-gradient(to bottom, var(--_shade), var(--_shade)), url("${banner}")`;

  return (
    <div className="artist">
      <div className="artist__header" style={{ backgroundImage: `${bgImage}` }}>
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>
      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
