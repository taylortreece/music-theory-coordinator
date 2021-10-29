import { v4 as uuidv4 } from 'uuid'

import AFlatMajor from '../data/Major/AFlatMajor'
import AMajor from '../data/Major/AMajor'
import ASharpMajor from '../data/Major/ASharpMajor'
import BFlatMajor from '../data/Major/BFlatMajor'
import BMajor from '../data/Major/BMajor'
import CMajor from '../data/Major/CMajor'
import CSharpMajor from '../data/Major/CSharpMajor'
import DFlatMajor from '../data/Major/DFlatMajor'
import DMajor from '../data/Major/DMajor'
import DSharpMajor from '../data/Major/DSharpMajor'
import EFlatMajor from '../data/Major/EFlatMajor'
import EMajor from '../data/Major/EMajor'
import FMajor from '../data/Major/FMajor'
import FSharpMajor from '../data/Major/FSharpMajor'
import GFlatMajor from '../data/Major/GFlatMajor'
import GMajor from '../data/Major/GMajor'
import GSharpMajor from '../data/Major/GSharpMajor'

import AFlatminor from '../data/minor/AFlatMinor'
import Aminor from '../data/minor/Aminor'
import ASharpminor from '../data/minor/ASharpminor'
import BFlatminor from '../data/minor/BFlatminor'
import Bminor from '../data/minor/Bminor'
import Cminor from '../data/minor/Cminor'
import CSharpminor from '../data/minor/CSharpminor'
import DFlatminor from '../data/minor/DFlatminor'
import Dminor from '../data/minor/Dminor'
import DSharpminor from '../data/minor/DSharpminor'
import EFlatminor from '../data/minor/EFlatminor'
import Eminor from '../data/minor/Eminor'
import Fminor from '../data/minor/Fminor'
import FSharpminor from '../data/minor/FSharpminor'
import GFlatminor from '../data/minor/GFlatminor'
import Gminor from '../data/minor/Gminor'
import GSharpminor from '../data/minor/GSharpminor'

const Keys = [
    AFlatMajor,
    AMajor,
    ASharpMajor,
    BFlatMajor,
    BMajor,
    CMajor,
    CSharpMajor,
    DFlatMajor,
    DMajor,
    DSharpMajor,
    EFlatMajor,
    EMajor,
    FMajor,
    FSharpMajor,
    GFlatMajor,
    GMajor,
    GSharpMajor,
    AFlatminor,
    Aminor,
    ASharpminor,
    BFlatminor,
    Bminor,
    Cminor,
    CSharpminor,
    DFlatminor,
    Dminor,
    DSharpminor,
    EFlatminor,
    Eminor,
    Fminor,
    FSharpminor,
    GFlatminor,
    Gminor,
    GSharpminor
]

export default function songReducer(state = {
    chords: [],
    songs: [],
    chosenSong: {}
}, action) {
    switch(action.type) {

        case "FETCH_KEY":

        return {
            ...state,
            chords: [],
            chosenSong: {},
            songs: [...state.songs]
        }

        case "ADD_CHORD": 
        const newChord = {...action.chord, songChordId: uuidv4() }
        return {
            ...state,
            chords: [
            ...state.chords, 
            newChord
        ]}
        
        case "REMOVE_CHORD":
        return {
            ...state,
            songs: [...state.songs],
            chords: state.chords.filter(chord => (chord.songChordId !== action.chord.songChordId))
        }

        case "SAVE_SONG":
        return {
            ...state, 
            chords: [], 
            songs: action.songs,
            chosenSong: {}
        }

        case "FETCH_SONGS":
        return {
            ...state, 
            chords: [...state.chords], 
            songs: action.songs
        }

        case "SELECT_SONG":
            let key = Keys.filter(key => (key.name + key.key_type === action.song.key + action.song.key_type))[0]
            let scale = key.scales.filter(scale => (scale.scale_type === action.song.scale))[0]
            let chords = scale.chords.filter(chord => (action.song.chord_ids.includes(chord.id)))

            return {
            ...state, 
            chords: action.song.chord_ids.map(id => {
                for(const chord of chords) {
                    if (chord.id === id) { 
                        return { 
                        ...chord, 
                        songChordId: uuidv4() 
                    }}
                }
            }),
            chosenSong: action.song
        }

        case "DELETE_SONG":

        return {
            ...state, 
            chords: [], 
            songs: action.songs,
            chosenSong: {}
        }

    default:
        return state
    }
}