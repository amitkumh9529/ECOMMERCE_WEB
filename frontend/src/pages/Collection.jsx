import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

function Collection() {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relevent'); 

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev =>prev.filter(item => item !== e.target.value ))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }


  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value )) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value )) 
    }
    else {
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }
  
  
  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search ) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    setFilterProducts(productsCopy)
  }

  {/*Logic behind sorting product by price*/}

  const sortProduct = () => {
    
    let fpCopy = filterProducts.slice();

    switch (sortType) {

      case 'low-high' :
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low' :
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;

    }


  }




  
  // useEffect(()=>{
  //   setFilterProducts(products)
  // }, [])
  

 
  useEffect(()=>{
      applyFilter();
  },[category,subCategory,search,showSearch, products])


  useEffect(()=> {
    sortProduct();
  }, [sortType])





  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*filter options*/}

      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)}  className='my-2 text-xl flex item-center cursor-pointer gap-2'>
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} alt="" />FILTER</p>
        {/*category filter*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={'Men'}/> MEN</p>
            <p className='flex gap-2'>
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={'Women'}/> WOMEN</p>
            <p className='flex gap-2'>
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={'Kids'}/> KIDS</p>
          </div>

        </div>
        {/*Subcategory filter*/}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUBCATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={'Topwear'}/> TOPWEAR</p>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={'Bottomwear'}/> BOTTOMWEAR</p>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={'Winterwear'}/> WINTERWEAR</p>
          </div>

        </div>

      </div>

      {/* Right side */}

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          < Title text1 ={'ALL'} text2 ={'COLLECTIONS'} />
          {/*product cart*/}
          <select onChange={(e)=> setSortType(e.target.value)} className='border-2 border-gray-300 text-sm py-2'>
            <option value="relevent">sort by :relevent</option>
            <option value="low-high">sort by :low-high</option>
            <option value="high-low">sort by :high-low</option>
          </select>
        </div>
        {/*Map products*/}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              < ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>

      </div>

    </div>
  );
}

export default Collection
