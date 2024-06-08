import { readable } from "svelte/store";
//f stands for 2 flats
//x stands for 2 sharps
export const keys = readable([
    {
        tonic: "C",
        major: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
        minor: ["Cm", "Ddim", "Eb", "Fm", "Gm", "Ab", "Bb"],
    },
    {
        tonic: "D",
        major: ["D", "Em", "F#m", "G", "Am", "B", "C#dim"],
        minor: ["Dm", "Edim", "F", "Gm", "Am", "Bb", "C"],
    },
    {
        tonic: "E",
        major: ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
        minor: ["Em", "F#dim", "G", "Am", "Bm", "C", "D"],
    },
    {
        tonic: "F",
        major: ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"],
        minor: ["Fm", "Gdim", "Ab", "Bbm", "Cm", "Db", "Eb"],
    },
    {
        tonic: "G",
        major: ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
        minor: ["Gm", "Adim", "Bb", "Cm", "Dm", "Eb", "F"],
    },
    {
        tonic: "A",
        major: ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
        minor: ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
    },
    {
        tonic: "B",
        major: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"],
        minor: ["Bm", "C#dim", "D", "Em", "F#m", "G", "A"],
    },
    {
        tonic: "Cb",
        major: ["Cb", "Dbm", "Ebm", "Fb", "Gb", "Abm", "Bbdim"],
        minor: ["Cbm", "Dbdim", "Ef", "Fbm", "Gbm", "Af", "Bf"],
    },
    {
        tonic: "Db",
        major: ["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdim"],
        minor: ["Dbm", "Ebdim", "Fb", "Gbm", "Abm", "Bf", "Cb"],
    },
    {
        tonic: "Eb",
        major: ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Ddim"],
        minor: ["Ebm", "Fdim", "Gb", "Abm", "Bbm", "Cb", "Db"],
    },
    {
        tonic: "Fb",
        major: ["Fb", "Gbm", "Abm", "Bf", "Cb", "Dbm", "Ebdim"],
        minor: ["Fbm", "Gbdim", "Af", "Bfm", "Cbm", "Df", "Ef"],
    },
    {
        tonic: "Gb",
        major: ["Gb", "Abm", "Bbm", "Cb", "Db", "Ebm", "Fdim"],
        minor: ["Gbm", "Abdim", "Bf", "Cbm", "Dbm", "Ef", "Fb"],
    },
    {
        tonic: "Ab",
        major: ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gdim"],
        minor: ["Abm", "Bbdim", "Cb", "Dbm", "Ebm", "Fb", "Gb"],
    },
    {
        tonic: "Bb",
        major: ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Adim"],
        minor: ["Bbm", "Cdim", "Db", "Ebm", "Fm", "Gb", "Ab"],
    },
    {
        tonic: "C#",
        major: ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"],
        minor: ["C#m", "D#dim", "E", "F#m", "G#m", "A", "B"],
    },
    {
        tonic: "D#",
        major: ["D#", "E#m", "Fxm", "G#", "A#", "B#m", "Cxdim"],
        minor: ["D#m", "E#dim", "F#", "G#m", "A#m", "B", "C#"],
    },
    {
        tonic: "E#",
        major: ["E#", "Fxm", "Gxm", "A#", "B#", "Cxm", "Dxdim"],
        minor: ["E#m", "Fxdim", "G#", "A#m", "B#m", "C#", "D#"],
    },
    {
        tonic: "F#",
        major: ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"],
        minor: ["F#m", "G#dim", "A", "Bm", "C#m", "D", "E"],
    },
    {
        tonic: "G#",
        major: ["G#", "A#m", "B#m", "C#", "D#", "E#m", "Fxdim"],
        minor: ["G#m", "A#dim", "B", "C#m", "D#m", "E", "F#"],
    },
    {
        tonic: "A#",
        major: ["A#", "B#m", "Cxm", "D#", "E#", "Fxm", "Gxdim"],
        minor: ["A#m", "B#dim", "C#", "D#m", "E#m", "F#", "G#"],
    },
    {
        tonic: "B#",
        major: ["B#", "Cxm", "Dxm", "E#", "Fx", "Gxm", "Axdim"],
        minor: ["B#m", "Cxdim", "D#", "E#m", "Fxm", "G#", "A#"],
    }
]);
