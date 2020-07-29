import React from 'react'
import uuid from 'react-uuid'
import {motion} from 'framer-motion';

const BarChart = ({arr,activeElemIndex}) => {
    return (
        (arr) ? (
        <motion.div 
            initial={{scale:0}}
            animate={{scale:1.0,transition:{delay:0.5,duration:1}}}
            className="min-h-full  mt-16 flex items-end justify-between">
            {arr.map((elem,index)=>{
               
            return (
                <div 
                    className="w-full barChart ml-2 bg-gray-300 rounded-t "
                    style={{height:elem+'px', 
                            background:(index===activeElemIndex.i)? '#FC8181' :
                            (index===activeElemIndex.j)?'#A3BFFA':'#e2e8f0',
                            }}
                    key={uuid()}
            ></div>
            )
            })}
      </motion.div>):null
    )
}

export default BarChart;