"use client";
import React from "react";

const FlashComponent = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center font-semibold text-red-600 gap-2 p-1'>
        <h1 className="text-sm whitespace-nowrap">100% OFF </h1>
        <div className="flex p-1 justify-center items-center max-w-max bg-blue-600 h-6 text-neutral-50 rounded-sm text-xs">23h:40min:00s</div>
      </div>
      <div className='max-w-full'>
        <div className='h-40 bg-slate-400 rounded-sm w-40'></div>
        <div>description</div>
        <div>Promo code: Code</div>
      </div>
    </div>
  );
};

export default FlashComponent;
