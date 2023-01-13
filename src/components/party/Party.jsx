import React from 'react'
import partychoc from '../../assets/chocboyparty.png';
import partychoc1 from '../../assets/image14.png';
import partychoc2 from '../../assets/choc15.png';
import partychoc3 from '../../assets/choc16.png';
import partychoc4 from '../../assets/choc17.png';
import partychoc5 from '../../assets/choc18.png';
import partychoc6 from '../../assets/choc19.png';
import ticket from '../../assets/image7.png';

function Party() {
  return (
    <div className='py-16 mx-8 lg:mx-24 '>
        <div>
            <h3 className='text-2xl sm:text-4xl text-main text-center pb-8 font-semibold'>ChocParty 2022</h3>
            <div className='pb-8 w-full h-56 sm:h-full lg:h-[500px]'>
                <img src={partychoc} alt="partychocboy" className='h-full w-full'/>
            </div>
        </div>

        <div className='text-justify'>
            <p className='pb-8'>
                The ChocParty, which was conceived out of the need to provide an avenue for families and friends to bond, not just with one another, but also with other people, will this year host its 10th consecutive edition and with the endorsement of Oyo State Ministry of Youths and Sports. From its first edition of over 700 people in attendance to last year’s edition that had over 12,000 vibrant youths and fun-loving ages in attendance, The ChocParty has been a hit back to back. This year will be not be an exemption! 
            </p>
            <p className='pb-8'>
                ChocParty is a specially organized event that is deliberately packed with fun-loving activities and an “experience” that can only be unlocked by your attendance.
            </p>
            <p className='pb-8'>
                Experience, that one thing we guarantee at ChocParty, is the reason we double our creative efforts every year. We ensure that each attendee is served fun at every turn and offered excitement at every sight. It is therefore not much of a surprise that our attendance has grown in leaps and bounds as the years pass.            
            </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 py-16'>
            <div className='w-full lg:w-1/2 h-72 lg:h-full'>
                <img src={ticket} alt="" className='w-full rounded h-full'/>
            </div>
            <div className='flex flex-col w-full lg:w-1/2 justify-center'>
                <input type="text" name="ticket" id="ticket"placeholder='Enter Your Name'  className='form-control mb-4 block w-full  bg-clip-padding border border-solid border-gray-400 transition ease-in-out m-0  px-4 py-2 text-xl font-normal text-gray-700 bg-white rounded focus:text-gray-700 focus:border-bg-main' />
                <input type="submit" value="Ticket" className='bg-sec text-main text-2xl rounded-md cursor-pointer px-4 py-2 font-semibold'  />
            </div>
        </div>


        <div>
            <div className='flex flex-col lg:flex-row pb-8 gap-8'>
                <div className='w-full lg:w-1/2'>
                    <img src={partychoc1} alt="" className='w-full transform transition-all hover:scale-125' />
                </div>
                <div className='w-full lg:w-1/2'>                    
                    <img src={partychoc2} alt="" className='w-full transform transition-all hover:scale-125' />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row  pb-8 gap-8'>
                <div className='w-full lg:w-1/2'>
                    <img src={partychoc3} alt="" className='w-full transform transition-all hover:scale-125' />
                </div>
                <div className='w-full lg:w-1/2'>                    
                    <img src={partychoc4} alt="" className='w-full transform transition-all hover:scale-125' />
                </div>
            </div>
            <div  className='flex flex-col lg:flex-row pb-8 gap-8'>
                <div className='w-full lg:w-1/2'>
                    <img src={partychoc5} alt="" className='w-full transform transition-all hover:scale-125' />
                </div>
                <div className='w-full lg:w-1/2'>                    
                    <img src={partychoc6} alt="" className='w-full transform transition-all hover:scale-125' />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Party