import React from "react" 
import {motion, AnimatePresence} from "framer-motion";
import {useSnapshot} from "valtio";
import state from "../store/index";
import Button from "../components/Button";
// valtio is a small library for React global state
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state)
  //  console.log(snap);
  //  console.log(state);
  
  return (

    <AnimatePresence>
      {snap.intro && (
      
      <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
                    <img
                       src="./threejs.png"
                       alt="logo"
                       className="h-8 w-8 object-contain"
                    />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            
            <motion.div {...headTextAnimation} className="flex flex-col gap-6">
                    <h1 className="head-text">
                            LET`S <br className="xl:block hidden"/> DO IT.
                    </h1>
            </motion.div>
            <motion.div {...headContentAnimation}>
              <p className="max-w-md font-mono text-blue-800">
                Create your own exclusive shirt with our brand new 3D customisation tool. <strong>Unleash your creative potential</strong>
                {" "} and wear what <strong>you</strong> create ! 
              </p>
              <Button 
              type="filled"
              title="Customise It"
              handleClick={()=>state.intro=false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
      </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home


