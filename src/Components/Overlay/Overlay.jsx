import React from "react";
import { useDispatch } from "react-redux";
import { ClearAll } from "../../Feature/Slice";
import { close } from "../../Modal/ModalSlice";
const Overlay = () => {
  const dispatch = useDispatch();
  return (
    <main className="w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0 ">
      <div className="overlay w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0 bg-black opacity-65 "></div>
      <div className=" absolute xl:left-[30%]  lg:left-[25%] lg:top-[35%]  2xl:top-[50%] 2xl:left-[40%] md:left-[18%] sm:left-[12%] xs:left-[12%] top-[50%] left-[6%] sm:py-10 sm:px-14 py-2 px-3 rounded-2xl  bg-blue-400 grid justify-center items-center gap-5">
        <div className="flex justify-center items-center">
          <h1 className="text-white text-lg sm:text-3xl">
            Do you Want to Clear the Carts?
          </h1>
        </div>
        <div className="flex  justify-center items-center gap-5">
          <div
            onClick={() => {
              dispatch(ClearAll());
              dispatch(close());
            }}
            className="rounded-2xl border border-white"
          >
            <button className="py-3 px-4 hover:bg-red-600 hover:text-white rounded-2xl">
              Yes
            </button>
          </div>
          <div
            onClick={() => dispatch(close())}
            className="rounded-2xl border border-white"
          >
            <button className="py-3 px-4 hover:bg-red-600 hover:text-white rounded-2xl">
              No
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Overlay;
