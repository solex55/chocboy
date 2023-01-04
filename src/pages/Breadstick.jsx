import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import breadstickhero from '../assets/breadstickhero.png'
import mixa from '../assets/mixa.png'
import { Helmet } from 'react-helmet'

function Breadstick() {
  return (
    <div>
        <Helmet>
        <title>Breadstick | chocboy!</title>
        <meta name="description" content='Order Chocboy Mini Breadstick' />
        <meta name='keyword' content='chocboy! chocolate nigeria breadstick order' />
        <link rel='canonical' href='/chocboy-breadstick' />
      </Helmet>
        <Header heroText="Chocboy Mini Breadstick" 
            img={breadstickhero}
        />

        <main className='text-main text-xl px-4 lg:px-20 py-16'>

        <div className="flex flex-col lg:flex-row mb-20 gap-4">
            <div className='w-full lg:w-1/2'>
                <h4 className='font-bold pb-4'>Ingredients</h4>
                <ul className="space-y-4 list-disc">
                    <li>                210 grams Bread (strong) flour</li>
                    <li>                90 grams Cake flour</li>
                    <li>                60 grams Sugar</li>
                    <li>                5 grams Salt</li>
                    <li>                6 grams Dry yeast</li>
                    <li>                30 grams Warm water (for the yeast)</li>
                    <li>                Egg & milk mix</li>
                    <li>                95 grams Milk</li>
                    <li>                60 grams Egg</li>
                    <li>                45 grams Unsalted butter (or unsalted margarine)</li>
                    <li>                80 grams Chocboy Chocolate Spread</li>
                </ul>
            </div>

            <div className='w-full lg:w-1/2 '>
                <img src={mixa} alt="recipe" sizes={200} />
            </div>
        </div>

        <div>
            <h4 className='font-bold pb-4'>Instructions</h4>
            <ol className='space-y-4 text-justify list-decimal'>
                <li>            Measure the ingredients out accurately.</li>
                <li>            Activate the yeast in 30℃ warm water. Add the powder ingredients, sugar and salt to a bowl and mix.</li>
                <li>            Make a well in the middle of the dry ingredients and add the yeast mixture with the milk and egg mixture. Mix well until the dough forms a ball (don't add the butter yet).</li>
                <li>            Turn out onto a work surface and knead for a minute until smooth. To knead, pound the dough with the heel of your hand, fold it in half, turn and repeat.</li>
                <li>            Once the dough is smooth, add the butter and knead as you did previously. (The dough will be sticky but keep at it without resorting to dusting the counter).</li>
                <li>            Pour warm water (30℃) to a large bowl. Put the bowl with the dough on top, cover with plastic wrap and proof for 90 minutes until doubled in size (you could also use a bread maker up to this step).</li>
                <li>            Turn the dough seal up and roll out with a rolling pin. Place 4 g of Chocboy Chocolate Spread on the top half and roll the dough upwards from the bottom. Once rolled, stretch to about 14-15 cm in length.</li>
                <li>            If you're using the proofing setting on your oven, add hot water to the baking pan for the bottom rack of the oven to prevent the dough from drying out. Prove for 20 minutes and the dough should rise a little.</li>
                <li>            Separate into 20 portions and roll into balls. Cover with a moistened cloth and let rest for 20 minutes.</li>
                <li>            Bake for 10 minutes in oven preheated to 170°C.</li>
            </ol>
        </div>
        </main>
        <Footer /> 
    </div>
  )
}

export default Breadstick