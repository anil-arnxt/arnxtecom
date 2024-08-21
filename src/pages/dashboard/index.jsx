import axios from 'axios'
import { CircleX, Cross, ImageMinus } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const index = () => {

    const imagesuploadurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/arnxtecomimageupload'

    const uploadproducturl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/addproductarnxtecom'

    const [subcategorydata, setSubcategoryData] = useState()


    const [imagesmain, setImagesmain] = useState()
    const [imagesrest, setImagesRest] = useState([])
    const [glbfile, setGlbFile] = useState()
    const [usdzfile, setUsdzFile] = useState()

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

        const catdata = {
           'Furniture' : ['Bed', 'Sofa' , 'Chair', 'Wardrobe',],
           'Electricals' : ['Fan', 'Chandelier'],
           'Electronics' : ['TV', 'Washing machine', 'Refrigerator'],
            'Furnishing' : ['Rugs' , 'Carpets'],
            'Walls' : ['Wallpaper', 'Wallmurals']
             
        }

        const handleproductdetails = (e)=>{
           
            setProductJson({
                ...productjson,
                [e.target.name] : e.target.value
            })

        }

        const handleDropdownChange = (name ,value)=>{
            setProductJson({
                ...productjson,
                [name] : value
            }) 
        }

        const handleDropdownChangeMultiple = (name, value) =>{

            setProductJson((prevState) => {
              
                const updatedTags = prevState[name].includes(value) 
                    ? prevState[name] 
                    : [...prevState[name], value]; 
        
                return {
                    ...prevState,
                    [name]: updatedTags
                };
            });
        }

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

        const handlecolorinput = (e)=>{
              

            let newval;
            let finalval
            
            if(e.target.value.includes(',')){

                newval= Array.from(e.target.value)
                newval.pop()
             finalval=  newval.join('')

                setProductJson((prevState) => {

                    const updatedColors = prevState[e.target.name].includes(finalval) 
                        ? prevState[e.target.name] 
                        : [...prevState[e.target.name], finalval]; 
            
                    return {
                        ...prevState,
                        [e.target.name]: updatedColors
                    };
                });

                document.getElementById('inputcolor').value = '';

            }
       
              
        }

           useEffect(()=>{

              setSubcategoryData(catdata[productjson.category])  

           },[productjson.category])


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

        const handlefileimagemain = (e) =>{

            let val = document.getElementById("mainimage").value;
            let indx = val.lastIndexOf(".") + 1;
            let filetype = val.substr(indx, val.length).toLowerCase();
        
            if (filetype === "jpg" || filetype === "png" || filetype === "jpeg") {
              let files = Array.from(e.target.files);
              files.forEach((file) => {
                fileToBase64(file, (err, result) => {
                  if (result) {
                    setImagesmain(file)
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
              
           window.alert('file format not supported')
            }

        

        }

        const handlefileimagerest = (e) =>{
            let val = document.getElementById("restimage").value;
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
                    setImagesRest((oldArray) => [...oldArray, file]);
                   
                  }
                };
        
                reader.readAsDataURL(file);
              });
            } else {
              
           window.alert('file format not supported')
            }

        }

        const handleremoveimage =(ind)=>{
             
            const newarr = imagesrest.filter((item,index)=>{
                return   index !== ind
            })

            setImagesRest(newarr)

        }

        const handleglbfile = (e)=>{
            let val = document.getElementById("glbfile").value;
            let indx = val.lastIndexOf(".") + 1;
            let filetype = val.substr(indx, val.length).toLowerCase();
        
            if (filetype === "glb" ) {
              let files = Array.from(e.target.files);
              files.forEach((file) => {
                fileToBase64(file, (err, result) => {
                  if (result) {
                    setGlbFile(file) 
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
              
           window.alert('file format not supported')
            }

        }
        const handleusdzfile = (e)=>{

            let val = document.getElementById("usdzfile").value;
            let indx = val.lastIndexOf(".") + 1;
            let filetype = val.substr(indx, val.length).toLowerCase();
        
            if (filetype === "usdz" ) {
              let files = Array.from(e.target.files);
              files.forEach((file) => {
                fileToBase64(file, (err, result) => {
                  if (result) {
                    setUsdzFile(file) 
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
              
           window.alert('file format not supported')
            }

        }



        const uploadmainimage = async ()=>{

          try {
            const url = imagesuploadurl;
    
            const res = await fetch(url, {
                method: "POST",
                body: imagesmain.name,
            });
            const data = await res.json();
    
         
            const uploadRes = await fetch(data.uploadURL, {
                method: "PUT",
                headers: {
                    ContentType: "image/jpeg",
                },
                body: imagesmain,
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

        const uploadrestimage = async ()=>{


            const temparray = []

            for(let i=0; i<imagesrest.length; i++){

            const url =  imagesuploadurl;


            await fetch(url, {
              method: "POST",
              body: imagesrest[i].name,
            })
              .then((res) => res.json())
              .then((res) => {
                fetch(res.uploadURL, {
                  method: "PUT",
                  headers: {
                    ContentType: "image/jpeg",
                  },
      
                  body: imagesrest[i],
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


        const handlesubmit = async ()=>{

            try {
             const [mainImageUrl, restImageUrls, glbFileUrl, usdzFileUrl] =    await Promise.all([
                    uploadmainimage(),
                    uploadrestimage(),
                    uploadglbfile(),
                    uploadusdzfile()
                ])

               

           
             const body = {
                Id: new Date().getTime().toString(),
                productname : productjson.productname.toLowerCase(),
                brandname: productjson.brandname.toLowerCase,
                sku: productjson.sku,
                productlength: productjson.productlength,
                productwidth: productjson.productwidth,
                productheight: productjson.productheight,
                dimensionunit: productjson.dimensionunit,
                mrp: productjson.mrp,
                weight: productjson.weight,
                weightunit: productjson.weightunit,
                offerprice: productjson.offerprice,
                category:  productjson.category,
                subcategory: productjson.subcategory,
                 tags: productjson.tags,
                 rooms: productjson.rooms,
                 colors: productjson.colors,
                 warranty: productjson.warranty,
                 features:productjson.features,
                 properties: productjson.properties,
                 care: productjson.care,
                 warrantydetails: productjson.warrantydetails,
                 returns: productjson.returns,
                 qualitypromise: productjson.qualitypromise,
                 productmainimage: mainImageUrl,
                 productrestimage: restImageUrls,
                 glbfile: glbFileUrl,
                 usdzfile: usdzFileUrl
             }  
             
             const response = await axios.post(uploadproducturl, body);
               if(response.status === 200){
                window.alert('Upload successfull')
                  window.location.reload()

               }
               

            } catch (error) {
                console.error("An error occurred during the uploads:", error);
            }

        }

  return (
    <div>

         <div className='container mx-auto  border-2 mt-20 pb-10'>

            <div className='grid grid-cols-5 w-full gap-2 place-items-center p-20'>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200' value={productjson.productname} onChange={(e)=> handleproductdetails(e)} name='productname' placeholder='Product name'/>
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl  pl-2 outline-none focus:ring-2 ring-blue-200'  value={productjson.brandname} onChange={(e)=> handleproductdetails(e)} name='brandname' placeholder='Brand name' />
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200'  value={productjson.sku} onChange={(e)=> handleproductdetails(e)} name='sku' placeholder='SKU' />
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.productlength} onChange={(e)=> handleproductdetails(e)} name='productlength' placeholder='Length' />
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.productwidth}  onChange={(e)=> handleproductdetails(e)} name='productwidth' placeholder='Width' />
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.productheight}  onChange={(e)=> handleproductdetails(e)} name='productheight' placeholder='Height' />
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.dimensionunit} onChange={(e)=> handleproductdetails(e)} name='dimensionunit' placeholder='Dimension unit' />
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.mrp} onChange={(e)=> handleproductdetails(e)} name='mrp' placeholder='MRP' />
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.offerprice}  onChange={(e)=> handleproductdetails(e)} name='offerprice' placeholder='Offerprice'/>
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.weight}  onChange={(e)=> handleproductdetails(e)} name='weight' placeholder='Weight'/>
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.weightunit}  onChange={(e)=> handleproductdetails(e)} name='weightunit' placeholder='Weight-unit'/>
                </div>
                <div>
                    <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.warranty}  onChange={(e)=> handleproductdetails(e)} name='warranty' placeholder='Warranty'/>
                </div>
                <div>

               
                    <select className='w-[250px] border-2 h-[40px] rounded-xl outline-none focus:ring-2 ring-blue-200 ' onChange={(e)=> handleDropdownChange('category', e.target.value)} >
                                
                                <option disabled selected>
                                    Category

                                </option>
                                <option>Furniture</option>
                                <option>Electronics</option>
                                <option>Electricals</option>
                                <option>Walls</option>
                                <option>Furnishing</option>

                        
                        </select>
                </div>
                <div>

               
<select className='w-[250px] border-2 h-[40px] rounded-xl outline-none focus:ring-2 ring-blue-200 ' onChange={(e)=> handleDropdownChange('subcategory', e.target.value)}>
            
            <option disabled selected>
                Sub-category

            </option>
            {
                subcategorydata && subcategorydata.map(item=>(
                    <option>{item}</option>

                ))
            }
          

    
    </select>
</div>

<div>

 <div className='flex flex-col border-2 w-[250px] h-[150px] rounded-xl'>
 <select className='w-[250px] border-2 h-[40px] rounded-xl outline-none focus:ring-2 ring-blue-200 ' onChange={(e)=> handleDropdownChangeMultiple('tags', e.target.value)}>
            
            <option disabled selected>
            Tags

            </option>
            <option>New </option>
            <option>Latest</option>
            <option>Featured</option>
        
    </select>
    <div className='flex flex-col max-w-100 max-h-full overflow-scroll no-scrollbar'>
         
         {

            productjson?.tags.map((item,index)=>(
                <div className='flex flex-row m-2 p-1 w-100 bg-gray-300 justify-between items-center border-2 rounded-lg'>
            
                   <p>{item}</p>
                   <CircleX className='cursor-pointer ' onClick={()=> handleremoveitem('tags', item )} />

                </div>

            ))

         }

      

    </div>
    </div>              

</div>

           <div>

            <div className='flex flex-col border-2 w-[250px] h-[150px] rounded-xl'>
            <select className='w-[250px] border-2 h-[40px] rounded-xl outline-none focus:ring-2 ring-blue-200 ' onChange={(e)=> handleDropdownChangeMultiple('rooms',e.target.value)}>
            
            <option disabled selected>
            Rooms

            </option>
            <option>Bedroom </option>
            <option>Living room</option>
            <option>Kitchen</option>
        
    </select>

    <div className='flex flex-col max-w-100 max-h-full overflow-scroll no-scrollbar'>
         
         {

            productjson?.rooms.map((item,index)=>(
                <div className='flex flex-row m-2 p-1 w-100 bg-gray-300 justify-between items-center border-2 rounded-lg'>
            
                   <p>{item}</p>
                   <CircleX className='cursor-pointer ' onClick={()=> handleremoveitem('rooms', item )} />

                </div>

            ))

         }

      

    </div>
                
            </div>

               

</div>  

<div>

       <div className='flex flex-col border-2 w-[250px] h-[150px] rounded-xl' >
       <input className='w-[250px] border-2 h-[40px] rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' id ='inputcolor' name='colors' placeholder='Color' onChange={(e)=>handlecolorinput(e)}/>
       <div className='flex flex-col max-w-100 max-h-full overflow-scroll no-scrollbar'>
         
         {

            productjson?.colors.map((item,index)=>(
                <div className='flex flex-row m-2 p-1 w-100 bg-gray-300 justify-between items-center border-2 rounded-lg'>
            
                   <p>{item}</p>
                   <CircleX className='cursor-pointer ' onClick={()=> handleremoveitem('colors', item )} />

                </div>

            ))

         }

      

    </div>
       </div>
                  
                </div>
             
                <div>
                    <textarea className='w-[250px] border-2 min-h-[150px]  rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.features} onChange={(e)=> handleproductdetails(e)} name='features' placeholder='Features' />
                </div>
                <div>
                    <textarea className='w-[250px] border-2 min-h-[150px]  rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.properties}  onChange={(e)=> handleproductdetails(e)} name='properties' placeholder='Properties' />
                </div>
                <div>
                    <textarea className='w-[250px] border-2 min-h-[150px]  rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 '  value={productjson.care} onChange={(e)=> handleproductdetails(e)} name='care' placeholder='Care Instruction' />
                </div>
                <div>
                    <textarea className='w-[250px] border-2 min-h-[150px]  rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 '  value={productjson.warrantydetails} onChange={(e)=> handleproductdetails(e)} name='warrantydetails' placeholder='Warranty details' />
                </div>
                <div>
                    <textarea className='w-[250px] border-2 min-h-[150px]  rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.returns} onChange={(e)=> handleproductdetails(e)} name='returns' placeholder='Returns' />
                </div>
                <div>
                    <textarea className='w-[250px] border-2 min-h-[150px]  rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' value={productjson.qualitypromise} onChange={(e)=> handleproductdetails(e)} name='qualitypromise' placeholder='Quality promise' />
                </div>

                <div>
                     <div>
                        <label className='text-sm'>Product Image main</label>

                         <div className='flex flex-col w-[250px] border-2 min-h-[150px]  rounded-xl pl-2'> 
                        <input  className='' id='mainimage' onChange={handlefileimagemain} type='file' accept='images/*'/>
                        <div className='flex h-full mt-2  '>
                             {
                                imagesmain !== undefined ? 
                            <Image src={URL.createObjectURL( imagesmain)} width={80} height={80} alt='mainimage'/> :''

                             }
                          </div>

                         </div>

                       
                     </div>
                
                </div>
                <div>
                     <div>
                        <label className='text-sm'>Product Images(Rest 4)</label>
                        <div className='flex flex-col w-[250px] border-2 min-h-[150px]  rounded-xl pl-2'> 
                        <input  className='' id='restimage' onChange={handlefileimagerest} type='file' accept='images/*' multiple/>
                        <div className='flex flex-col h-[120px] mt-2 w-full  overflow-scroll no-scrollbar '>
                             {
                                 
                                 imagesrest && imagesrest.map((img, index)=>(
                                    <div className='flex border-2 flex-row m-1 justify-between items-center'>
                                    <Image src={URL.createObjectURL(img)} width={80} height={80} alt='mainimage'/>
                                     <CircleX className='m-1 cursor-pointer' onClick={()=>handleremoveimage(index)}  />
                                   </div>
                                 ))

                             }
                          </div>

                         </div>
                     </div>
                
                </div>
                <div>
                     <div>
                        <label className='text-sm'>Glb file</label>
                        <input  className='w-[250px] border-2 min-h-[150px]  rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' id='glbfile' onChange={handleglbfile} type='file' />
                     </div>
                
                </div>
                <div>
                     <div>
                        <label className='text-sm'>Usdz file</label>
                        <input  className='w-[250px] border-2 min-h-[150px]  rounded-xl pl-2 outline-none focus:ring-2 ring-blue-200 ' id = 'usdzfile' onChange={handleusdzfile} type='file' />
                     </div>
                
                </div>

            </div>

            <div className='flex flex-col justify-center items-center'> 
                  <button className='border-2 rounded-xl bg-blue-300 p-3' onClick={()=>handlesubmit()}>Submit</button>
               </div>

         </div>

      
    </div>
  )
}

export default index
