import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Remove,
  Increase,
  Decrease,
  Calculation,
} from "../../Feature/Slice";
import { open } from "../../Modal/ModalSlice";
const Cart = () => {
  const ProductData = useSelector((state) => state.ecommerce.product);
  const { total } = useSelector((state) => state.ecommerce);
  // console.log(ProductData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Calculation());
  }, [ProductData, dispatch]);

  if (ProductData < 1) {
    return (
      <main>
        <div className="text-3xl px-20 my-5  font-bold flex justify-center items-center mt-[15%]">
          <div>
            <h1>Your Cart is Empty & Clear!</h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="grid justify-center items-center mt-[13%]">
      <div className="container mx-auto bg-gray-800  text-white rounded-2xl overflow-hidden my-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 overflow-hidden">
          {ProductData.map((value) => {
            return (
              <div
                key={value.id}
                className=" relative overflow-hidden gap-3 xl:h-[440px] lg:h-[430px] sm:h-[400px]  h-[350px]   rounded-2xl cursor-pointer hover:bg-gray-900"
              >
                <div className="rounded-3xl">
                  <img
                    src={value.img}
                    className="object-contain w-full  h-[150px] rounded-3xl "
                    alt="img"
                  />
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <h1 className="sm:text-3xl text-xl px-10 text-center py-2">
                    {value.title}
                  </h1>
                  <h2 className="sm:text-2xl text-lg">${value.price}</h2>
                </div>
                <div className="absolute bottom-14 xl:left-[26%] md:left-[24%] sm:left-[27%] left-[24%] flex gap-5 justify-center items-center py-4">
                  <div
                    onClick={() => {
                      if (value.amount === 1) {
                        dispatch(Remove(value.id));
                        return;
                      }
                      dispatch(Decrease(value.id));
                    }}
                    className="w-10 h-10 rounded-md hover:bg-red-500 flex justify-center items-center"
                  >
                    <button className="sm:text-2xl text-xl justify-center items-center pb-1  ">
                      -
                    </button>
                  </div>
                  <div>
                    <h1 className="sm:text-3xl text-xl">{value.amount}</h1>
                  </div>
                  <div
                    onClick={() => {
                      dispatch(Increase(value.id));
                    }}
                    className="w-10 h-10 rounded-md hover:bg-green-500 flex justify-center items-center"
                  >
                    <button className="sm:text-2xl text-xl flex justify-center items-center pb-1 ">
                      +
                    </button>
                  </div>
                </div>
                <div
                  onClick={() => dispatch(Remove(value.id))}
                  className="absolute xl:left-[35%]  left-[30%] bottom-5 flex justify-center items-center mx-auto py-3 rounded-2xl hover:bg-red-500 w-[100px] border border-red-500"
                >
                  <button>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-3xl px-10 my-5 flex justify-between items-center">
        <div>
          <h1>Total</h1>
        </div>
        <div>
          <h1>${total.toFixed(2)}</h1>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(open());
        }}
        className="flex w-[20vw] justify-center items-center bg-red-400 hover:bg-red-600 rounded-xl mx-auto mb-10"
      >
        <button className="py-3 px-5 flex justify-center items-center text-white">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Cart;
