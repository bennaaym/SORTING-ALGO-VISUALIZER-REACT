import React from 'react';
import '../../assets/css/slider.css'
import Button from './Button';
import Select from './Select';
import RangeBar from './RangeBar';
import {motion} from 'framer-motion'

const OptionBar = ({arrLen,speed,generateArr,changeRange,changeSpeed,changeOption,sortMethod}) => {

    return (
        <motion.div 
            initial={{y:'-100vh'}}
            animate={{y:0,transition:{delay:1.5,duration:0.5}}}
            >
            <div className="mb-4 px-16 flex items-center justify-center ">
                <RangeBar label={"Size: "+arrLen} value={arrLen} min={0} max={50} changeHandler={(e)=>changeRange(e.target.value)}/>
                <RangeBar label={"Delay: "+speed} value={speed} min={10} max={1000} changeHandler={(e)=>changeSpeed(e.target.value)}/>
            </div>
            <div className="flex  items-center justify-center relative">
                <Select onChangeHandler={(e) => changeOption(e.target.value)}/>
                <div className="w-1/6 mr-4 ">
                    <Button title="Sort" onClickHandler={sortMethod}/>
                </div>
                <div className="w-1/6 mr-4 "> 
                    <Button title="Generate" onClickHandler={()=>generateArr(arrLen)}/>
                </div>
            </div>
        </motion.div>
    )
}



export default OptionBar;