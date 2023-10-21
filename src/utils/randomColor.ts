import { theme } from "../global/theme"

export function randomColor(): string {
    let randomNumber = Math.floor(Math.random() * 19)
    let colorTypes = Object.keys(theme.types)
    
    return (theme.types as Record<string, string>)[colorTypes[randomNumber]]
}