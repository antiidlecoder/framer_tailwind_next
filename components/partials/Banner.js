import React from 'react';
import { motion } from "framer-motion"

function Banner() {
    return (
        <div className="h-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1642007086358-278c226b915d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            <div className="bg-blend-multiply bg-gray-500 absolute h-full w-full top-0 opacity-40"></div>
            <div className="container absolute top-0 right-0 left-0 h-full">
                <div className="md:flex flex-col items-center justify-center h-full text-white">
                    <div>
                        <motion.div
                            initial={{ y: 50, visibility: 'hidden' }}
                            animate={{ y: 0, visibility: 'visible', opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 2 }}>
                            <h1 className="text-8xl mb-3">smewhrlse</h1>

                        </motion.div>
                        <motion.div
                            initial={{ y: 50, visibility: 'hidden' }}
                            animate={{ y: 0, visibility: 'visible', opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 2, delay: 1.2 }}>
                            <p className="text-3xl">work for yourself - with others</p>

                        </motion.div>
                        <motion.div
                            initial={{ y: 50, visibility: 'hidden', opacity: 0 }}
                            animate={{ y: 0, visibility: 'visible', opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 2, delay: 2 }}>
                            <p className="text-xl mt-3">design, photography, video</p>

                        </motion.div>
                        <motion.div
                            initial={{ visibility: 'hidden', opacity: 0 }}
                            animate={{ visibility: 'visible', opacity: 1 }}
                            transition={{ ease: "easeIn", duration: 1, delay: 5 }}>
                            <button className="bg-blue-600 hover:bg-blue-700 transition font-bold uppercase tracking-wider px-8 py-3 rounded-full block mt-12">3xplore</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
