"use client";
import React from "react";

const DiscounComponent = () => {
  return (
    <div className='flex flex-col'>
      <div className='font-semibold text-red-600'>% OFF</div>
      <div className='max-w-full'>
        <div className='h-40 bg-slate-400 rounded-sm w-40'></div>
        <div>description</div>
        <div>Promo code: Code</div>
      </div>
    </div>
  );
};

{
  /* <div className='flex min-w-full flex-col bg-white p-1 rounded-md'>
            <h1 className='font-semibold'>Discounts and Coupons</h1>
            <div className='flex gap-2 overflow-x-scroll snap-x'>
                
            </div>
          </div> */
}

export default DiscounComponent;
