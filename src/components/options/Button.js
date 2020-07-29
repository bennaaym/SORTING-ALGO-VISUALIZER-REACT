import React from 'react'

const Button = ({title,onClickHandler}) => {
    return (
            <button onClick={onClickHandler} 
                    className="w-full flex items-center justify-center bg-gray-300  text-gray-900 text-md font-semibold  hover:bg-gray-400  py-3 px-4 rounded" type="button">
                
                {title}
            </button>
    )
}

export default Button;