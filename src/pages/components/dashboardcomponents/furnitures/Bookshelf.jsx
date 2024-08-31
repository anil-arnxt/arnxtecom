import { ArrowUpFromLine, CircleCheckBig, CirclePlus, CircleX } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Bookshelf = () => {
    const [productjson, setProductJson] = useState({
        productname :'',
         brand: '',
        sku: '',
        vendor: '',
        category: '',
        subcategory: '',
         mrp: '',
         offerprice: '',
         tags: [],
         colors: [],
         productlength: '',
         productwidth: '',
         productheight: '',
         dimensionunit: '',
         weight: '',
         weightunit: '',
         details:'',
         care:'',
         additionalinfo: '',
         shippingdetails: '',
         productimages: [],
         glbfile: '',
         usdzfile: '',
         material: '',
        shapes: '',
        styles:'',
       
        finishes: '',
          roomtype: '',
     

    })

    const [currentsize, setCurrentSize] = useState('select')
    const [currentpricemrp, setCurrentPriceMrp] = useState()
    const [currentpriceoffer, setCurrentPriceOffer] = useState()
    const [glbfile, setGlbFile] = useState()
    const [usdzfile, setUsdzFile] = useState()

    const [images, setImages] = useState([])

   

    
      const roomtype = ["Bedroom", "Guest Room", "Home Office", "Home Theater", "Living Room", "Meeting Room", "Study Room"]
  
      const material = [
        'Bamboo',
        'Engineered Wood',
        'Fabric',
        'MDF',
        'Metal',
        'Particle Board',
        'Plastic',
        'Plywood',
        'PVC',
        'Solid Wood'
      ];
      const styles = [
        'Art Deco',
        'Asian',
        'Baroque',
        'Contemporary',
        'Minimalist',
        'Modern',
        'Rustic',
        'Traditional'
      ];
      const shapes = [
        'A-Shape',
        'Conical',
        'Cubical',
        'Flower',
        'Hexagonal',
        'L-Shape',
        'Oval',
        'Rectangular',
        'Round',
        'S-Shape',
        'Semicircular',
        'Square',
        'Trapezium',
        'Tree',
        'Triangular',
        'X-Shape'
      ]
      const finishes = [
        'Brushed',
        'Lacquered',
        'Laminated',
        'Painted',
        'Polished',
        'Powder Coated',
        'Unfinished',
        'Varnished',
        'Waxed'
      ];
    
     

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
                 mrp: currentpricemrp,
                 offerprice: currentpriceoffer,
                 size: currentsize
            }]; 
    
            return {
                ...prevState,
                ['sizeprice']: updatedprice
            };
        });
          setCurrentSize('select')
        document.getElementById('currentpriceinputmrp').value = '';
        document.getElementById('currentpriceinputoffer').value = '';

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

const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };


const handleimageselect = (e)=>{
    let val = document.getElementById("imageinput").value;
    let indx = val.lastIndexOf(".") + 1;
    let filetype = val.substr(indx, val.length).toLowerCase();

    if (filetype === "jpg" || filetype === "png" || filetype === "jpeg") {
      let files = Array.from(e.target.files);
      files.forEach((file) => {
        fileToBase64(file, (err, result) => {
          if (result) {
           
          }
        });

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setImages((oldArray) => [...oldArray, file]);
           
          }
        };

        reader.readAsDataURL(file);
      });
    } else {
      
      toast.error('File supported are jpeg,jpg,png')
    }   
}

const handleremoveimage = (ind)=>{
         
    const newarr = images.filter((item,index)=>{
        return   index !== ind
    })

    setImages(newarr)

}

const handleinputchange = (e)=>{
    setProductJson({
        ...productjson,
        [e.target.name] : e.target.value
    })
    

}

const handleglbfile = (e)=>{
    let val = document.getElementById("glbinput").value;
            let indx = val.lastIndexOf(".") + 1;
            let filetype = val.substr(indx, val.length).toLowerCase();
        
            if (filetype === "glb" ) {
              let files = Array.from(e.target.files);
              files.forEach((file) => {
                fileToBase64(file, (err, result) => {
                  if (result) {
                    setGlbFile(file) 
                    document.getElementById('glbfiletick').style.display = 'block'
                  }
                });
        
                const reader = new FileReader();
        
                reader.onload = () => {
                  if (reader.readyState === 2) {
              
                   
                  }
                };
        
                reader.readAsDataURL(file);
              });
            } else {
              
            toast.error('Please select a glb file')
            document.getElementById('glbfiletick').style.display = 'none'

            }

}

const handleusdzfile = (e)=>{
    let val = document.getElementById("usdzinput").value;
            let indx = val.lastIndexOf(".") + 1;
            let filetype = val.substr(indx, val.length).toLowerCase();
        
            if (filetype === "usdz" ) {
              let files = Array.from(e.target.files);
              files.forEach((file) => {
                fileToBase64(file, (err, result) => {
                  if (result) {
                    setUsdzFile(file) 
                    document.getElementById('usdzfiletick').style.display = 'block'
                  }
                });
        
                const reader = new FileReader();
        
                reader.onload = () => {
                  if (reader.readyState === 2) {
              
                   
                  }
                };
        
                reader.readAsDataURL(file);
              });
            } else {
              
            toast.error('Please select a usdz file')
            document.getElementById('usdzfiletick').style.display = 'none'

            }

}
  return (
    <div>
    <Toaster/>
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
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='productname'  onChange={handleinputchange}/>
                </div>

                <div className='w-full flex flex-row'>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Brand</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='brand'  onChange={handleinputchange} />
                </div>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>SKU</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='sku'  onChange={handleinputchange}/>
                </div>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Vendor</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='vendor'  onChange={handleinputchange}/>
                </div>

                </div>
                <div className='w-full flex flex-row'>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>MRP</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='mrp'  onChange={handleinputchange} />
                </div>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Offer price</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='offerprice'  onChange={handleinputchange}/>
                </div>
               

                </div>
                <div className='w-full flex flex-row'>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Length</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='productlength'  onChange={handleinputchange} />
                </div>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Width</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='productwidth'  onChange={handleinputchange}/>
                </div>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Height</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='productheight'  onChange={handleinputchange}/>
                </div>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Unit</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='dimensionunit'  onChange={handleinputchange}/>
                </div>
               

                </div>
                <div className='w-full flex flex-row'>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Weight</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='weight'  onChange={handleinputchange} />
                </div>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Unit</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='weightunit'  onChange={handleinputchange}/>
                </div>
             
               

                </div>
              

            </div>

            <div className='w-full min-h-64  p-2  flex flex-col flex-wrap'>
                <label className='text text-gray-500 font-bold m-2'>Media</label>
              <div className='flex flex-row w-full min-h-48 gap-1 overflow-scroll no-scrollbar m-1 p-2 border-2 rounded-xl'>
                {
                     images?.map((img,index)=>(

                        <div className='relative flex flex-row'>

                         <img src= {URL.createObjectURL(img)} alt='image' className='w-36 h-36 object-contain'/>
                         <CircleX className='absolute top-0 right-0 mr-5 cursor-pointer ' onClick={()=>handleremoveimage(index)}  />
                            </div>

                     

                     ))

                }
              </div>
              <div className="relative m-2  w-fit">
<input 
type="file" 
className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
id="imageinput"
multiple
accept='images/*'
onChange={handleimageselect}

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

<div className='flex flex-row w-full justify-start items-start gap-2 ml-2 mt-2 mb-3'>



<div className='flex flex-col w-fit justify-center items-center gap-2 border-2 rounded-xl'>
<input 
type="file" 
className="absolute inset-0 w-fit h-fit opacity-0 cursor-pointer border-2"
id="glbinput"
onChange={handleglbfile}

/>
<button className='p-2 flex flex-row  '  onClick={() => document.getElementById('glbinput').click()}><ArrowUpFromLine/>Upload glb</button>
</div>
<div id= 'glbfiletick' className='hidden ml-1 flex justify-center items-center mt-2'>
<CircleCheckBig color='green'/>
</div>

<div className='flex flex-col w-fit justify-center items-center gap-2 border-2 rounded-xl'>
<input 
type="file" 
className="absolute inset-0 w-fit h-fit opacity-0 cursor-pointer border-2"
id="usdzinput"
onChange={handleusdzfile}

/>
<button className='p-2 flex flex-row  '  onClick={() => document.getElementById('usdzinput').click()}><ArrowUpFromLine/>Upload usdz</button>

</div>
<div id= 'usdzfiletick' className='hidden ml-1 flex justify-center items-center mt-2'>
<CircleCheckBig color='green' />
</div>


</div>
<div className='w-full flex flex-row'>
                <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Material</label>
                    <select className='w-full  border-2 rounded-xl outline-none p-2' name='material' onChange={handleinputchange} >
                        <option disabled selected>select</option>
                        {
                        material.map(item=>(

                                <option>{item}</option>
                            ))
                        }
                    


                    </select>
                    
                </div>
                <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>shapes</label>
                    <select className='w-full  border-2 rounded-xl outline-none p-2' name = 'shapes' onChange={handleinputchange}>
                        <option disabled selected>select</option>

                        {
                            shapes.map(item=>(
                              <option>{item}</option>
                            ))
                        }
                   


                    </select>
                    
                </div>
                <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Styles</label>
                    <select className='w-full  border-2 rounded-xl outline-none p-2' name='styles' onChange={handleinputchange}>
                        <option disabled selected>select</option>
                        {
                            styles.map(item=>(

                                <option>{item}</option>
                            ))
                        }
                    


                    </select>
                    
                </div>
                <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Finishes</label>
                    <select className='w-full  border-2 rounded-xl outline-none p-2' name='finishes' onChange={handleinputchange}>
                        <option disabled selected>select</option>
                        {
                            finishes.map(item=>(

                                <option>{item}</option>
                            ))
                        }
                    


                    </select>
                    
                </div>
                <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Room type</label>
                    <select className='w-full  border-2 rounded-xl outline-none p-2' name='roomtype' onChange={handleinputchange}>
                        <option disabled selected>select</option>
                        {
                            roomtype.map(item=>(

                                <option>{item}</option>
                            ))
                        }
                    


                    </select>
                    
                </div>
           
                </div>


                <div className='container mx-auto min-h-16 mt-2 p-1 flex flex-col'>
                <label className='text text-gray-500 font-bold m-2'>Details</label>
              <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                  <textarea className='w-full  min-h-24 pl-2 outline-none' name='details' onChange={handleinputchange} />
              </div>
              </div>
              <div className='container mx-auto min-h-16 mt-2 p-1 flex flex-col'>
                <label className='text text-gray-500 font-bold m-2'>Care</label>
              <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                  <textarea className='w-full  min-h-24 pl-2 outline-none' name='care' onChange={handleinputchange}/>
              </div>
              </div>
              <div className='container mx-auto min-h-16 mt-2 p-1 flex flex-col'>
                <label className='text text-gray-500 font-bold m-2'>Additional Info</label>
              <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                  <textarea className='w-full  min-h-24 pl-2 outline-none' name='additionalinfo' onChange={handleinputchange}/>
              </div>
              </div>
              <div className='container mx-auto min-h-16 mt-2 p-1 flex flex-col'>
                <label className='text text-gray-500 font-bold m-2'>Shipping details</label>
              <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                  <textarea className='w-full  min-h-24 pl-2 outline-none' name='shippingdetails' onChange={handleinputchange}/>
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
          
        
             

           </div>

    </div>

</div>
  )
}

export default Bookshelf
