import { SyntheticEvent } from "react"




export type TButton = {
    onClick?: (e: SyntheticEvent) => void
    colorTheme?: TButtonColorTheme
}

export type TStyledButton = {
    colorTheme: TButtonColorTheme
}


export type TButtonColorTheme = 'blue' | 'red' | 'grey'