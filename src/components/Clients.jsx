import React, { useEffect, useState } from 'react'
import maurar from '../assets/snowhouse/655f9aa704d10900bc66a0d2_Maurar.webp'
import fiskfela from '../assets/snowhouse/655f9ab9a40da73acc3dff42_Fiskfelagid.webp'
import myntcoin from '../assets/snowhouse/655f9ac83bc2c046908bbad7_Myntcoin.webp'
import defiance from '../assets/snowhouse/655f9adb1bb344c8bf4fdab6_Defiance.webp'
import som from '../assets/snowhouse/655f9aeb2dbab744e92a35c5_SOM.webp'
import eb from '../assets/snowhouse/655f9afab9f4b9721be7d27c_EB.webp'
import e2 from '../assets/snowhouse/655f9b0c20aa5fb18ebde66c_8020.webp'
// import  youballian  from '../assets/snowhouse/655f9b64ff1328d05ad5906f_Youballin.webp'
// import  pidge  from '../assets/snowhouse/655f9b512d19326ed5b418ef_Pidge.webp'
// import  kapito  from '../assets/snowhouse/655f9b746f83f1da02d368e9_Kaptio.webp'
// import  lysir  from '../assets/snowhouse/655f9b888fc1d1413f389b93_Lysir.webp'




const Clients = () => {
    const [translate, setTranslate] = useState(0)


    useEffect(() => {

        const key = setInterval(() => {
            setTranslate(prev => (prev - 0.104).toFixed(3))

        }, 50);
        return () => clearInterval(key)
    }, [])
    if (translate < -99) {
        setTranslate(0)
    }
    let secFour = -(100 + Number(translate)).toFixed(3)
    // console.log(secFour);
    return (
        <section className="flex flex-col tablet:gap-[.5rem] gap-[1rem] relative overflow-hidden">
            <div className='flex items-center w-full' >
                <div style={{ transform: `translate3d(${translate}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img src={maurar} loading='eager' alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img src={fiskfela} loading='eager' alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img src={myntcoin} loading='eager' alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img src={defiance} loading='eager' alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img src={som} loading='eager' alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img src={eb} loading='eager' alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img src={e2} loading='eager' alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
                <div style={{ transform: `translate3d(${translate}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
                <div style={{ transform: `translate3d(${translate}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
            </div>

            <div className='flex items-center w-full' >
                <div style={{ transform: `translate3d(${secFour}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
                <div style={{ transform: `translate3d(${secFour}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
                <div style={{ transform: `translate3d(${secFour}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0'>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
            </div>

            <div className='flex items-center w-full' >
                <div style={{ transform: `translate3d(${translate}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
                <div style={{ transform: `translate3d(${translate}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
                <div style={{ transform: `translate3d(${translate}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
            </div>

            <div className='flex items-center w-full' >
                <div style={{ transform: `translate3d(${secFour}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
                <div style={{ transform: `translate3d(${secFour}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform  tablet:pb-0'>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
                <div style={{ transform: `translate3d(${secFour}%,0px,0px)` }} className='flex-shrink-0 flex-grow-0 basis-auto will-change-transform tablet:pb-0 '>
                    <img loading='eager' src={maurar} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={fiskfela} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={myntcoin} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={defiance} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={som} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={eb} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                    <img loading='eager' src={e2} alt="" className='object-cover rounded-[1.5rem] w-[13rem] h-[10rem] mx-[.5rem] max-w-full inline-block align-middle border-0 tablet:mx-[.25rem]' />
                </div>
            </div>
        </section >
    )
}

export default Clients