import React from 'react'
import teamline from '../../assets/teamline.png'
import first from '../../assets/43.png'
import './team.css'

function Team() {
  return (
    <div className='text-center my-20'>
        <p  className=' font-bold text-3xl text-main'>Our Team</p>

        <div className='team_container'>
            <img src={teamline} alt="teamline" className='teamline' />
            <div className='team_member_card gap-4 flex flex-col lg:flex-row'>
                <div className='flex justify-between w-full'>
                  <div className='flex flex-col gap-5 pb-8'>
                    <img src={first} alt="" className="pb-2" /> 
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className='flex flex-col gap-5 pt-8'>
                    <img src={first} alt="" className="pb-2" /> 
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>

                <div className='flex justify-between w-full'>
                  <div className='flex flex-col gap-5 pb-8'>
                    <img src={first} alt="" className="pb-2" /> 
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className='flex flex-col gap-5 pt-8'>
                    <img src={first} alt="" className="pb-2" /> 
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Team