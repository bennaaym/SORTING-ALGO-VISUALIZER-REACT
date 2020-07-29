//UTILITY FUNCTIONS
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const swap = (arr,i,j) => {
    let tmp = arr[i];
    arr[i]=arr[j];
    arr[j]=tmp
}

//BUBBLE SORT
export const bubbleSort = async (arr,setArr,speed,setActiveElementIndex) =>{

    let n = arr.length-1;
    let swapped=false;
    for(let i=0;i<n;i++)
    {
        for(let j=n;j>i;j--)
        {
            if(arr[j]<arr[j-1])
            {
                swap(arr,j,j-1);
                swapped=true;
                await sleep(speed);
                setArr([...arr]);
                setActiveElementIndex({i:j,j:j-1});
            }
        }
        if(!swapped)
            break;
    }   
}

//SELECTION SORT
export const selectionSort= async (arr,setArr,speed,setActiveElementIndex)=>{

    const minArr = (arr,i,s) =>{
        let min = arr[i];
        let index = i;
        for(let j=i+1;j<s;j++)
        {
            if(min>arr[j])
            {
                min = arr[j];
                index = j;
            }
        }
        return index;
    }

    for(let i=0;i<arr.length-1;i++)
    {
        let minIndex = minArr(arr,i,arr.length);
        swap(arr,i,minIndex);
        await sleep(speed);
        setArr([...arr]);
        setActiveElementIndex({i:minIndex,j:i});
    }

}

//INSERTION SORT

export const insertionSort= async (arr,setArr,speed,setActiveElementIndex)=>{

    let i ,j;

    for(i=1;i<arr.length;i++)
    {
        j=i;
        while(j>0 && arr[j]<arr[j-1])
           {
                swap(arr,j,j-1);
                await sleep(speed);
                setArr([...arr]);
                setActiveElementIndex({i:j,j:j-1});
                j--;
           } 
    }
}

//HEAP SORT

const heapify = (arr,n,i,setArr)=>{
    let largest = i;
    let l = 2*i+1;
    let r = 2*i+2;

    if(l<n && arr[r]>arr[largest])
        largest = l;
    if(r<n && arr[r]>arr[largest])
        largest = r;
    if(largest !==i)
    {
        swap(arr,i,largest);
        setArr([...arr]);

        heapify(arr,n,largest,setArr);
    }
}

export const heapSort =(arr,setArr,speed) =>{
    let n=arr.length;

    for(let i=n/2-1;i>=0;i--)
        heapify(arr,n,i,setArr);
    
    for(let i=n-1;i>0;i--)
    {
        swap(arr,0,i);
        heapify(arr,i,0,setArr);
    }
}


// QUICK SORT

const partition =  async (arr,low,high,setArr,speed,setActiveElementIndex) =>{
    let pivot = arr[high];
    let i=(low-1);

    for(let j=low ;j<high;j++)
    {
        if(arr[j]<pivot)
        {
            i++;
            swap(arr,i,j);
            await sleep(speed)
            setArr([...arr]);
            setActiveElementIndex({i,j});
        }
    }

    swap(arr,i+1,high);
    await sleep(speed)
    setArr([...arr]);
    setActiveElementIndex({i:i+1,j:high});
    
    return i+1;
}

export const quickSort = async (arr,low,high,setArr,speed,setActiveElementIndex) =>{
    if(low<high)
    {
        let pi = await partition(arr,low,high,setArr,speed,setActiveElementIndex);

        quickSort(arr,low,pi-1,setArr,speed,setActiveElementIndex);
        quickSort(arr,pi+1,high,setArr,speed,setActiveElementIndex);
    }
} 