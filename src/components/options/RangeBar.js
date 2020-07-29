import React from 'react'

const RangeBar = ({min,max,value,label,changeHandler}) => {
    return (
        <div className="w-full mr-4">
            <label htmlFor="size-bar" className="text-gray-300 text-md">{label}</label>
            <input id="size-bar" onChange={changeHandler} className="w-full  slider" type="range" min={min} max={max} value={value}/>
        </div>
    )
}


export default RangeBar;