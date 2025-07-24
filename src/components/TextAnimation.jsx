import {motion} from "framer-motion"

function TextAnimation(){
    return (
    <>
        <motion.h1
            initial={{ y:25, opacity:0}}
            animate={{ y:0, opacity:1}}
            transition={{ duration:1, ease:"easeInOut"}}
            >Hi! I'm Ulaş</motion.h1>
    </>
    );
}

export default TextAnimation;