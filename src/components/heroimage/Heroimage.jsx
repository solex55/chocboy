import React from 'react'
import Heromain from '../../assets/heromain.jpg';
import Heroimg from '../../assets/navbar-img.png';

function Heroimage() {
  return (
        <section class="bg-white dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    
                    <a href="https://google.com" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Speak to Sales
                    </a> 
                </div>
                <div class="mt-0 col-span-5 ">
                    <img src={Heromain} alt="mockup" />
                </div>                
            </div>

            <img src={Heroimg} alt="hero-pic"/>

        </section>
  )
}

export default Heroimage