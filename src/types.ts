const BACKGROUND_PURPLE = "#6F6FFB"
const BACKGROUND_LIGHT_BLUE = "#68DBF2"
const BACKGROUND_GREY = "#E4ECF7"
const BACKGROUND_ROSE = "#FFBAF8"
const BACKGROUND_RED = "#F16063"
const BACKGROUND_GREEN = "#70E0BF"
const BACKGROUND_PURPOSE_UI = "#4C6FFF"

const HEAD_DARK = "#47280B"
const HEAD_WHITE = "#1B0B47"
const HEAD_YELLOW = "#AD3A20"

const BODY_PINK = "#47280B"
const BODY_BLUE = "#1B0B47"
const BODY_ORANGE = "#AD3A20"

const HAIR_BROWN = "#47280B"
const HAIR_BLACK = "#1B0B47"
const HAIR_RED = "#AD3A20"


// const SKIN_DARK_PRIMARY = "#836055"
// const SKIN_DARK_SECONDARY = "#68463C"
// const SKIN_DARK_SHADOW = "#553329"

// const SKIN_WHITE_PRIMARY = "#F5D0C5"
// const SKIN_WHITE_SECONDARY = "#EAC0B3"
// const SKIN_WHITE_SHADOW = "#C99688"

// const SKIN_YELOW_PRIMARY = "#FFCB7E"
// const SKIN_YELOW_SECONDARY = "#F0BD70"
// const SKIN_YELOW_SHADOW = "#F0BD70"

export const BACKGROUND_COLORS = {
    "purple": BACKGROUND_PURPLE,
    "lightBlue": BACKGROUND_LIGHT_BLUE,
    "grey": BACKGROUND_GREY,
    "rose": BACKGROUND_ROSE,
    "red": BACKGROUND_RED,
    "green": BACKGROUND_GREEN,
    "purposeUI": BACKGROUND_PURPOSE_UI,
}
export const BACKGROUND_SHAPES = {

}

export const HEAD_COLORS = {
    "dark": HEAD_DARK,
    "white": HEAD_WHITE,
    "yellow": HEAD_YELLOW
}

export const BODY_COLORS = {
    "pink": BODY_PINK,
    "blue": BODY_BLUE,
    "orange": BODY_ORANGE
}

export const HAIR_COLORS = {
    "brown": HAIR_BROWN,
    "black": HAIR_BLACK,
    "red": HAIR_RED,
}

export const SKIN_COLORS = {
    "purple": BACKGROUND_PURPLE,
    "lightBlue": BACKGROUND_LIGHT_BLUE,
    "grey": BACKGROUND_GREY,
    "rose": BACKGROUND_ROSE,
    "red": BACKGROUND_RED,
    "green": BACKGROUND_GREEN,
    "purposeUI": BACKGROUND_PURPOSE_UI,
}




export type BackgroundColor = keyof typeof BACKGROUND_COLORS
export type BackgroundShape = 'circle' | 'rounded' | 'square'

export type HeadColor = keyof typeof HEAD_COLORS
export type HeadShape = 'normal' | 'wide' | 'thin'

export type BodyShape = 'normal' | 'golf'
export type BodyColor = keyof typeof BODY_COLORS

export type HairStyle = 'classic_1' | "classic_2" | 'elvis' | 'stylish' | 'curly' | 'long' | 'pony_tail' | 'slaughter' | 'baldness'
export type HairColor = keyof typeof HAIR_COLORS

export type Mouth = 'normal' | 'teeth'

export type Eyes = 'normal' | 'confident' | 'happy'

export type Mustache = 'freddy' | 'hor-shoe' | 'pencil-thin' | 'pencil-thin-beard'
export type MustacheColor = "red" | "brown" | "black"

export interface AvataramConfig {
    backgroundColor: BackgroundColor,
    backgroundShape: BackgroundShape,

    headColor: HeadColor,
    headShape: HeadShape,

    bodyShape: BodyShape,
    bodyColor: BodyColor,

    hairStyle: HairStyle,
    hairColor: HairColor,

    mouth: Mouth,

    eyes: Eyes,
    isBlushes: Boolean,

    mustache: Mustache,
    mustacheColor: MustacheColor,

    hasGlasses: Boolean
}


