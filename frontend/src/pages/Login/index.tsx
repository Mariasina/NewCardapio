import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { GreenPanel, LoginImage } from "./styles";
import LoginImg from "../../assets/img/loginImg.svg"

export default function Login() {
    return (
        <>
            <Stack flexDirection={"row"} height={"100vh"}>
                <GreenPanel>
                    <Stack
                        height={"100%"}
                        width={"75%"}
                        my={5}
                        sx={{
                            backgroundColor: "var(--bg-primary)",
                            padding: 5,
                            borderRadius: "20px",
                        }}
                        zIndex={10}
                    >
                        <Typography fontFamily={"Marcellus SC"} variant="h2" color="white" mt={5} textAlign={"center"} zIndex={9}>Login</Typography>

                        <Stack width={"100%"} gap={10} mt={15} alignItems={"center"} >
                            <TextField
                                label="Username"
                                sx={{
                                    backgroundColor: "#ffffffe8",
                                    ".MuiFilledInput-root, &": {
                                        borderTopRightRadius: "8px",
                                        borderTopLeftRadius: "8px",
                                        fontFamily: "Marcellus",
                                        fontSize: "1.1rem"
                                    },
                                    ".MuiFormLabel-root": {
                                        fontFamily: "Marcellus",
                                        fontWeight: "600"
                                    }
                                }}
                                variant="filled"
                                fullWidth

                            />
                            <TextField
                                type="password"
                                label="Password"
                                variant="filled"
                                sx={{
                                    backgroundColor: "#ffffffe8",
                                    ".MuiFilledInput-root, &": {
                                        borderTopRightRadius: "8px",
                                        borderTopLeftRadius: "8px",
                                        fontFamily: "Marcellus",
                                        fontSize: "1.1rem"
                                    },
                                    ".MuiFormLabel-root": {
                                        fontFamily: "Marcellus",
                                        fontWeight: "600"
                                    }
                                }}
                                fullWidth
                            />
                            <Button

                                variant="contained"
                                fullWidth
                                sx={{
                                    maxWidth: "350px",
                                    padding: 3,
                                    backgroundColor: "#CCA67F",
                                    color: "var(--bg-primary)"
                                }}
                                color="inherit"
                            >
                                <Typography sx={{ textTransform: "capitalize" }} fontFamily={"Marcellus"} variant="h5" textAlign={"center"} >Login</Typography>
                            </Button>
                        </Stack>
                    </Stack>
                </GreenPanel>
                <Box>
                    <LoginImage src={LoginImg}></LoginImage>
                </Box>
            </Stack>
        </>
    )
}