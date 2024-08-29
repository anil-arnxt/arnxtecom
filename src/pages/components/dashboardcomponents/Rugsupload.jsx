import { CirclePlus, CircleX } from 'lucide-react'
import React, { useState } from 'react'

const Rugsupload = () => {

    const [productjson, setProductJson] = useState({
        productname :'',
        brandname: '',
        sku: '',
        productlength: '',
        productwidth: '',
        productheight: '',
        dimensionunit: '',
        mrp: '',
        offerprice: '',
        weight: '',
        weightunit: '',
        category: '',
        subcategory: '',
         tags: [],
         rooms: [],
         colors: [],
         sizeprice: [],
         warranty: '',
         features:'',
         properties:'',
         care:'',
         warrantydetails:'',
         returns: '',
         qualitypromise: '',
         productmainimage: '',
         productrestimage: [],
         glbfile: '',
         usdzfile: ''



    })

    const [currentsize, setCurrentSize] = useState('select')
    const [currentprice, setCurrentPrice] = useState()

    const handleremoveitem = (name, value) =>{

        const newarray = productjson[name]

   const filarray =     newarray.filter(item=>{
              return item !== value   
        }) 

      

  setProductJson({
      ...productjson,
       [name] : filarray
  })

}

const handleremoveitemsize = (name, value) =>{

    const newarray = productjson[name]

const filarray =     newarray.filter(item=>{
          return item.size !== value   
    }) 

  

setProductJson({
  ...productjson,
   [name] : filarray
})

}


const handletagsinput = (e)=>{
              

    let newval;
    let finalval
    
    if(e.target.value.includes(',')){

        newval= Array.from(e.target.value)
        newval.pop()
     finalval=  newval.join('')

        setProductJson((prevState) => {

            const updatedtags = prevState[e.target.name].includes(finalval) 
                ? prevState[e.target.name] 
                : [...prevState[e.target.name], finalval.toLowerCase()]; 
    
            return {
                ...prevState,
                [e.target.name]: updatedtags
            };
        });

        document.getElementById('inputtags').value = '';

    }

      
}

const handlepriceinput = (size, price)=>{
    

        setProductJson((prevState) => {

            const updatedprice =  [...prevState['sizeprice'], {
                 price: currentprice,
                 size: currentsize
            }]; 
    
            return {
                ...prevState,
                ['sizeprice']: updatedprice
            };
        });
          setCurrentSize('select')
        document.getElementById('currentpriceinput').value = '';

    

        

}

const handlecolorsinput = (e)=>{
              

    let newval;
    let finalval
    
    if(e.target.value.includes(',')){

        newval= Array.from(e.target.value)
        newval.pop()
     finalval=  newval.join('')

        setProductJson((prevState) => {

            const updatedcolors = prevState[e.target.name].includes(finalval) 
                ? prevState[e.target.name] 
                : [...prevState[e.target.name], finalval.toLowerCase()]; 
    
            return {
                ...prevState,
                [e.target.name]: updatedcolors
            };
        });

        document.getElementById('inputcolors').value = '';

    }

      
}
  return (
    <div>
         <div className='w-full  h-12 border-2 rounded-xl bg-gray-200 top-0 sticky'>

              <div className='w-full h-full  flex flex-row justify-end items-center ' >
                <button className='border-2 rounded-xl px-2 bg-gray-400 mr-5 '>Save</button>

              </div>

         </div>
        <div className='grid grid-cols-12 w-full bg-gray-100 gap-3 h-max p-5'>
            <div className='col-span-3 bg-gray h-full'> 
                 
            </div>

            <div className='col-span-6 bg-white p-2 h-full rounded-xl'> 

                <div className='container mx-auto   flex flex-col'>
                    <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Product name</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2'/>
                    </div>

                    <div className='w-full flex flex-row'>
                    <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Brand</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2'/>
                    </div>
                    <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>SKU</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2'/>
                    </div>
                    <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Vendor</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2'/>
                    </div>

                    </div>
                  

                </div>

                <div className='w-full min-h-64  p-2  flex flex-col flex-wrap'>
                    <label className='text text-gray-500 font-bold m-2'>Media</label>
                  <div className='flex flex-col w-full m-1 p-2 border-2 rounded-xl'>
                    <img src='' alt='image' className='w-36 h-36 object-contain'/>
                  </div>
                  <div className="relative m-2  w-fit">
  <input 
    type="file" 
    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    id="fileInput"
    multiple
    
  />
  <button 
    type="button" 
    onClick={() => document.getElementById('fileInput').click()}
    className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full hover:bg-blue-600"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="w-6 h-6"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M12 4.5v15m7.5-7.5h-15" 
      />
    </svg>
  </button>
</div>
 </div>
 <div className='w-full flex flex-row'>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Category</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2'>
                            <option disabled selected>select</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>


                        </select>
                        
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Style</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2'>
                            <option disabled selected>select</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>


                        </select>
                        
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Design</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2'>
                            <option disabled selected>select</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>


                        </select>
                        
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Collection</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2'>
                            <option disabled selected>select</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>


                        </select>
                        
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Material</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2'>
                            <option disabled selected>select</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>
                            <option>fafad</option>


                        </select>
                        
                    </div>
                

                    </div>

   
                    <div className='container mx-auto min-h-16 mt-2 p-1 flex flex-col'>
                    <label className='text text-gray-500 font-bold m-2'>Details</label>
                  <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                      <textarea className='w-full  min-h-24 pl-2 outline-none'/>
                  </div>
                  </div>
                  <div className='container mx-auto min-h-16 mt-2 p-1 flex flex-col'>
                    <label className='text text-gray-500 font-bold m-2'>Care</label>
                  <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                      <textarea className='w-full  min-h-24 pl-2 outline-none'/>
                  </div>
                  </div>
                  <div className='container mx-auto min-h-16 mt-2 p-1 flex flex-col'>
                    <label className='text text-gray-500 font-bold m-2'>Design story</label>
                  <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                      <textarea className='w-full  min-h-24 pl-2 outline-none'/>
                  </div>
                  </div>
                  <div className='container mx-auto min-h-16 mt-2 p-1 flex flex-col'>
                    <label className='text text-gray-500 font-bold m-2'>Shipping details</label>
                  <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                      <textarea className='w-full  min-h-24 pl-2 outline-none'/>
                  </div>
                  </div>

</div>
            <div className='col-span-3 h-screen rounded-xl'> 
            <div className='container mx-auto   flex flex-col'>
                    <div className='w-100 p-2 bg-white rounded-xl flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Tags</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2' id='inputtags' name = 'tags' onChange={(e)=> handletagsinput(e)}/>

                        <div className='flex flex-row flex-wrap w-full max-h-36 overflow-scroll no-scrollbar'>
         
         {

            productjson?.tags.map((item,index)=>(
                <div className='flex flex-row m-2 p-1 gap-2 w-100 bg-gray-200 justify-between items-center border-2 rounded-lg'>
            
                   <p>{item}</p>
                   <CircleX className='cursor-pointer ' onClick={()=> handleremoveitem('tags', item )} />

                </div>

            ))

         }

      

    </div>
                    </div>
                    </div>
                    <div className='container mx-auto mt-5  flex flex-col'>
                    <div className='w-100 p-2 bg-white rounded-xl flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Colors</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2'   id='inputcolors' name = 'colors' onChange={(e)=> handlecolorsinput(e)}/>
                        <div className='flex flex-row flex-wrap w-full max-h-36 overflow-scroll no-scrollbar'>
         
         {

            productjson?.colors.map((item,index)=>(
                <div className='flex flex-row m-2 p-1 gap-2 w-100 bg-gray-200 justify-between items-center border-2 rounded-lg'>
            
                   <p>{item}</p>
                   <CircleX className='cursor-pointer ' onClick={()=> handleremoveitem('colors', item )} />

                </div>

            ))

         }

      

    </div>
                    </div>
                    </div>
                    <div className='w-full flex  flex-row mt-5  bg-white rounded-xl'>
                    <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Size</label>
                        <select className='w-full  border-2 rounded-xl outline-none pl-2' value={currentsize} onChange={(e)=>setCurrentSize(e.target.value)}>
                            <option disabled selected>select</option>
                            <option>125cm/2feet</option>
                            <option>148cm/3feet</option>
                            <option>185cm/6feet</option>
                            <option>240cm/8feet</option>
                           

                            
                        </select>
                    </div>
                    <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Price</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2' id='currentpriceinput' onChange={(e)=>setCurrentPrice(e.target.value)}/>
                    </div>
                    <div className='w-100 p-2 flex flex-col justify-center items-center pt-8  gap-1'>
                        <button onClick={handlepriceinput}><CirclePlus/></button>
                    </div>

   
                  

                    </div>
                    {

productjson?.sizeprice.map((item,index)=>(
    <div className='flex flex-row m-2 p-1 gap-2 w-100 bg-gray-200 justify-between items-center border-2 rounded-lg'>

       <p>{item.size} / {item.price}</p>
       <CircleX className='cursor-pointer ' onClick={()=> handleremoveitemsize('sizeprice', item.size )} />

    </div>

))

}
                 

               </div>

        </div>

    </div>
  )
}

export default Rugsupload