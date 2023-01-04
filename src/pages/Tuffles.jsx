import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import bloghero from '../assets/bloghero.png'
import biscuit from '../assets/biscuit.png'
import { Helmet } from 'react-helmet'

function Tuffles() {
  return (
    <div>
      <Helmet>
    <title>Tuffles | chocboy!</title>
    <meta name="description" content='Chocboy Truffles' />
    <meta name='keyword' content='chocboy! chocolate nigeria order Shop Tuffles' />
    <link rel='canonical' href='/chocboy-truffles' />
    </Helmet>
        <Header heroText="Chocboy Truffles" 
        img={bloghero}
      />
        <main className='text-main text-xl px-4 lg:px-20 py-16'>

        <div className="space-y-4 text-center mb-8 lg:mb-20">
            <p><span className='font-bold'>Prep Time</span>- 10 mins</p>
            <p><span className='font-bold'>Cook Time</span>- 10 mins</p>
            <p><span className='font-bold'>Total Time</span>- 20 mins</p>
            <p><span className='font-bold'>Servings</span>– 10 – 15</p>
            <p> Make 2 Ingredient Chocboy Truffles in minutes featuring a lovely candy with a rich, chocolate shell.</p>
        </div>

        <div className="flex flex-col lg:flex-row mb-20 gap-4">
            <div className='w-full lg:w-1/2'>
                <h4  className='font-bold pb-4'>Ingredients</h4>
                <ul className="space-y-4 list-disc">
                    <li>                10 Oreo cookies</li>
                    <li>                12 tablespoons Chocboy chocolate spread</li>
                </ul>
            </div>
            <div className='w-full lg:w-1/2 justify-center grid place-items-center gap-4'>
                <img src={biscuit} alt="biscuit" sizes={20} />
            </div>
        </div>

        <div>
        <h4 className='font-bold pb-4'>Instructions</h4>
        <ol className="space-y-4 list-decimal">
            <li>            Place Oreos and Chocboy Chocolate Spread in the food processor and process until ball starts to form while the processor is running. This will take at least a minute, depending on your food processor.</li>
            <li>If truffle mixture is too soft to roll, chill for 15 minutes. Otherwise, scoop 1 tablespoon balls of truffle dough onto a wax paper lined cookie sheet.
            Chill for an additional 30 minutes.</li>
            <li> While the truffles are chilling, melt chocolate in the microwave in 30 second spurts for about 1 1/2 -2 minutes.
            </li>
            <li> once chilled dip each truffle in the chocolate. </li>
            <li>           Using a spoon or fork, swirl around in the melted chocolate making sure they truffle are thoroughly coated.</li>
            <li>           Place back on the cookie sheet, sprinkle with chopped toasted hazelnuts if desired. Chill to set then store in refrigerator for up to 5 days.</li>
        </ol>
            
        </div>
        </main>
      <Footer /> 
    </div>
  )
}

export default Tuffles