import drone from "./drone.png";
import drtwo from "./drtwo.png";
import consultant from "./consultant.png";
import chat from "./chat.png";
import leaf from "./leaf.png";
import Navbar from "./Navbar";


export default function Doctor () {
    return(
        <div>
        <>
  <header class="bg-white dark:bg-yellow-500">
    <br></br>
      
    <Navbar/>

    <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-3xl font-semibold text-black dark:text-black lg:text-4xl">Meet with our Online Doctors</h1>
                    
                    <p class="mt-4 text-black dark:black">Medical Marijuana card start at $120</p>
                    <p class="mt-4 text-black dark:black">Available Nationwide with licensed Medical Providers</p>

                    
                    <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-black rounded-md lg:w-auto hover:bg-green-300 focus:outline-none focus:bg-blue-500">Start your visit</button>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-1/2 h-1/2 lg:max-w-3xl" src={drone} alt=""/>
            </div>
        </div>
    </div>
</header>
<div class="container lg:p-6 bg-slate-400 lg:min-w-full text-center justify-center ">
<button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-black rounded-md lg:w-auto hover:bg-green-300 focus:outline-none focus:bg-blue-500">Our Services</button>
<h2 class="text-2xl font-semibold mt-6">From virtual consultation,our full range of medical services have you covered </h2>
</div>
<header class="bg-white dark:bg-green-200">
   

   <div class="container px-6 py-16 mx-auto flex-wrap">
       <div class="items-center lg:flex">
           <div class="w-full lg:w-1/2">
               <div class="lg:max-w-lg flex-wrap flex-shrink">
                   <h1 class="text-3xl font-semibold text-black dark:text-black lg:text-4xl">Everyday Consultation</h1>
                   
                   <p class="mt-4 text-black dark:black">Medical Marijuana card</p>
                   <p class="mt-4 text-black dark:black">Generaly those who need medical marijuana,range from those suffering from severe pain,insomnia,anxiety,glaucoma,HIV/AIDS,epilepsy, and any other ailment that the physician deems the use of medical marijuana is fit for</p>
                   <h4 class="mt-4 text-black dark:black font-semibold text-2xl">Primary Care</h4>
                   <p class="mt-4 text-black dark:black">General visit, One time fee charge for doctor visit.One prescription for medical marijuana</p>

                   
                   <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-black rounded-md lg:w-auto hover:bg-green-300 focus:outline-none focus:bg-blue-500">Start your visit</button>
               </div>
           </div>

           <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
               <img class="w-1/2 h-1/2 lg:max-w-3xl" src={drtwo} alt=""/>
           </div>
       </div>
   </div>
</header>
<div class="flex flex-col bg-yellow-500">
    <h2 class="text-center justify-center text-3xl font-semibold py-4">How it Works</h2>
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
    <div class=" inline-block min-w-full sm:px-6 lg:px-8 bg-yellow-500">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <tbody>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 bg-white py-4 whitespace-nowrap">
               <img class="items-center px-28" src={consultant} alt=''/>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 bg-white py-4 whitespace-nowrap">
              <img class="px-20" src={chat} alt='Picture'/>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 bg-white py-4 whitespace-nowrap">
              <img class="px-20" src={leaf} alt='Picture'/>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1 : Start your virtual consultation
             
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               1 : Chat with your live doctor
            
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                1 : Get your live medication today
               
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
              2 : Connect with our clinic and tell us about your condition and medical history 
              </td>
              
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              2 : Discuss with your Doctor your Symptoms and get prescribed 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              2 : Get your medication ordered today
              </td>
              
            </tr>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
              3 : Get secure online access to clinic specialist, Speak with our top specialist
              </td>
              
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              3 : Make informed decissions about your doctor.Address conditions that ain't improving with your care</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              3 : Receive your medication by via delivery , via same day pick you
              </td>
              
            </tr>
          </tbody>
        </table>

      </div>
      
    </div>

  </div>
<div>
<button class=" text-center justify-center w-auto px-6 py-2 lg:ml-[600px] mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-black rounded-md lg:w-auto hover:bg-green-300 focus:outline-none focus:bg-blue-500">Start your visit</button>

</div>
</div>

        </>
    </div>
    );
    
}
