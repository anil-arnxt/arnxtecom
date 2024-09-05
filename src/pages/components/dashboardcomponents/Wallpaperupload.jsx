import axios from 'axios'
import { ArrowUpFromLine, CircleCheckBig, CirclePlus, CircleX, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const imagesuploadurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/arnxtecomimageupload'

const uploadproducturl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/addproductarnxtecom'

const Wallpaperupload = () => {
    const [productjson, setProductJson] = useState({
        productname :'',
         brand: '',
        sku: '',

        rollwidth: '',
        rollheight: '',
        offerprice: '',
        offerpricesqft: '',
        vendor: '',
        category: 'Furnishing',
        subcategory: 'Wallpapers',
        
         designname: '',
         designdetails: '',
         tags: [],
         colorinput: [],
          itemdetails: [],
         productdetails: '',
         designstyle: '',
         collection: '',
         colors: []
     

    })

    const [currentsize, setCurrentSize] = useState('select')
    const [currentpricemrp, setCurrentPriceMrp] = useState()
    const [currentpriceoffer, setCurrentPriceOffer] = useState()
    const [glbfile, setGlbFile] = useState()
    const [usdzfile, setUsdzFile] = useState()

    const [images, setImages] = useState([])
    const [secondimages, setSecondImages] = useState([])

    const [currentcolor, setCurrentColor] = useState()
    const [currentpatternno, setCurrentPatternno] = useState()

    const [currentimagefile, setCurrentImageFile] = useState()
    const [currentimagefileroom, setCurrentImageFileRoom] = useState()


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

      const handlecurrentcolorimageroom = (e)=>{

        let val = document.getElementById("currentimageinput").value;
        let indx = val.lastIndexOf(".") + 1;
        let filetype = val.substr(indx, val.length).toLowerCase();
    
        if (filetype === "jpeg" || filetype  === 'jpg' || filetype === 'png' ) {
          let files = Array.from(e.target.files);
          files.forEach((file) => {
            fileToBase64(file, (err, result) => {
              if (result) {
                setCurrentImageFileRoom(file) 
              
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

const handleinputitemdetails = (e)=>{
              

  let newval;
  let finalval
  
  if(e.target.value.includes('/')){

      newval= Array.from(e.target.value)
      newval.pop()
   finalval=  newval.join('')

      setProductJson((prevState) => {

          const updateditems = prevState[e.target.name].includes(finalval) 
              ? prevState[e.target.name] 
              : [...prevState[e.target.name], finalval.toLowerCase()]; 
  
          return {
              ...prevState,
              [e.target.name]: updateditems
          };
      });

      document.getElementById('inputitemdetails').value = '';

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


const handleimageselectsecond = (e)=>{
  let val = document.getElementById("imageinputsecond").value;
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
          setSecondImages((oldArray) => [...oldArray, file]);
         
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


const handleremoveimagesecond = (ind)=>{
         
  const newarr = images.filter((item,index)=>{
      return   index !== ind
  })

  setSecondImages(newarr)

}

const handleinputchange = (e)=>{
    setProductJson({
        ...productjson,
        [e.target.name] : e.target.value
    })
    

}





        const handleaddcolorinput = (value)=>{

          setProductJson((prevState) => {

            const updateditems = prevState['colors'].includes(currentcolor) 
                ? prevState['colors'] 
                : [...prevState['colors'], currentcolor.toLowerCase()]; 
    
            return {
                ...prevState,
                ['colors']: updateditems
            };
        });

            setProductJson((prevState) => {

                const updatedarray =  [...prevState['colorinput'], {
                     color: currentcolor,
                     patternno: currentpatternno,
                     image: currentimagefile,
                     image2: currentimagefileroom
                }]; 
        
                return {
                    ...prevState,
                    ['colorinput']: updatedarray
                };
            });

            document.getElementById('currentcolor').value = ''
            document.getElementById('currentpatternno').value = ''

         
             document.getElementById('currentimageinput').value = ''
             document.getElementById('currentimageinputroom').value = ''

        }

        console.log(productjson)


  const handleremovecolorimage = (ind)=>{
         const filterarray = productjson.colorinput.filter((item, index)=>{
            return  index !== ind
         })  


        setProductJson({
            ...productjson,
            ['colorinput']: filterarray
        })
         
         

  }

  

  const uploadColorImages = async  ()=>{
    const updatedColorInput = [...productjson.colorinput];
  
    for(let i=0; i<productjson.colorinput.length; i++){
  
      const url = imagesuploadurl; 

      try {
      
        const response1 = await fetch(url, {
          method: "POST",
          body: productjson.colorinput[i].image.name, 
        });
        const resData1 = await response1.json();
  
      
        const uploadResponse1 = await fetch(resData1.uploadURL, {
          method: "PUT",
          headers: {
            'Content-Type': 'image/jpeg',
          },
          body: productjson.colorinput[i].image,
        });
  
        if (uploadResponse1.status === 200) {
          let resnew = uploadResponse1.url.split("?");
          let imgurl1 = resnew[0]; 
  
       
          updatedColorInput[i] = {
            ...updatedColorInput[i],
            image: imgurl1, 
          };
        }
  
     
        const response2 = await fetch(url, {
          method: "POST",
          body: productjson.colorinput[i].image2.name, 
        });
        const resData2 = await response2.json();
  
     
        const uploadResponse2 = await fetch(resData2.uploadURL, {
          method: "PUT",
          headers: {
            'Content-Type': 'image/jpeg',
          },
          body: productjson.colorinput[i].image2,
        });
  
        if (uploadResponse2.status === 200) {
          let resnew2 = uploadResponse2.url.split("?");
          let imgurl2 = resnew2[0]; 
  
        
          updatedColorInput[i] = {
            ...updatedColorInput[i],
            image2: imgurl2,
          };
        }
      } catch (err) {
        console.error("Error uploading images:", err); 
      }
    }
  
  

    return updatedColorInput

  
  }

  const uploadImageone = async  ()=>{
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
  const uploadImageTwo = async  ()=>{
    const temparray = []
  
    for(let i=0; i<secondimages.length; i++){
  
    const url =  imagesuploadurl;
  
  
    await fetch(url, {
      method: "POST",
      body: secondimages[i].name,
    })
      .then((res) => res.json())
      .then((res) => {
        fetch(res.uploadURL, {
          method: "PUT",
          headers: {
            ContentType: "image/jpeg",
          },
  
          body: secondimages[i],
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

 

  
const handlesaveproduct = async ()=>{
    
  try {
      const [colorinputimage, imageurlone, imageurltwo]   = await Promise.all([
          uploadColorImages(),
          uploadImageone(),
          uploadImageTwo()
      

          ])




    const body = {
       Id: new Date().getTime().toString(),
       productname : productjson.productname.toLowerCase(),
       brandname: productjson.brand.toLowerCase(),
       sku: productjson.sku,
       vendor: productjson.vendor,
       category:  'Furnishing',
       subcategory: 'Wallpapers',
       rollwidth: productjson.rollwidth,
       rollheight: productjson.rollheight,

        tags: productjson.tags,
        offerprice: productjson.offerprice,
        offerpricesqft: productjson.offerpricesqft,
        colors: productjson.colors,
      
      productdetails: productjson.productdetails,
        designname: productjson.designname,
        designdetails: productjson.designdetails,
        itemdetails: productjson.itemdetails,
        designstyle: productjson.designstyle,
        collection: productjson.collection,
     
        imageone: imageurlone[0],
        imagetwo: imageurltwo[0],
      colorinput: colorinputimage,
      
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
            <button className='border-2 rounded-xl px-2 bg-gray-400 mr-5 ' onClick={handlesaveproduct}>Save</button>

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
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='offerprice'  onChange={handleinputchange} />
                </div>
                <div className='w-100 p-2 flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>MRP/sq.ft</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' name='offerpricesqft'  onChange={handleinputchange}/>
                </div>
               

                </div>
           
              

            </div>

            <div className='w-full min-h-64  p-2  flex flex-col flex-wrap'>
                <label className='text text-gray-500 font-bold m-2'>Upload Image 1</label>
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

accept='images/*'
onChange={handleimageselect}

/>
<button 
type="button" 
onClick={() => document.getElementById('imageinput').click()}
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

<div className='w-full min-h-64  p-2  flex flex-col flex-wrap'>
                <label className='text text-gray-500 font-bold m-2'>Upload Image 2</label>
              <div className='flex flex-row w-full min-h-48 gap-1 overflow-scroll no-scrollbar m-1 p-2 border-2 rounded-xl'>
                {
                     secondimages?.map((img,index)=>(

                        <div className='relative flex flex-row'>

                         <img src= {URL.createObjectURL(img)} alt='image' className='w-36 h-36 object-contain'/>
                         <CircleX className='absolute top-0 right-0 mr-5 cursor-pointer ' onClick={()=>handleremoveimagesecond(index)}  />
                            </div>

                     

                     ))

                }
              </div>
              <div className="relative m-2  w-fit">
<input 
type="file" 
className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
id="imageinputsecond"

accept='images/*'
onChange={handleimageselectsecond}

/>
<button 
type="button" 
onClick={() => document.getElementById('imageinputsecond').click()}
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
                <label className='text text-gray-500 font-bold m-2'>Product details</label>
              <div className='flex flex-col w-full min-h-24 border-2 p-2 rounded-lg'>
                  <textarea className='w-full  min-h-24 pl-2 outline-none' name='productdetails' onChange={handleinputchange} />
              </div>
              </div>
              <div className='container mx-auto min-h-16 mt-2 p-1 flex flex-col'>
                <label className='text text-gray-500 font-bold m-2'>Product Information</label>
              <div className='flex flex-col w-full  border-2 p-2 rounded-lg'>
                   <div className='flex flex-col gap-2'>
                       <input placeholder='Design name' className='w-full pl-2 outline-none border-2 rounded-xl' name='designname' onChange={handleinputchange} />
                       <textarea placeholder='Design details' className='w-full  min-h-24 pl-2 outline-none border-2 rounded-xl' name='designdetails' onChange={handleinputchange} />
                   </div>
                 
              </div>

              <div className='container mx-auto   flex flex-col'>
                <div className='w-100 p-2 bg-white rounded-xl flex flex-col justify-start items-start  gap-1 '>
                    <label className='text-md text-gray-500 font-normal'>Item details</label>
                    <input className='w-full  border-2 rounded-xl outline-none pl-2' id='inputitemdetails' name = 'itemdetails' onChange={(e)=> handleinputitemdetails(e)}/>

                    <div className='flex flex-row flex-wrap w-full max-h-36 overflow-scroll no-scrollbar'>
     
     {

        productjson?.itemdetails.map((item,index)=>(
            <div className='flex flex-row m-2 p-1 gap-2 w-100 bg-gray-200 justify-between items-center border-2 rounded-lg'>
        
               <p>{item}</p>
               <CircleX className='cursor-pointer ' onClick={()=> handleremoveitem('itemdetails', item )} />

            </div>

        ))

     }

  

</div>
                </div>
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
                        <label className='text-md text-gray-500 font-normal'>Color image</label>
                        <PlusSquare onClick={()=>document.getElementById('currentimageinput').click()}/>
                        <input className='w-full opacity-0  outline-none pl-2' type='file' id='currentimageinput'  onChange={handlecurrentcolorimage} />
                    </div>
                    <div className='w-full p-2 flex flex-col justify-start items-start  gap-1 '>
                        <label className='text-md text-gray-500 font-normal'> Room image</label>
                        <PlusSquare onClick={()=>document.getElementById('currentimageinputroom').click()}/>
                        <input className='w-full opacity-0  outline-none pl-2' type='file' id='currentimageinputroom'  onChange={handlecurrentcolorimageroom} />
                    </div>
                    <div className='w-100 p-2 flex flex-col justify-center items-center pt-8  gap-1'>
                        <button onClick={()=> handleaddcolorinput('colorinput')} ><CirclePlus/></button>
                    </div>

          

                    </div>
                    <div className='flex flex-row w-full min-h-48 gap-2 overflow-scroll no-scrollbar m-1 p-2 border-2 rounded-xl'>
                {
                     productjson.colorinput?.map((file,index)=>(

                        <div  className='flex flex-col justify-center items-center border-2'>

                            <div className='relative flex flex-row'>
                           
                           <img src= {URL.createObjectURL(file.image)} alt='image' className='w-36 h-36 object-contain'/>
                           <img src= {URL.createObjectURL(file.image2)} alt='image' className='w-36 h-36 object-contain'/>

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
