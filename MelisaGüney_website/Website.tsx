import React from "react"
import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Website(props) {
    const { tint } = props

    return (
        <div style={{ display: "flex", gap: "50px" }}>
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 25,
                    backgroundColor: tint,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
                animate={{ scale: 1.5 }}
                whileHover={{ 
                    rotate: 90,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    y: -5
                }}
            >
                Klasik Sanat
            </motion.div>

            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 25,
                    backgroundColor: tint,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
                animate={{ scale: 1.5 }}
                whileHover={{ 
                    rotate: 90,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    y: -5
                }}
            >
                Dijital Sanat
            </motion.div>
        </div>
    )
}

addPropertyControls(Website, {
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
}) 