import axios from 'axios'
import { ArrowUpFromLine, CircleCheckBig, CirclePlus, CircleX } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Rugsupload = () => {

  const imagesuploadurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/arnxtecomimageupload'

    const uploadproducturl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/addproductarnxtecom'

    const [productjson, setProductJson] = useState({
        productname :'',
         brand: '',
        sku: '',
        vendor: '',
        category: 'Furnishing',
        subcategory: 'Rugs',
         productcategory  :  '',
         tags: [],
         colors: [],
         sizeprice: [],
         details:'',
         care:'',
         designstory:'',
         shippingdetails: '',
         productimages: [],
         glbfile: '',
         usdzfile: '',
         material: '',
         design: '',
         collection: '',
         style: ''

    })

    const [currentsize, setCurrentSize] = useState('select')
    const [currentpricemrp, setCurrentPriceMrp] = useState()
    const [currentpriceoffer, setCurrentPriceOffer] = useState()
    const [glbfile, setGlbFile] = useState()
    const [usdzfile, setUsdzFile] = useState()

    const [images, setImages] = useState([])

    const style= ['Modern', 'Transitional', 'Traditional']
    const categoryproduct = [
        "Oushak",
        "Mid Century Modern",
        "Persian",
        "Hype Master",
        "Trending, Loved & Liked",
        "Geometrical",
        "Abstract",
        "Solid",
        "Flatweave Modern",
        "Flatweave Traditional",
        "Naturals",
        "Kids",
        "Shaggy",
        "Braids & Pebbles",
        "Contemporary",
        "Minimalist - Hand Carved",
        "Minimalist",
        "Shaped",
        "Floral",
        "Ultra Luxury"
      ];
      const collection = [
        "Acar",
        "Aurora",
        "Clan",
        "Cyanna",
        "Far East",
        "Kasbah",
        "Savana",
        "Vintage"
      ];
      const designs = [
        "Abstract",
        "Oriental and Traditional",
        "Moroccan and Tribal",
        "Vintage and Distressed",
        "Floral and Tropical",
        "Geometric and Stripes",
        "Graphic and Art Deco",
        "Solid",
        "Patchwork"
      ];
     const  material = ["Wool", "Wool & Bamboo Silk", "Wool & Silk", "Silk", "Viscose", "Jute & Hemp", "Cotton", "Others"]

     const sizearray = [

      "2X3 ft / 60X90",
      "3X5 ft / 90X150",
      "4X6 ft / 120X180",
      "5X8 ft / 150X240",
      "6X9 ft / 180X270",
      "8X10 ft / 240X300",
      "9X12 ft / 270X360",
      "10X14 ft / 300X420",
      "12X15 ft / 360X450",
      "Oversize"
     ]

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


const uploadImages = async  ()=>{
  const temparray = []

  for(let i=0; i<images.length; i++){

  const url =  imagesuploadurl;


  await fetch(url, {
    method: "POST",
    body: images[i].name,
  })
    .then((res) => res.json())
    .then((res) => {
      fetch(res.uploadURL, {
        method: "PUT",
        headers: {
          ContentType: "image/jpeg",
        },

        body: images[i],
      })
        .then((res) => {
          if (res.status === 200) {
            let resnew = res.url.split("?");
            let imgurl = resnew[0];

             temparray.push(imgurl)  

          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  }
return temparray


}

const uploadglbfile = async ()=>{

  try {
    const url = imagesuploadurl;

    const res = await fetch(url, {
        method: "POST",
        body: glbfile.name,
    });
    const data = await res.json();

 
    const uploadRes = await fetch(data.uploadURL, {
        method: "PUT",
        headers: {
            ContentType: "image/jpeg",
        },
        body: glbfile,
    });

    if (uploadRes.status === 200) {
        const resnew = uploadRes.url.split("?");
        const imgurl = resnew[0];
        return imgurl; 
    } else {
        throw new Error('Image upload failed');
    }
} catch (error) {
    console.error("An error occurred:", error);
    return undefined; 
}

}

const uploadusdzfile = async ()=>{
  try {
    const url = imagesuploadurl;

    const res = await fetch(url, {
        method: "POST",
        body: usdzfile.name,
    });
    const data = await res.json();

 
    const uploadRes = await fetch(data.uploadURL, {
        method: "PUT",
        headers: {
            ContentType: "image/jpeg",
        },
        body: usdzfile,
    });

    if (uploadRes.status === 200) {
        const resnew = uploadRes.url.split("?");
        const imgurl = resnew[0];
        return imgurl; 
    } else {
        throw new Error('Image upload failed');
    }
} catch (error) {
    console.error("An error occurred:", error);
    return undefined; 
}

}

const handlesaveproduct = async ()=>{
    
  try {
    const [imagesurl, glburl, usdzurl] =    await Promise.all([
          uploadImages(),

          uploadglbfile(),
          uploadusdzfile()
         
       ])

      

  
    const body = {
       Id: new Date().getTime().toString(),
       productname : productjson.productname.toLowerCase(),
       brandname: productjson.brand.toLowerCase(),
       sku: productjson.sku,
       vendor: productjson.vendor,
       category:  productjson.category,
       subcategory: productjson.subcategory,
        tags: productjson.tags,
         sizeprice: productjson.sizeprice,
        colors: productjson.colors,
        productcategory: productjson.productcategory,
        details: productjson.details,
        designstory: productjson.designstory,
        shippingdetails: productjson.shippingdetails,
        material: productjson.material,
        collection: productjson.collection,
        design: productjson.design,
        style: productjson.style,
        care: productjson.care,
        images : imagesurl,
      
        glbfile: glburl,
        usdzfile: usdzurl
    }  


  
    
    const response = await axios.post(uploadproducturl, body);
      if(response.status === 200){
        toast.success('Product added!')
         window.location.reload()

      }
      

   } catch (error) {
       console.error("An error occurred during the uploads:", error);
   }
}



  return (
    <div>
        <Toaster/>
         <div className='w-full  h-12 border-2 rounded-xl bg-gray-200 top-0 sticky'>

              <div className='w-full h-full  flex flex-row justify-end items-center ' >
                <button className='border-2 rounded-xl px-2 bg-gray-400 mr-5 '  onClick={()=>handlesaveproduct()}>Save</button>

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
                        <label className='text-md text-gray-500 font-normal'>Category</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2' name='productcategory' onChange={handleinputchange} >
                            <option disabled selected>select</option>
                            {
                                categoryproduct.map(item=>(

                                    <option>{item}</option>
                                ))
                            }
                        


                        </select>
                        
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Style</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2' name = 'style' onChange={handleinputchange}>
                            <option disabled selected>select</option>

                            {
                                style.map(item=>(
                                  <option>{item}</option>
                                ))
                            }
                       


                        </select>
                        
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Design</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2' name='design' onChange={handleinputchange}>
                            <option disabled selected>select</option>
                            {
                                designs.map(item=>(

                                    <option>{item}</option>
                                ))
                            }
                        


                        </select>
                        
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Collection</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2' name='collection' onChange={handleinputchange}>
                            <option disabled selected>select</option>
                            {
                                collection.map(item=>(

                                    <option>{item}</option>
                                ))
                            }
                        


                        </select>
                        
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Material</label>
                        <select className='w-full  border-2 rounded-xl outline-none p-2' name='material' onChange={handleinputchange}>
                            <option disabled selected>select</option>
                            {
                                material.map(item=>(

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
                    <label className='text text-gray-500 font-bold m-2'>Design story</label>
                  <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                      <textarea className='w-full  min-h-24 pl-2 outline-none' name='designstory' onChange={handleinputchange}/>
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
                    <div className='w-full flex  flex-row mt-5  bg-white rounded-xl'>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Size</label>
                        <select className='w-full  border-2 rounded-xl outline-none pl-2' value={currentsize} onChange={(e)=>setCurrentSize(e.target.value)}>
                            <option disabled selected>select</option>
                            {
                              sizearray.map(item=>(
                              <option>{item}</option>
                              ))

                            }
                            
                          
                           

                            
                        </select>
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>MRP</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2' id='currentpriceinputmrp' onChange={(e)=>setCurrentPriceMrp(e.target.value)}/>
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'>Offer price</label>
                        <input className='w-full  border-2 rounded-xl outline-none pl-2' id='currentpriceinputoffer' onChange={(e)=>setCurrentPriceOffer(e.target.value)}/>
                    </div>
                    <div className='w-100 p-2 flex flex-col justify-center items-center pt-8  gap-1'>
                        <button onClick={handlepriceinput}><CirclePlus/></button>
                    </div>

                    </div>
                    {

productjson?.sizeprice.map((item,index)=>(
    <div className='flex flex-row m-2 p-1 gap-2 w-100 bg-gray-200 justify-between items-center border-2 rounded-lg'>

       <p>{item.size} / {item.offerprice}</p>
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