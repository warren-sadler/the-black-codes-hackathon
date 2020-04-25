import React from "react";
import { motion } from "framer-motion";
function App() {
  return (
    <div className="container fullscreen flex-center-all bg-primary text-white">
      <AnimatedHeader style={{ textTransform: "uppercase" }}>
        The Black Codes
      </AnimatedHeader>
    </div>
  );
}

function AnimatedHeader({ children, style }) {
  return (
    <motion.header
      style={style}
      initial="hidden"
      animate="visible"
      transition={{ duration: 3 }}
      variants={{
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
    >
      {children}
    </motion.header>
  );
}

export default App;
