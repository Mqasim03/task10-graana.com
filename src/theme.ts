import { extendTheme } from '@chakra-ui/react'
import { color } from 'framer-motion';
export const MyNewTheme = extendTheme({
    fonts: {
        Primary: "Montserrat, sans-serif",
        Secondary: "Poppins, sans-serif",
        Next:"Nunito, sans-serif",
    },
    bordercolor:{
        color:"#737678"
    }
}) 
const colors = { mycolor: "#F39C12" }

const shadows = {
  outline: '0 0 0 3px var(--chakra-colors-mycolor-500)',
};

const theme = extendTheme({ colors, shadows });