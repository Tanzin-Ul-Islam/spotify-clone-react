import React from 'react'
import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'
export default function Discover() {
    let genreTitle = 'Pop'
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
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
                    genres.map((el, index) => {
                        return <SongCard key={el.key} song={el} i={index} />
                    })
                }
            </div>
        </div>
    )
}

