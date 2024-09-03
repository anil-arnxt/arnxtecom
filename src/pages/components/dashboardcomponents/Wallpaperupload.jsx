import { ArrowUpFromLine, CircleCheckBig, CirclePlus, CircleX } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Wallpaperupload = () => {
    const [productjson, setProductJson] = useState({
        productname :'',
         brand: '',
        sku: '',

        rollwidth: '',
        rollheight: '',
        mrproll: '',
        mrpsqft: '',
        vendor: '',
        category: '',
        subcategory: '',
        
       
         tags: [],
         colorinput: [],
     
         details:'',
         care:'',
         additionalinfo: '',
         shippingdetails: '',
         productimages: [],
         designstyle: '',
         collection: '',

     

    })

    const [currentsize, setCurrentSize] = useState('select')
    const [currentpricemrp, setCurrentPriceMrp] = useState()
    const [currentpriceoffer, setCurrentPriceOffer] = useState()
    const [glbfile, setGlbFile] = useState()
    const [usdzfile, setUsdzFile] = useState()

    const [images, setImages] = useState([])

    const [currentcolor, setCurrentColor] = useState()
    const [currentpatternno, setCurrentPatternno] = useState()

    const [currentimagefile, setCurrentImageFile] = useState()


      const handlecurrentcolorimage = (e)=>{

        let val = document.getElementById("currentimageinput").value;
        let indx = val.lastIndexOf(".") + 1;
        let filetype = val.substr(indx, val.length).toLowerCase();
    
        if (filetype === "jpeg" || filetype  === 'jpg' || filetype === 'png' ) {
          let files = Array.from(e.target.files);
          files.forEach((file) => {
            fileToBase64(file, (err, result) => {
              if (result) {
                setCurrentImageFile(file) 
              
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
          
        toast.error('Please select a jpeg, jpg, png file')
      

        }


      }

      const roomtype = ["Bedroom", "Guest Room", "Home Office", "Home Theater", "Living Room", "Meeting Room", "Study Room"]
  
      const designstyle = [
        "3D Geometric",
        "Abstract, Young And Contemporary",
        "Animal",
        "Botanicals",
        "Brick",
        "Damask",
        "Floral",
        "Indian Heritage",
        "Kids",
        "Marble",
        "Nature",
        "Plain And Checkered",
        "Plain And Stripes",
        "Plain And Textured",
        "Stone Finish",
        "Wood Finish",
      ];

      const collection = [
        "Allure",
        "Altis",
        "Ap Finest",
        "Aurora",
        "Aventus",
        "Avenue 8",
        "Best Of Living Walls",
        "Bloom",
        "Blooming",
        "Brazil",
        "Celebration",
        "Darae 5",
        "Decortex",
        "Deshaj",
        "Divine",
        "Dune",
        "Fiori Country",
        "Floral Impression",
        "Glitz & Glam",
        "Harmony",
        "Hera 6",
        "House Of Turnowsky",
        "Little Love",
        "Metropolitan Stories",
        "Metropolitan Stories II Vol. I",
        "Metropolitan Stories II Vol. II",
        "Metropolitan Stories Travel Styles",
        "Modern & Glam",
        "Modern Bytes",
        "Modernist",
        "My Home My Space",
        "Mystic",
        "Nature's Ragas",
        "Novus",
        "Opulence",
        "Paradise",
        "Reflection",
        "Royal Shades",
        "Stone & Natural II",
        "Stories Of Life",
        "Superhit",
        "Tapestry",
        "The View",
        "Trendy Walls",
        "Versace V",
        "Wall Art",
        "Wall Fabric"
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

        const handleaddcolorinput = (value)=>{
            setProductJson((prevState) => {

                const updatedarray =  [...prevState['colorinput'], {
                     color: currentcolor,
                     patternno: currentpatternno,
                     image: currentimagefile
                }]; 
        
                return {
                    ...prevState,
                    ['colorinput']: updatedarray
                };
            });

            document.getElementById('currentcolor').value = ''
            document.getElementById('currentpatternno').value = ''

         
             document.getElementById('currentimageinput').value = ''
        }


  const handleremovecolorimage = (ind)=>{
         const filterarray = productjson.colorinput.filter((item, index)=>{
            return  index !== ind
         })  


        setProductJson({
            ...productjson,
            ['colorinput']: filterarray
        })
         
         

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
                    <label className='text-md text-gray-500 font-normal'>Vendor</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='vendor'  onChange={handleinputchange}/>
                </div>

                </div>
          
                <div className='w-full flex flex-row'>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-2 '>
                    <label className='text-md text-gray-500 font-normal'>Roll size</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='rollwidth' placeholder='width in mtr' onChange={handleinputchange} />
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='rollheight'  placeholder='height in mtr' onChange={handleinputchange} />

                </div>
      
               

                </div>
                <div className='w-full flex flex-row'>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>MRP/Roll</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='mrproll'  onChange={handleinputchange} />
                </div>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>MRP/sq.ft</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='mrpsqft'  onChange={handleinputchange}/>
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
                    <label className='text-md text-gray-500 font-normal'>Design Styles</label>
                    <select className='w-full  border-2 rounded-xl outline-none p-2' name='designstyle' onChange={handleinputchange} >
                        <option disabled selected>select</option>
                        {
                        designstyle.map(item=>(

                                <option>{item}</option>
                            ))
                        }
                    


                    </select>
                    
                </div>
                <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Collection</label>
                    <select className='w-full  border-2 rounded-xl outline-none p-2' name='collection' onChange={handleinputchange} >
                        <option disabled selected>select</option>
                        {
                        collection.map(item=>(

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

                <div className='w-full flex  flex-row mt-5  bg-white rounded-xl'>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>color</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2' id='currentcolor'  onChange={(e)=>setCurrentColor(e.target.value)} />
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Pattern no</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2' id='currentpatternno'  onChange={(e)=>setCurrentPatternno(e.target.value)} />
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Select image</label>
                        <input className='w-full   outline-none pl-2' type='file' id='currentimageinput'  onChange={handlecurrentcolorimage} />
                    </div>
                    <div className='w-100 p-2 flex flex-col justify-center items-center pt-8  gap-1'>
                        <button onClick={()=> handleaddcolorinput('colorinput')} ><CirclePlus/></button>
                    </div>

          

                    </div>
                    <div className='flex flex-row w-full min-h-48 gap-1 overflow-scroll no-scrollbar m-1 p-2 border-2 rounded-xl'>
                {
                     productjson.colorinput?.map((file,index)=>(

                        <div  className='flex flex-col justify-center items-center'>

                            <div className='relative flex flex-row'>
                           
                           <img src= {URL.createObjectURL(file.image)} alt='image' className='w-36 h-36 object-contain'/>
                           <CircleX className='absolute top-0 right-0 mr-5 cursor-pointer ' onClick={()=>handleremovecolorimage(index)}  />
                              </div>

                              <p>{file.color}</p>
                              <p>{file.patternno}</p>
                            </div>

                   

                     

                     ))

                }
              </div>
          
        
             

           </div>

    </div>

</div>
  )
}

export default Wallpaperupload
