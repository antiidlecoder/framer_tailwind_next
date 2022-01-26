import { motion } from "framer-motion";

const withTransition = (OriginalComponent) => {
    return () => (
        <>
            <OriginalComponent />
            <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </>
    );
};

export default withTransition;