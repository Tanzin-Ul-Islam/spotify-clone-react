import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
    let { songid } = useParams()
    let {data, isFetching, error} = useGetSongDetailsQuery({songid})
    console.log('details',data);
    return (
        <div>{songid}</div>
    )
}

export default SongDetails;
