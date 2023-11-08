import Header from "./Header";
import Main from "./Main";
import RotatingCube from "./RotatingCube";
import { Box } from "@chakra-ui/layout";

const ComingSoon = () => {

    return (
        <Box id="coming_soon">
            <Header user={data && data.user}/>
            <Main>
                <RotatingCube/>
            </Main>
            <Box as='hr' />
            <Footer/>
        </Box>
    );
}

export default ComingSoon;