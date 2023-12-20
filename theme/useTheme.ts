import dark from "./themes/dark"
import { Theme, createTheme } from "@mui/material/styles"
//import * as fs from 'fs'
//import * as path from 'path'
//
//const directory = path.join(__dirname, 'theme', 'themes');
//const files = fs.readdirSync(directory).map(name => path.parse(name).name)

//console.log(files)
export type themes = "dark" | "white"
export const useTheme = (theme: themes): Theme => {
    return createTheme(dark)
}