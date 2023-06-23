const BACKGROUND_PURPLE = "#6F6FFB"
const BACKGROUND_LIGHT_BLUE = "#68DBF2"
const BACKGROUND_GREY = "#E4ECF7"
const BACKGROUND_ROSE = "#FFBAF8"
const BACKGROUND_RED = "#F16063"
const BACKGROUND_GREEN = "#70E0BF"
const BACKGROUND_PURPOSE_UI = "#4C6FFF"


const BODY_PINK = "#FF4DD8"
const BODY_PINK_SHADOW = "#D2499B"

const BODY_BLUE = "#3633e0"
const BODY_BLUE_SHADOW = "#362ABC"


const BODY_ORANGE = "#E05A33"
const BODY_ORANGE_SHADOW = "#c43926"

const HAIR_BROWN = "#47280B"
const HAIR_BLACK = "#1B0B47"
const HAIR_RED = "#AD3A20"


const SKIN_DARK_PRIMARY = "#836055"
const SKIN_DARK_SECONDARY = "#68463C"
const SKIN_DARK_SHADOW = "#553329"

const SKIN_WHITE_PRIMARY = "#F5D0C5"
const SKIN_WHITE_SECONDARY = "#EAC0B3"
const SKIN_WHITE_SHADOW = "#C99688"

const SKIN_YELLOW_PRIMARY = "#FFCB7E"
const SKIN_YELLOW_SECONDARY = "#F0BD70"
const SKIN_YELLOW_SHADOW = "#E9B05B"

export const SKIN_COLORS = {
    "dark": {
        "primary": SKIN_DARK_PRIMARY,
        "secondary": SKIN_DARK_SECONDARY,
        "shadow": SKIN_DARK_SHADOW
    },
    "white": {
        "primary": SKIN_WHITE_PRIMARY,
        "secondary": SKIN_WHITE_SECONDARY,
        "shadow": SKIN_WHITE_SHADOW
    },
    "yellow": {
        "primary": SKIN_YELLOW_PRIMARY,
        "secondary": SKIN_YELLOW_SECONDARY,
        "shadow": SKIN_YELLOW_SHADOW
    }
}

export const BACKGROUND_COLORS = {
    "purple": BACKGROUND_PURPLE,
    "lightBlue": BACKGROUND_LIGHT_BLUE,
    "grey": BACKGROUND_GREY,
    "rose": BACKGROUND_ROSE,
    "red": BACKGROUND_RED,
    "green": BACKGROUND_GREEN,
    "purposeUI": BACKGROUND_PURPOSE_UI,
}
export const BACKGROUND_SHAPES = ['circle', 'rounded', 'square'] as const

export const HEAD_COLORS = [
    "dark",
    "white",
    "yellow"
] as const
export const HEAD_SHAPES = ['normal', 'wide', 'thin'] as const

export const BODY_COLORS = {
    "pink": {
        "primary": BODY_PINK,
        "shadow": BODY_PINK_SHADOW
    },
    "blue": {
        "primary": BODY_BLUE,
        "shadow": BODY_BLUE_SHADOW
    },
    "orange": {
        "primary": BODY_ORANGE,
        "shadow": BODY_ORANGE_SHADOW
    }
}

export const HAIR_COLORS = {
    "brown": HAIR_BROWN,
    "black": HAIR_BLACK,
    "red": HAIR_RED,
}


export type BackgroundColor = keyof typeof BACKGROUND_COLORS
export type BackgroundShape = typeof BACKGROUND_SHAPES[number]

export type HeadColor = keyof typeof SKIN_COLORS
export type HeadShape = typeof HEAD_SHAPES[number]

export const BODY_SHAPES = ['normal', 'golf'] as const
export type BodyShape = typeof BODY_SHAPES[number]
export type BodyColor = keyof typeof BODY_COLORS

export const HAIR_STYLES = ['classic_1', "classic_2", 'elvis', 'stylish', 'curly', 'long', 'pony_tail', 'slaughter', 'baldness'] as const
export type HairStyle = typeof HAIR_STYLES[number]
export type HairColor = keyof typeof HAIR_COLORS

export const MOUTH = ['normal', 'teeth'] as const
export type MouthType = typeof MOUTH[number]

export const EYES = ['normal', 'confident', 'happy'] as const
export type EyesType = typeof EYES[number]

export const MUSTACHE = ['freddy', 'hor-shoe', 'pencil-thin', 'pencil-thin-beard'] as const
export type MustacheType = typeof MUSTACHE[number]
// export const MUSTACHE_COLORS = ["red", "brown", "black"] as const
export type MustacheColor = keyof typeof HAIR_COLORS

export interface AvataramConfig {
    backgroundColor: BackgroundColor,
    backgroundShape: BackgroundShape,

    headColor: HeadColor,
    headShape: HeadShape,

    bodyShape: BodyShape,
    bodyColor: BodyColor,

    hairStyle: HairStyle,
    hairColor: HairColor,

    mouthType: MouthType,

    eyesType: EyesType,
    isBlushes: Boolean,

    mustacheType: MustacheType,
    mustacheColor: MustacheColor,

    hasGlasses: Boolean
}


