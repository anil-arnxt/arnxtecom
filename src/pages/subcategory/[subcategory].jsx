
import { useRouter } from 'next/router'
import React, { useState, useEffect, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { ArrowDown, ArrowUp, ArrowUpRightFromSquare, ChevronDown, ChevronRightIcon, ChevronUp, Filter, Heart, IndentDecrease, IndentIncrease, Settings2 } from 'lucide-react';
import Image from 'next/image';

import ReactPaginate from "react-paginate"; 
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; 
import { IconContext } from "react-icons"; 
import '@/pages/subcategory/subcategory.css'
import axios from 'axios';
import Rugs from '../components/subcategorycomponents/Rugs';
import { usePathname } from 'next/navigation';
import Sofa from '../components/subcategorycomponents/Sofa';
import Wallpapers from '../components/subcategorycomponents/Wallpapers';

const getsubcategorydataurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsubcategoryitemarnxtecom'

const getfilteritemsurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getfilterdataarnxtecom'

export async function getServerSideProps({ params }) {
  const { subcategory } = params; 

  

  const body = {
    subcategory: subcategory,
  };



  const response = await axios.post(getsubcategorydataurl, body );
  const dataitem = response.data;

  const response2 = await axios.post(getfilteritemsurl, body);
  const filteritem = response2.data;



  return {
    props: { dataitem, filteritem, subcategory },
  };
}

const Subcategory = ({dataitem , filteritem, subcategory}) => {
  const [page, setPage] = useState(0);
  const router = useRouter()


  const [currentComponent, setCurrentComponent] = useState('Rugs');
  const [productdata, setProductData] = useState()
  const [filteritemarray, setFilterItemArray] = useState([])
  const [currenttag, setCurrentTag] = useState(null)

  const [filters, setFilters] = useState()

  const [currentfiltername, setCurrentFilterName] = useState()

    const [activefilteritem, setActiveFilterItem] = useState([])

    useEffect(() => {

    

       
        setProductData(dataitem);
        setFilters(filteritem);
      

  
    }, [subcategory]);

    useEffect(() => {
 
      
        setActiveFilterItem(filteritem[0].filters?.map(() => 0)); 
      
    }, [filters]);

  const handleclickall = (index, name)=>{
    const updatedIndices = [...activefilteritem];
    updatedIndices[index] = true; 
    setActiveFilterItem(updatedIndices);
  }

  const handlecloseall = (index)=>{
    const updatedIndices = [...activefilteritem];
    updatedIndices[index] = false; 
    setActiveFilterItem(updatedIndices);
  }

  const n = 9

   const filterData = useMemo(() => {
    return productdata?.slice(page * n, (page + 1) * n);
  }, [page, productdata]);
  
      const [value, setValue] = useState([100, 60000]);
  
      const [isOpen, setIsOpen] = useState(false);
      const [dropdown, setDropDown] = useState(false)
  
      const toggleFilter = () => {
        setIsOpen(!isOpen);
      };
  
      const handledropdowntoggle = () =>{
          setDropDown(!dropdown)
      }

    
      const { category } = router.query

      const handleproductclick = (id)=>{

        router.push(`/product/${id}`)
          
    
        }

    

        
    useEffect(()=>{

        let temparr = []

         const filterfinal = currentfiltername?.toLowerCase()

      

         
      
     if(filteritemarray.length > 0){
          
           for(let item of dataitem){
                
                
          
                if(Array.isArray(item[filterfinal]) > 0 ){

                    for(let color of item[filterfinal]){

                      if(filteritemarray.includes(color.charAt(0).toUpperCase() + color.slice(1))){
                        if(!temparr.includes(item)){
                          temparr = [...temparr, item]

                        }
                      }
                    }

                }else{
                  if(filteritemarray.includes(item[filterfinal])){

                    
                    temparr = [...temparr, item]
                 }
            
                }
           

             }

           


          setProductData(temparr)
         
    }
     if(filteritemarray.length === 0){
         setProductData(dataitem)
     }

 },[filteritemarray,currentfiltername])





 useEffect(()=>{

    let temparray =[]

      for ( let item of dataitem){
          if(item.tags?.includes(currenttag)){
            temparray.push(item)
          }   
      }

    if(currenttag !== null){
        setProductData(temparray)
    }

               

},[currenttag])

 const handlegetalldata = ()=>{
    setProductData(dataitem)
}

const handleTagsSelect = (value)=>{
    setCurrentTag(value)
}

const handlePriceSorting = (value)=>{

    if(value === 'High to low'){
     
        const sortedProducts = [...productdata].sort((a, b) => parseFloat(b.sizeprice[0].offerprice) - parseFloat(a.sizeprice[0].offerprice));
        setProductData(sortedProducts);
     }
    
    if(value === 'Low to high'){
     
        const sortedProducts = [...productdata].sort((a, b) => parseFloat(a.sizeprice[0].offerprice) - parseFloat(b.sizeprice[0].offerprice));
        setProductData(sortedProducts);
    }
}
    

const handlefilterchange = (e, filtername)=>{

    const body = e.target

    


    if(body.checked){
          if(!filteritemarray.includes(body.value)){
            setFilterItemArray([...filteritemarray, body.value])
          }

       
    }else{
        if(filteritemarray.includes(body.value)){
             const newarr = filteritemarray.filter(item=>{
                return item !== body.value
             })
             setFilterItemArray(newarr)
            
        }
    }
    setCurrentFilterName(filtername)   
}




useEffect(()=>{


   const subcat = pathname.split('/')[2]
     if(subcat === 'Wallpapers'){

      let temparr = []


      if(productdata !== undefined){
        
       for(let item of dataitem ){

          
             if(Number(item.offerprice) > Number(value[0]) && Number(item.offerprice) < Number(value[1])){

               if(!temparr.includes(item)){
                 temparr = [...temparr, item]

               }

             }

           
       
            }

       setProductData(temparr)

      }

     }

     if(subcat === 'Rugs'){

      let temparr = []


      if(productdata !== undefined){
        
       for(let item of dataitem ){

           for (let price of item?.sizeprice){
             if(Number(price.offerprice) > Number(value[0]) && Number(price.offerprice) < Number(value[1])){

               if(!temparr.includes(item)){
                 temparr = [...temparr, item]

               }

             }

           }
       
            }

       setProductData(temparr)

      }

     }

  

},[value])




const pathname = usePathname()

  const renderComponent = () => {
    switch (pathname) {
      case '/subcategory/Rugs':
        return <Rugs  filterData ={filterData}/>;
        case '/subcategory/Sofa':
          return <Sofa  filterData ={filterData}/>;
          case '/subcategory/Wallpapers':
            return <Wallpapers  filterData ={filterData}/>;

      
                               
      default:
        return null;
    }
  };

  return (
    <div >
    <Navbar/>

    <div className='md:hidden  flex flex-col justify-center items-center'>
        <div className='flex flex-row gap-2 py-2' onClick={toggleFilter}>
         <div>
           
            <p className='text-lg text-zinc-400'> Filter</p>
         </div>
         <div className='mt-1'>
            <Filter size={20}/>
         </div>

        </div>

    </div>

    <div
    className={`fixed inset-0 bg-black z-40 mt-20 bg-opacity-50 transition-opacity duration-300 ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
    onClick={toggleFilter}
  >

<div
    className={`fixed top-0 left-0 mt-20 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
  >
    
    <div className='p-4'>
      <h2 className='text-xl font-semibold'>Filters</h2>

      <div className='flex col-span-3 mt-2 flex-col no-scrollbar overflow-y-scroll '>

<div className='flex flex-col border-2 p-5'>
<div className='mt-5'>
    <p className='text-xl font-bold'>
        Product Category

    </p>

</div>
<div className='mt-2'>
    <ul className='list-none flex flex-col gap-2'>
        <li>
             <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
              <p>
                Furniture
              </p>
              <input type='checkbox'/>
             </div>
         </li>
         <li>
             <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
              <p>
               Electical
              </p>
              <input type='checkbox'/>
             </div>
         </li>
         <li>
             <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
              <p>
               Rugs
              </p>
              <input type='checkbox'/>
             </div>
         </li>
         <li>
             <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
              <p>
                Wallpapers
              </p>
              <input type='checkbox'/>
             </div>
         </li>
  
          </ul>

</div>

</div>

<div className='flex flex-col border-2 p-5 mt-5'>
<div className='mt-5'>
    <p className='text-xl font-bold'>
        Price

    </p>

    <div className='mt-5'>
    <RangeSlider

value={value}

min={100}
max={60000}
step={5}
/>
    </div>



</div>


</div>
<div className='flex flex-col border-2 mt-5 p-5'>
<div className='mt-5'>
    <p className='text-xl font-bold'>
        Color

    </p>

</div>
<div className='mt-2'>
    <ul className='list-none flex flex-col gap-2'>
        <li>
             <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
              <p>
                Red
              </p>
              <input type='checkbox'/>
             </div>
         </li>
         <li>
             <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
              <p>
               Green
              </p>
              <input type='checkbox'/>
             </div>
         </li>
         <li>
             <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
              <p>
               Blue
              </p>
              <input type='checkbox'/>
             </div>
         </li>
         <li>
             <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
              <p>
                White
              </p>
              <input type='checkbox'/>
             </div>
         </li>
  
          </ul>

</div>

</div>


</div>
 
    </div>
  </div>


  </div>

<div className='container grid grid-cols-12 mx-auto w-full  h-[600px] mb-40 gap-2'>

 <div className='hidden md:flex md:col-span-3 flex-col no-scrollbar overflow-y-scroll '>


    <div className='flex flex-col border-2 p-5 mt-5'>
        <div className='mt-5'>
            <p className='text-xl font-bold'>
                Price

            </p>

            <div className='mt-5'>
            <RangeSlider
    
    value={value}
   onInput= {setValue}
    min={100}
    max={60000}
    step={5}
  />
     <div className="flex pt-2 pb-2 w-full">
            <span>
              From: <strong className="text-success">Rs: {value[0]}</strong>
            </span>
            <span className="ml-auto">
              From: <strong className="text-success">Rs: {value[1]}</strong>
            </span>
          </div>
            </div>

  

        </div>
   
        
    </div>

    {
     filteritem &&   filteritem[0]?.filters.map((item,ind)=>(
        <div className='flex flex-col border-2 mt-5 p-5'>
        <div className='mt-5'>
            <p className='text-xl font-bold'>
                {item.filtername}

            </p>

        </div>

        <div className='mt-2'>
        <ul className='list-none flex flex-col gap-2'>
          {


            activefilteritem[ind] ? 

          item.filtervalue &&   item.filtervalue?.map((filter, index)=>(

                

              <li>
              <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
               <p>
                {filter}
               </p>
               <input type='checkbox' value={filter} id='catcheckbox' onChange={(e)=>handlefilterchange(e,item.filtername)}/>
              </div>
          </li> 


            ))

            : 

            item.filtervalue &&   item.filtervalue?.map((filter, index)=>(

                 index < 4 ? 

              <li>
              <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
               <p>
                {filter}
               </p>
               <input type='checkbox' value={filter} id='catcheckbox' onChange={(e)=>handlefilterchange(e,item.filtername)}/>
              </div>
          </li> 
          :''


            ))
          }
                      </ul>
                       <div className='flex flex-fol justify-center items-center mt-2 cursor-pointer'>

                     {
                      activefilteritem[ind] ? 
                      <ChevronUp onClick={()=> handlecloseall(ind, item.filtername)}/>

                      : 
                      <ChevronDown onClick={()=> handleclickall(ind, item.filtername)}/>

                     } 
                        </div>
                    

        </div>
        
    </div>

        
      ))
    }
   


 </div>
 <div className='md:col-span-9  col-span-12 '>

      <div className='flex flex-row justify-between mt-2 '>
        <div className='flex ml-5'>
        <button className='border-2 rounded-lg  p-1' onClick={()=>handlegetalldata()}>
                    All ({dataitem?.length})

                </button>
            {/* <p className='text-lg text-slate-400 font-bold'>All </p>
            <p  className='text-lg text-slate-300 ml-1'>(135)</p> */}
             

        </div>

        <div className='md:hidden mr-4 ' onClick={handledropdowntoggle}>
            
        <Settings2 />
        

        </div>
        <div  style={{display: dropdown? 'flex' : 'none' }} className={`md:hidden w-full h-[120px] flex flex-col absolute mt-6 z-30 bg-white`}>
            <div className='inline-flex justify-between p-5'>

                <p>Show Product: </p>
                <select className='rounded-xl border-2'>
                        <option  >Popular</option>
                        <option  >New</option>

                    </select>

            </div>
            <div className='inline-flex justify-between p-5'>

<p>Sort By: </p>
<select className='rounded-xl border-2'>
    <option  >Popular</option>
    <option  >New</option>

</select>

</div>

        </div>

        <div className='hidden md:flex flex-row justify-evenly pr-5'>

            <div className='inline-flex gap-2'>

                <p className='text-md font-bold'>Show product: </p>

                <div>
                <select className='rounded-xl border-2' onChange={(e)=>handleTagsSelect(e.target.value)}>
                            <option selected disabled>Select</option>
                        <option  >New</option>
                            <option>Latest</option>
                            <option>Featured</option>


                        </select>
                </div>

            </div>
            <div className='inline-flex gap-2 ml-5'>

<p className='text-md font-bold'>Sort By: </p>

<div>
<select className='rounded-xl border-2' onChange={(e)=> handlePriceSorting(e.target.value)}>
    <option selected disabled>Select</option>
    <option  >High to low</option>
    <option  >Low to high</option>

    </select>
</div>

</div>

        </div>

      </div>
             {renderComponent()}
             {/* <Rugs filterData={filterData}/> */}

      {/* <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-2 h-[600px] overflow-y-scroll no-scrollbar mt-10 place-items-center'>
      {
              filterData && filterData.map((product,index)=>(

                <div key={product.Id} className='h-auto w-[250px] shadow-lg rounded-xl p-2 '>
                <div className='relative top-5 flex justify-between mb-4'>
 
                  <button className='w-auto bg-red-300 rounded-3xl p-1 '>
                   { Math.round( (Number(product.mrp) - Number(product.offerprice) )/ Number(product.mrp)*100)}%
                     
                  </button>
                <Heart className='cursor-pointer' />
              
 
                </div>
                 <div className='flex justify-center items-center w-full h-[250px] mt-5'>
                     <img src={product.productmainimage} className='object-contain w-full h-full roundex-xl'/>
                  </div>
              
               <div className='mt-2'>
               <p className='text-l text-zinc-400 font-bold'>
      {product.productname.length > 50 
        ? `${product.productname.substring(0, 50)}...` 
        : product.productname}
    </p>
               </div>
                <div className='flex flex-row justify-between mt-2'>
                  
                 <p className='mt-2'>₹ {product.offerprice} `</p>
                 <button className='rounded-xl bg-green-300 p-2'  onClick={()=>handleproductclick(product.Id)} >
                   Buy now
                 </button>
 
                </div>
           
 
           </div>

              ))
            }

    

      </div> */}
    
    </div>


          
       

  
</div>

 <div className='flex flex-col justify-center items-center w-full  py-2'>

 <ReactPaginate
containerClassName={"pagination"}
pageClassName={"page-item"}
activeClassName={"active"}
onPageChange={(event) => setPage(event.selected)}
pageCount={Math.ceil(filterData?.length / n)}
breakLabel="..."
previousLabel={

  <AiFillLeftCircle size={25} className='mr-2' />

}
nextLabel={

  <AiFillRightCircle size={25} className='ml-2' />

}
/>

 </div>


<Footer/>

</div>
  )
}

export default Subcategory
