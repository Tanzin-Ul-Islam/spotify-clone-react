import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
export default function Discover() {
    const dispatch = useDispatch();
    const { activeSong, isPlaying, test } = useSelector((state) => state.player)
    const { data, isFetching, error } = useGetTopChartsQuery();
    let genreTitle = 'Pop'
    if (isFetching) return <Loader title="Loading songs...." />
    console.log(data);
    console.log('isPlaying',isPlaying);
    
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover</h2>

                <select
                    onChange={() => { }}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map(el => <option key={el.value} value={el.value}>{el.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {
                    data?.tracks.map((el, index) => {
                        return <SongCard key={el.key} song={el} i={index} isPlaying={isPlaying} activeSong={activeSong} data={data} />
                    })
                }
            </div>
        </div>
    )
}

