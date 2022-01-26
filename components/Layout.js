import React from 'react'
import { motion } from 'framer-motion'
import Header from './partials/Header'
import Footer from './partials/Footer'


/*
const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}
*/

const variants = {
    hidden: { x: 0, y: 0 },
    enter: { x: 0, y: -2000 },
    exit: { x: 0, y: -2000 },
}

const Layout = (props) => (
    <div>
        {/* 
        <motion.div
            className="h-screen w-screen bg-gray-200 fixed z-50"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear', duration: 1.5 }}>

        </motion.div>
        */}

        <Header />
        {props.children}
        <Footer />
    </div>
)

export default Layout