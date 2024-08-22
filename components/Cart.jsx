"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "./CartContext";
import PageHeader from "./PageHeader";
import FAQ from "./FAQ";
import CTA from "./CTA";

const Cart = () => {
  const { cartCount, clearCart } = useCart();

  return (
    <div>
      <PageHeader />
      <div className="w-full h-full py-24">
        <div className="container mx-auto">
          <div className="flex flex-col items-center w-full px-3 py-5 border md:p-7 rounded-3xl lg:flex-row gap-7 md:max-w-[600px]">
            <div className="flex items-center gap-2">
              <Image
                src={"/assets/Foundation.png"}
                width={150}
                height={150}
                alt="product image"
                className="w-[80px] lg:w-[150px]"
              />
              <div className="flex flex-col gap-4 text-[#222]">
                <p>Foundation</p>
                <p>$150.00</p>
                <p>Quantity: 1</p> {/* Show quantity if needed */}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 bg-white border border-[#1b1139] rounded hover:scale-90 duration-300 ease-out"
                aria-label="Purchase Foundation"
              >
                Purchase
              </button>
              <button
                className="p-2 bg-[#e05b36] hover:scale-90 duration-300 ease-out text-white rounded"
                aria-label="Remove Foundation from cart"
                onClick={clearCart} // Clear the cart when the button is clicked
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <CTA />
    </div>
  );
};

export default Cart;

// "use client";

// import React from "react";
// import Image from "next/image";
// import { FaShoppingBasket } from "react-icons/fa";
// import { useCart } from "./CartContext";
// import PageHeader from "./PageHeader";
// import FAQ from "./FAQ";
// import CTA from "./CTA";

// const Cart = () => {
//   const { cartCount, clearCart } = useCart();

//   return (
//     <div className="p-4">
//       <PageHeader />
//       <div className="container mx-auto">
//         {cartCount > 0 ? (
//           // When cartCount is 1 or more
//           <div className="flex flex-col items-center">
//             <div className="w-full p-4 bg-white border rounded-lg shadow-md">
//               <h2 className="text-lg font-bold">Cart Summary</h2>
//               <div className="flex flex-col items-center gap-4 mt-4">
//                 {/* Assuming a single product example */}
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src={"/assets/Foundation.png"}
//                     width={150}
//                     height={150}
//                     alt="product image"
//                     className="w-[150px]"
//                   />
//                   <div className="flex flex-col text-[#222]">
//                     <p>Foundation</p>
//                     <p>$150.00</p>
//                     <p>Quantity: {cartCount}</p>
//                   </div>
//                 </div>
//                 <button
//                   className="mt-4 p-2 bg-[#e05b36] hover:scale-90 duration-300 ease-out text-white rounded"
//                   onClick={clearCart} // Clear the cart when the button is clicked
//                 >
//                   Clear Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           // When cartCount is 0
//           <div className="flex flex-col items-center mt-8">
//             <div className="w-full p-4 bg-white border rounded-lg shadow-md">
//               <h2 className="text-lg font-bold">Cart Summary</h2>
//               <p className="mt-4 text-center">Your cart is empty.</p>
//             </div>
//           </div>
//         )}
//       </div>
//       <FAQ />
//       <CTA />
//     </div>
//   );
// };

// export default Cart;

