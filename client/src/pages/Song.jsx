import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";
import { useParams, Link } from "react-router-dom";
import Player from "../components/Player";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currSongObj) => currSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currSongObj) => currSongObj.artist === artist
  );

  const randomSongIndex = Math.floor(
    Math.random() * songsArrayFromArtist.length - 1
  );

  const randomSongIndex2 = Math.floor(
    Math.random() * songsArrayFromArtist.length - 1
  );

  const randomIdFromArtist = songsArrayFromArtist[randomSongIndex]._id;

  const randomId2FromArtist = songsArrayFromArtist[randomSongIndex2]._id;

  const artistImage = artistObj.image;

  const artistId = artistObj._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            className="song__image"
            width="300"
            src={image}
            alt={`Imagem da música ${name}`}
          />
        </div>
      </div>

      <div className="song__bar">
        <Link className="song__artist-image" to={`/artist/${artistId}`}>
          <img
            width={75}
            height={75}
            src={artistImage}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div className="song__info">
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
