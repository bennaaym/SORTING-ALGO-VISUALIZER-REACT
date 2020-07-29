import React,{useState,useEffect} from 'react';
import './assets/css/app.css'
import OptionBar from './components/options/OptionBar';
import BarChart from './components/visualizer/BarChart';
import {bubbleSort,selectionSort,insertionSort,quickSort} from './logic/Sort';

const App = () => {
  
  const [arr,setArr] = useState([]);
  const [activeElemIndex,setActiveElemIndex] = useState({});
  const [arrLen,setArrLen]=useState(20);
  const [sortOption,setSortOption]=useState();
  const [speed,setSpeed]=useState(200);


  useEffect(()=>{
    generateArr(arrLen);
  },[arrLen])

  const generateArr = (len) =>{
    const tmpArr=[];
    for(let i=0;i<len;i++)
    {
      tmpArr.push(Math.floor(Math.random()*(400-50))+50);
    }
    setActiveElemIndex(-1);
    setArr(tmpArr);
  }


  const sortMethod =()=>{
    switch(sortOption)
    {
      case "BUBBLE":
        bubbleSort(arr,setArr,speed,setActiveElemIndex);
        break;

      case "SELECTION":
        selectionSort(arr,setArr,speed,setActiveElemIndex);
        break;
      case "INSERTION":
        insertionSort(arr,setArr,speed,setActiveElemIndex);
        break;

      case "QUICK":
        quickSort(arr,0,arrLen-1,setArr,speed,setActiveElemIndex);
        break;
      default:
        bubbleSort(arr,setArr,speed,setActiveElemIndex);
        break;
    }
  }

  return (
    <div className="App bg-gray-900 sm:px-20 lg:px-40 pt-10 overflow-hidden">
        <OptionBar 
          arrLen={arrLen}
          speed={speed}
          generateArr={generateArr}
          sortMethod={sortMethod}
          changeRange={setArrLen}
          changeOption={setSortOption}
          changeSpeed={setSpeed}
          />
          <BarChart arr={arr} activeElemIndex={activeElemIndex}/>
    </div>
  );
}




export default App;
