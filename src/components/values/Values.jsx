import React from 'react'

function Values() {
    const valueData = [
        {   id: 1,
            img: require("../../assets/effort.png"),
            desc: "Diligence"
        },
        {   id: 2,
            img: require("../../assets/fair-play.png"),
            desc: "Passion"
        },
        {   id: 3,
            img: require("../../assets/passionate.png"),
            desc: "Fairness"
        },
        {   id: 4,
            img: require("../../assets/smiley.png"),
            desc: "Smiley"
        }
    ]


  return (
    <div className='flex flex-col justify-center items-center text-sub mx-8 lg:mx-20 py-16'>
        <p className='mb-8 font-bold text-center text-3xl'>Our Core Values</p>

        <div className="flex items-center justify-between w-full" >
        { valueData.map((data) => ( 
            <div className='flex flex-col' id={data.id}>
                <div className="valsImg">                <img src={data.img} alt="Chocboy-Values" className='h-full' /></div>
                <p className='text-lg'>{data.desc}</p>
            </div>
         ))}

        </div>
        
    </div>
  )
}

export default Values