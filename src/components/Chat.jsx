import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


const Chat = () => {

  const { currentColor, handleClick } = useStateContext();
  


  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-gray-100 dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <p className="text-black text-sm rounded p-1 px-2 bg-orange">
            5 New
          </p>
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
          <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}           
            text="See All Messages"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;