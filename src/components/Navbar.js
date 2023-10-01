export default function Navbar() {
    return(
<>
<nav class=" dark:bg-green-300 border border-black rounded object-contain h-12">

    <div class=" container flex items-center mb-6  justify-evenly text-center p-6 mx-auto text-black capitalize dark:text-black">

        <a href="/" class=" -mt-4 text-gray-800 transition-colors duration-300 transform dark:text-black border-b-2 border-black mx-1.5 sm:mx-6">Home</a>

        <a href="/dr-visit" class=" -mt-4 border-b-2 border-transparent hover:text-black transition-colors duration-300 transform dark:hover:text-black hover:border-black mx-1.5 sm:mx-6">Doctor Visits</a>

        <a href="/discount-card" class=" -mt-4 border-b-2 border-transparent hover:text-black transition-colors duration-300 transform dark:hover:text-black hover:border-black mx-1.5 sm:mx-6">Discount Cards</a>

        <a href="/account" class=" -mt-4 border-b-2 border-transparent hover:text-black transition-colors duration-300 transform dark:hover:text-black hover:border-black mx-1.5 sm:mx-6">Account</a>

        <a href="/gwrx-and-more" class=" -mt-4 border-b-2 border-transparent hover:text-black transition-colors duration-300 transform dark:hover:text-black hover:border-black mx-1.5 sm:mx-6">GWRX and More</a>

    </div>
    </nav>
</>
    );
}