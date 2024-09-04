import axios from 'axios'
import { CircleX, Cross, ImageMinus,ChartColumn, ListOrdered, ShoppingBasket, TableOfContents, User, Wallpaper } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Rugsupload from '../components/dashboardcomponents/Rugsupload'
import Sofa from '../components/dashboardcomponents/furnitures/Sofa'
import Chair from '../components/dashboardcomponents/furnitures/Chair'
import Wardrobe from '../components/dashboardcomponents/furnitures/Wardrobe'
import Diningtable from '../components/dashboardcomponents/furnitures/Diningtable'
import Sidetable from '../components/dashboardcomponents/furnitures/Sidetable'
import Centretable from '../components/dashboardcomponents/furnitures/Centretable'
import Bed from '../components/dashboardcomponents/furnitures/Bed'
import Barstool from '../components/dashboardcomponents/furnitures/Barstool'
import Stool from '../components/dashboardcomponents/furnitures/Stool'
import Cabinet from '../components/dashboardcomponents/furnitures/Cabinet'
import Coffeetable from '../components/dashboardcomponents/furnitures/Coffeetable'
import Sideboard from '../components/dashboardcomponents/furnitures/Sideboard'
import Table from '../components/dashboardcomponents/furnitures/Table'
import Bookshelf from '../components/dashboardcomponents/furnitures/Bookshelf'
import Studytable from '../components/dashboardcomponents/furnitures/Studytable'
import Wallpaperupload from '../components/dashboardcomponents/Wallpaperupload'
import Washingmachine from '../components/dashboardcomponents/electronics/Washingmachine'
import Microwave from '../components/dashboardcomponents/electronics/Microwave'
import Refrigerator from '../components/dashboardcomponents/electronics/Refrigerator'





const index = () => {

    const imagesuploadurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/arnxtecomimageupload'

    const uploadproducturl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/addproductarnxtecom'

    const [subcategorydata, setSubcategoryData] = useState()
   


   
  const [activeComponent, setActiveComponent] = useState('Rugsupload')

    const [imagesmain, setImagesmain] = useState()
    const [imagesrest, setImagesRest] = useState([])
    const [glbfile, setGlbFile] = useState()
    const [usdzfile, setUsdzFile] = useState()

    const [activeindex, setActiveIndex] = useState(0)

    const [showfurnitureupload, setShowFurnitureUpload] = useState(false)
    const [electronicsupload, setElectronicsUpload] = useState(false)



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

        const listItems = [
          { label: 'Sofa', component: 'Sofa' },
          { label: 'Chair', component: 'Chair' },
          { label: 'Wardrobe', component: 'Wardrobe' },
          { label: 'Bar stool', component: 'Barstool' },
          { label: 'Bed', component: 'Bed' },
          { label: 'Bookshelf', component: 'Bookshelf' },
          { label: 'Cabinet', component: 'Cabinet' },
          { label: 'Coffee table', component: 'Coffeetable' },
          { label: 'Centre table', component: 'Centertable' },
          { label: 'Sideboard', component: 'Sideboard' },
          { label: 'Dining table', component: 'Diningtable' },
          { label: 'Side table', component: 'Sidetable' },
          { label: 'Stool', component: 'Stool' },
          { label: 'Study table', component: 'Studytable' },
          { label: 'Table', component: 'Table' }
        ];
         
         const electronicsArray = [

          { label: 'Washing machine', component: 'Washingmachine' },
          { label: 'Microwave', component: 'Microwave' },
          { label: 'Refrigerator', component: 'Refrigerator' },
     

         ]

         const electicalArray = [

          { label: 'Washing machine', component: 'Washingmachine' },
          { label: 'Microwave', component: 'Microwave' },
          { label: 'Refrigerator', component: 'Refrigerator' },
     

         ]

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

        const [productisopen, setProductIsOpen] = useState(false)
        const [contentisopen, setContentIsOpen] = useState(false)
        const [furnitureopen, setFurnitureOpen] = useState(false)
    
    
        const handleshowproduct = ()=>{
            setProductIsOpen(!productisopen)
        }
        const handleshowcontent = ()=>{
            setContentIsOpen(!contentisopen)
        }
        const handleshowfurniture=()=>{
          setFurnitureOpen(!furnitureopen)
        }

        const handleClickDropdown = (item, index)=>{
          setActiveComponent(item)
          setActiveIndex(index)
        }

        const handlelistclick = (value)=>{
          setFurnitureOpen(false)
          setActiveComponent(value)
        }

     

      const renderComponent = () => {
            switch (activeComponent) {
              case 'Rugsupload':
                return <Rugsupload />;
                case 'Wallpaperupload':
                  return <Wallpaperupload />;
                  case 'Washingmachine':
                    return <Washingmachine />;
                    case 'Microwave':
                      return <Microwave />;
                      case 'Refrigerator':
                        return <Refrigerator />;
              case 'Sofa':
                return <Sofa />;
              case 'Chair':
                return <Chair />;
              case 'Wardrobe':
                return <Wardrobe />;
                case 'Barstool':
                  return <Barstool />;
                  case 'Bed':
                    return <Bed />;
                    case 'Bookshelf':
                      return <Bookshelf />;
                      case 'Cabinet':
                        return <Cabinet />;
                        case 'Centretable':
                          return <Centretable />;
                          case 'Coffeetable':
                            return <Coffeetable />;
                            case 'Diningtable':
                              return <Diningtable />;
                              case 'Sideboard':
                                return <Sideboard />;
                                case 'Sidetable':
                                  return <Sidetable />;
                                  case 'Stool':
                                    return <Stool />;
                                    case 'Studytable':
                                      return <Studytable />;
                                      case 'Table':
                                        return <Table />;
                                       
              default:
                return <Rugsupload />;
            }
          };

          const handleClickElectronics = ()=>{
            setElectronicsUpload(!electronicsupload)
          }

  return (
    <div className='flex flex-col'>
        <div>
        <div className='fixed left-0 w-[200px] z-30 h-screen bg-gray-200'>
        <ul className='flex flex-col w-full justify-start items-start gap-2 mt-5'>
            <div>
            <li className='flex flex-row gap-2 ml-2 cursor-pointer' onClick={handleshowproduct}><ShoppingBasket /><p>Products</p></li>
               {
               
               <ul 
               className={`flex flex-col ml-10 gap-2  transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                 productisopen ? 'max-h-40 scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'
               }`}
             >
                <li><p className='text-sm'>Collections</p></li>
                <li><p  className='text-sm'>Inventory</p></li>
                <li><p  className='text-sm'>Purchase order</p></li>
                <li><p  className='text-sm'>Transfers</p></li>
               

             </ul> 
               }
               
            

            </div>
            <li className='flex flex-row gap-2 ml-2 cursor-pointer'><ListOrdered /><p>Orders</p></li>
            <li className='flex flex-row gap-2 ml-2 cursor-pointer'><User /><p>Customers</p></li>
            <li className='flex flex-row gap-2 ml-2 cursor-pointer'><ChartColumn /><p>Analytics</p></li>
              <div>
              <li className='flex flex-row gap-2 ml-2 cursor-pointer' onClick={handleshowcontent}><TableOfContents /><p>Content</p></li>
            
              <ul 
               className={`flex flex-col ml-10 gap-2 mt-2 transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                 contentisopen ? 'max-h-full scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'
               }`}
             >
                  <li><p className='text-sm cursor-pointer' onClick={()=>handlelistclick('Rugsupload')} >Rugs upload</p></li>
                  <li><p  className='text-sm cursor-pointer' onClick={()=>handlelistclick('Wallpaperupload')}>Wallpaper upload</p></li>
                  <li><p  className='text-sm cursor-pointer' onClick={handleshowfurniture}>Furniture upload</p>
                  {
               
               <ul 
               className={`flex flex-col ml-5 gap-1  transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                 furnitureopen ? 'max-h-full scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'
               }`}
             >
           {listItems.map((item, index) => (
    <li key={index}>
      <p className= {`text-xs cursor-pointer p-2 rounded-1 ${activeindex === index ? 'bg-gray-100': '' }  `} onClick={() => handleClickDropdown(item.component, index) }>
        {item.label}
      </p>
    </li>
  ))}


             </ul> 
               }
                  
                  </li>
                  <li><p  className='text-sm cursor-pointer'>Electrical upload</p></li>
                  <li><p  className='text-sm cursor-pointer' onClick={handleClickElectronics}>Electronics upload</p>
                  {
               
               <ul 
               className={`flex flex-col ml-5 gap-1  transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                 electronicsupload? 'max-h-full scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'
               }`}
             >
           {electronicsArray.map((item, index) => (
    <li key={index}>
      <p className= {`text-xs cursor-pointer p-2 rounded-1 ${activeindex === index ? 'bg-gray-100': '' }  `} onClick={() => handleClickDropdown(item.component, index) }>
        {item.label}
      </p>
    </li>
  ))}


             </ul> 
               }
                  </li>

               </ul>
              </div>

        </ul>

    </div>
        </div>
        <div>
           {/* {renderComponent()} */}
           <Wallpaperupload/>

       
        </div>
        
    </div>
  )
}

export default index
