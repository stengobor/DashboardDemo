import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const Notification = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-gray-100 dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <p className="text-slate-800 dark:text-gray-100 text-sm rounded p-1 px-2 bg-orange-theme ">5 New</p>
        </div>
        <TooltipComponent content="Close" postion="BottomCenter">
              <button
                type="button"
                onClick={() => handleClick(false)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-2 mr-2 hover:bg-light-gray block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  );
};

export default Notification;