import React from "react";
import Navbar from "./Navbar";

export default function Discount() {
    return(
        <>
        <section class="opacity-90 bg-yellow-500">
<br/>
<Navbar/>

    <br/>
    <h1 class="text-center justify-center text-5xl font-bold text-black">Get GoodWeedRx Discount Card for Free !</h1>
        <div class="max-w-lg mx-auto">
            <div class="w-full max-w-sm mt-6">
                <div class="flex lg:mt-8 flex-col md:flex-row">
                    <input type="text" placeholder="Search here" class="px-48 text-black dark:border-black flex-1 h-10 py-2 m-1 placeholder-black bg-white   dark:text-black" />
                     <br/>

                </div>
            </div>
            <p>Type in the to your favourite brand(GG4 , Cookies , Weeding Cakes)</p>

        </div>

<div class="container max-w-full mx-auto md:py-10 px-6">
  <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
            <div class="w-full relative">
                <div class="md:mt-6">
                    <div class="text-center text-3xl font-semibold text-black">
                        Mailing Adress
                    </div>
                    <form class="mt-8" x-data="{password: '',password_confirm: ''}">
                        <div class="mx-auto max-w-lg ">
                            <div class="py-1">
                                <span class="px-1 text-lg font-bold text-black">Full Name</span>
                                <input placeholder="" type="text"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-black shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-black focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-lg font-bold text-black">Email</span>
                                <input placeholder="" type="text"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-black shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-black focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-lg font-bold text-black">Street Address, P.O.Box</span>
                                <input placeholder="" type="text"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-black shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-black focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-lg font-bold text-black">Apt#Floor, Suite (Optional)</span>
                                <input placeholder="" type="text" x-model="password"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-black shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-black focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-lg font-bold text-black">Zip Code</span>
                                <input placeholder="" type="number" x-model="password_confirm"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-black shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-black focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-lg font-bold text-black">City</span>
                                <input placeholder="" type="text" x-model="password_confirm"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-black shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="flex justify-start mt-3 ml-4 p-1">
                            </div>
                            <div class="flex justify-start">
                                <label class=" text-black font-bold my-4 flex items-center">
                                    <input class="leading-loose text-pink-600 top-0" type="checkbox"/>
                                    <span class="ml-2 text-lg font-bold py-2 text-black text-left">
                                         Send me the GWRx Saving newsletter
                                    </span>
                                </label>
                            </div>
                            <button class="mt-3 text-lg font-semibold
            bg-black w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-gray-800">
                                Send me a saving card
                            </button>
                        </div>
                    </form>

                    {/* <div class="text-sm font-semibold  sm:hidden py-6 flex justify-center">
                        <a href="#"
                           class="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">You're already member?
                            <span class="text-black font-semibold">
            Login
          </span>
                        </a>
                    </div> */}

                </div>
            </div>
        </div>
    </div>
</div>
</section>
<section class="bg-green-200">
<body class="antialiased text-black mx-2">
    <div class="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div class="flex flex-row justify-between items-center bg-yellow-500 opacity-80" >
            <div>
                <h1 class="text-3xl font-medium ">GoodWeedRx</h1>
            </div>
            <div class="inline-flex space-x-2 items-center  ">
                <span class="p-2 inline-flex space-x-1 items-center text-black hover:text-black ">
                   
                      <span class="text-sm font-medium hidden md:block">Prescription Drugs</span>                     
                </span>
                <span class="p-2 text-black  inline-flex space-x-1 items-">
                   
                      <span class="text-sm text-black hidden md:block">Saving Cards</span>                    
                </span>
            </div>
        </div>
        <p class="text-black">Save upto 80% on medical Marijuana and CBD products; cloths from virtualy on the move by phone.</p>

        <div id="tasks" class="my-5">
            <div id="task" class="flex justify-between items-center border-b border-slate-200  px-2 border-l-4  border-l-transparent">
                {/* <div class="inline-flex items-center space-x-2"> */}
                {/* <div class="box-content h-12 w-32 p-8 flex flex-col flex-wrap border-4 bg-white  text-black"> */}
<span>or you can call the help hot line to sort your order within your customer account</span>


{/* <span>PCN  ASPROD1</span>
<span>GROUP AME08</span> */}

{/* </div> */}
                {/* </div> */}
                {/* <div class="lg:ml-8">
                  <h4>MEMBER ID</h4>
                  <h2 >GRX610010</h2>
                </div> */}
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                <div class="inline-flex items-center space-x-2">
                    <div class="text-black text-center">Customer Questions Call : 1-000(000)-0000</div>
                </div>
             
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                <div class="inline-flex items-center space-x-2">
                    <div>Pharmacist Questions call: 1-000(000)-0000</div>
                </div>
            </div>
          
           
        </div>
    </div>
    <div class="text-center justify-center flex flex-col lg:mt-6 p-6">
        <h2 class="text-2xl lg:my-4  font-semibold text-black">
            Use this card for discounts upto 80% off
        </h2>
        <h2 class="lg:my-4 text-2xl font-semibold text-black">
           Get discounts for every member of your family,including pets!
        </h2>
        <h2 class="text-2xl lg:my-4  font-semibold text-black">
        No expiration.No fees or obligations.No credit card required
        </h2>
    </div>
</body>
</section>
        </>
    );
}