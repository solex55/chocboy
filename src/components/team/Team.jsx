import React from 'react'
import teamline from '../../assets/teamline.png'
import Oluwajare from '../../assets/Oluwajare.png'
import Otomudo from '../../assets/Otomudo.png'
import Oluwafunmilayo from '../../assets/wurf.png'
import Wuraola from '../../assets/olu.png'
import './team.css'

function Team() {
  return (
    <div className='text-center my-20 h-screen'>
        <p  className=' font-bold text-3xl text-main'>Our Team</p>

        <div className='team_container'>
            <img src={teamline} alt="teamline" className='teamline' />
            <div className='team_member_card flex flex-col lg:flex-row'>
                <div className='flex gap-4 w-full'>
                  <div className='flex flex-col gap-2 pb-8'>
                    <img src={Oluwajare} alt="" className="pb-2" /> 
                    <p>Founder</p>
                  </div>
                  <div className='flex flex-col gap-2 pt-8'>
                    <img src={Otomudo} alt="" className="pb-2" /> 
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>

                <div className='flex gap-4 w-full'>
                  <div className='flex flex-col gap-2 pb-8'>
                    <img src={Oluwafunmilayo} alt="" className="pb-2" /> 
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className='flex flex-col gap-2 pt-8'>
                    <img src={Wuraola} alt="" className="pb-2" /> 
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Team