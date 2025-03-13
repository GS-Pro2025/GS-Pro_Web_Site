import React from "react";
import { motion } from "framer-motion";
import avatarDefault from "../assets/avatarDefault.svg";

const Avatar = ({ src, alt }) => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="rounded-full border"
        >
        <img
            src={src || avatarDefault}
            alt={alt}
            className="w-20 h-20 md:w-50 md:h-50 rounded-full border"
        />
        </motion.div>
    );
};

export default Avatar;
