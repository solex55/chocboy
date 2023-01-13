import React from 'react'
import teamline from '../../assets/teamline.png'
import Oluwajare from '../../assets/Oluwajare.png'
import Otomudo from '../../assets/Otomudo.png'
import Oluwafunmilayo from '../../assets/wurf.png'
import Wuraola from '../../assets/olu.png'
import './team.css'

function Team() {
  return (
    <div className='text-center mt-16 mb-16 h-screen'>
        <p  className=' font-bold text-3xl text-main'>Our Team</p>

        <div className='team_container'>
            <img src={teamline} alt="teamline" className='teamline' />
            <div className='team_member_card flex flex-col lg:flex-row '>
                <div className='flex gap-4 w-full'>
                  <div className='flex flex-col transform -translate-y-8'>
                    <img src={Oluwajare} alt="Oluwajare" className="" /> 
                    <p className="font-bold text-lg text-sub">Jare Fola Bolumole</p>
                    <p className="text-main">Founder</p>
                  </div>
                  <div className='flex flex-col transform translate-y-0 sm:translate-y-8'>
                    <img src={Wuraola} alt="Wuraola" className="pb-2" /> 
                    <p className="font-bold text-lg text-sub">Wuraola Olasupo</p>
                    <p className="text-main">Head of Finance</p>
                  </div>
                </div>

                <div className='flex gap-4 w-full'>
                  <div className='flex flex-col transform -translate-y-8'>
                    <img src={Otomudo} alt="Oluwafunmilayo" className="pb-2" /> 
                    <p className="font-bold text-lg text-sub">Gloria Otomudo</p>
                    <p className="text-main">General Manager</p>
                  </div>
                  <div className='flex flex-col transform translate-y-0 sm:translate-y-8'>
                    <img src={Oluwafunmilayo} alt="Otomudo" className="pb-2" /> 
                    <p className="font-bold text-lg text-sub">Oluwafunmilayo Adekunle</p>
                    <p className="text-main">Haed of Business development</p>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Team