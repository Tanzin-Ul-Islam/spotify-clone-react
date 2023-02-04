import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => {
  return (
    isPlaying && activeSong.title == song.title ?
      <FaPauseCircle className='text-grey-300' size={35} onClick={handlePause} />
      :
      <FaPlayCircle className='text-grey-300' size={35} onClick={handlePlay} />
  )
}

export default PlayPause;
