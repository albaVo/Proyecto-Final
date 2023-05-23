import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#512da8',
                    color: '#fff',
                    margin: 0,
                    padding: '13px 30px',
                    borderRadius: '6px',
                    '&:hover, &:active, &:focus': {
                        backgroundColor: '#9575cd'
                    }
                }
            }
        },
        // MuiTextField: {
        //     styleOverrides: {
        //         root: {
        //             border: '2px solid #3d3d3d',
        //             backgroundColor: '#1d1d1d',
        //             color: '#fff',
        //             padding: '14px',
        //             borderRadius: '6px',
        //             '&:hover, &:active, &:focus': {
        //                 borderColor: '#512da8'
        //             }
        //         }
        //     }
        // },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    border: '2px solid #3d3d3d',
                    backgroundColor: '#1d1d1d',
                    color: '#fff',
                    padding: '14px',
                    borderRadius: '6px',
                    height: 50,
                    margin: 10,
                    '&:hover, &:active, &:focus': {
                        borderColor: '#512da8'
                    }
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    marginLeft: '18%',
                    width: '70%'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#3d3d3d10',
                    backdropFilter: 'blur(100px)'
                }
            }
        }
    }
})