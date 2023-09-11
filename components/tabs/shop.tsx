import DropDownIcon from "./icons/shopIcons/dropdownIcon";
import DiscounComponent from "./shopComponents/DiscounComponent";
import FlashComponent from "./shopComponents/FlashComponent";

export default function Shop() {
  return (
    <>
      <div className='flex flex-col h-full p-2 w-full'>
        <div className='flex items-center justify-end'>
          Sort
          <DropDownIcon iconWidth={30} iconHeight={30} />
        </div>
        <div className='flex flex-col gap-2'>
          {/* Discounts and Coupons */}
          <div className='flex min-w-full flex-col bg-white p-1 rounded-md'>
            <h1 className='font-semibold'>Discounts and Coupons</h1>
            <div className='flex gap-2 overflow-x-scroll snap-x'>
              {/* For test purposes */}
              <DiscounComponent />
              <DiscounComponent />
              <DiscounComponent />
              <DiscounComponent />
              <DiscounComponent />
            </div>
          </div>
          <div className='flex min-w-full flex-col bg-white p-1 rounded-md'>
            <h1 className='font-semibold'>Flash Sales</h1>
            <div className='flex gap-2 overflow-x-scroll snap-x'>
              {/* For test purposes */}
              <FlashComponent />
              <FlashComponent />
              <FlashComponent />
              <FlashComponent />
              <FlashComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
