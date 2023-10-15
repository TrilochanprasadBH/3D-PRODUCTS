import React from 'react'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from "../config/config";
import state from '../store';
import {download} from "../assets"
import { downloadCanvasToImage, reader } from '../config/helpers';
import {EditorTabs,FilterTabs,DecalTypes} from "../config/constants";
import {fadeAnimation, slideAnimation} from "../config/motion";
import AiPicker from '../components/AiPicker';
import ColorPicker from '../components/ColorPicker';
import FilePicker from '../components/FilePicker';
import Tab from '../components/Tab';
import Button from '../components/Button';





const Customiser = () => {
  const snap = useSnapshot(state);
 
 
 
 
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div key="custom" className='top-0 left-0 z-10' {...slideAnimation(`left`)}>
            <div className='flex items-center min-h-screen'>
                    <div className='editortabs-container tabs'>
                      {EditorTabs.map((tab)=>(
                        <Tab 
                        key={tab.name} 
                        tab={tab} 
                        handleClick={()=>{}}/>
                      ))}
                    </div>
            </div>
        </motion.div>

        <motion.div className='absolute top-5 right-5' {...fadeAnimation}>
           <Button type="filled" 
           title={"Back"} 
           handleClick={()=>state.intro=true}
           customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customiser