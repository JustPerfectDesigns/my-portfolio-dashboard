import {motion} from "framer-motion";
import {BiToggleLeft} from "react-icons/bi";

const FloatingAnimation = () => {
   return (
      <motion.div
      style={{
         position: "absolute",
         bottom: "3rem",
         // left: "45%",
         transform: "translate(-50%, -50%)",
         color: "#fff"
      }}
      className="md:left-[48.6%] left-[46.5%]"
      animate={{ y: ["-50%", "50%", "-50%"] }}
      transition={{ duration: 3, repeat: Infinity }}
      >
         <BiToggleLeft className="dark:text-white text-[#121212] text-3xl rotate-90" />
      </motion.div>
   )
}

export default FloatingAnimation