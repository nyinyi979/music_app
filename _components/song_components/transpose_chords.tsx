export default function TransposeChord(chord: string){
    switch(chord){
        case "A":
            return "A#"
        case "A#":
            return "B"
        case "B":
            return "C"
        case "C":
            return "C#"
        case "C#":
            return "D"
        case "D":
            return "D#"
        case "D#":
            return "E"
        case "E":
            return "F"
        case "F":
            return "F#"
        case "F#":
            return "G"
        case "G":
            return "G#"
        case "G#":
            return "A"
        //
        case "Am":
            return "A#m"
        case "A#m":
            return "Bm"
        case "Bm":
            return "Cm"
        case "Cm":
            return "C#m"
        case "C#m":
            return "Dm"
        case "Dm":
            return "D#m"
        case "D#m":
            return "Em"
        case "Em": 
            return "Fm"
        case "Fm":
            return "F#m"
        case "F#m":
            return "Gm"
        case "Gm":
            return "G#m"
        case "G#m":
            return "Am"
        //
        case "Adim":
            return "A#dim"
        case "A#dim":
            return "Bdim"
        case "Bdim":
            return "Cdim"
        case "Cdim":
            return "C#dim"
        case "C#dim":
            return "Ddim"
        case "Ddim":
            return "D#dim"
        case "D#dim":
            return "Edim"
        case "Edim":
            return "Fdim"
        case "Fdim":
            return "F#dim"
        case "F#dim":
            return "Gdim"
        case "Gdim":
            return "G#dim"
        case "G#dim":
            return "Adim"
        //
    }
}