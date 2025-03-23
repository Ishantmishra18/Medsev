import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import Btn from '../Components/btn'
import Input from '../Components/input'

const landing = () => {

  const [show , setShow]= useState(false);

  return (
    <div className='h-screen w-screen overflow-x-hidden'
    style={{ backgroundImage: "url('https://media.tenor.com/8Nb3teYhZy0AAAAm/elyx-elyxyak.gif')" }}>
      {show&&<div className='h-screen w-screen backdrop-blur-2xl grid place-content-center absolute top-0'>
          <Input setShow={setShow}/>
        </div>}
        <div className="card mt-[15vh] ml-[10vw] w-[35vw] flex flex-col  gap-[6vh] items-start">
            <h2 className='text-sm'>purpose of medsev</h2>
            <h1 className=' text-5xl  font-semibold'>Detailed Diagonose <br /> of your body</h1>
            <h4 className='text-xl'>we are here to help you out to undestand your body , we take responsibity to cure you or protect you from future disease</h4>
        </div>
        <div className="btncont w-screen px-[10vw] flex justify-between mt-[6vh]">
                <div className="btn  px-6 rounded-full py-3 border-2 border-black cursor-pointer" onClick={()=>{setShow(true)}}>Make an Appoint</div>
                <Btn text={'chat with our chatbot'} link={'/chatbot'}/>
            </div>
            <div className="belowbar flex p-10 justify-between rounded-t-[6vw] border-2 rounded-b-4xl border-neutral-300 mt-[8vh] bg-neutral-200">
                <h2 className='text-6xl font-semibold'>01</h2>
                <div className="w-[30%] mr-60">
                    <h2>first central</h2>
                    <h2 className='text-2xl font-semibold'>the new way to do things is quite good and I want it to happen</h2>
                </div>
                <p className='w-[45%]'>this is the real world problem and we are taking serios initiative to build something which can work well in this world and we will not gonna backoff a bit</p>
            </div>



            <div className="flex p-10 justify-between w-screen">
              <div className="card h-[90vh] p-3 w-[35vw] rounded-4xl bg-amber-500 flex flex-col justify-end">

                <div className="about w-full rounded-2xl h-[20%] bg-amber-600"></div>
              </div>
              <div className="right h-[90vh] w-auto flex flex-col justify-between">
                <div className="h-[60vh] w-full flex gap-5">
                  <div className="flex flex-col items-start w-[30vw]">
                    <h2 className='mb-8'>this is article page you can all artical here you want to make any changes you can </h2>
                    <Btn text={'you can view'} link={'/article'}/>
                  </div>
                  <div className="w-[20vw] h-full bg-amber-500 rounded-4xl"></div>
                </div>
                <div className="belowpoint w-[50vw] h-[20vh] rounded-2xl border-2 border-neutral-300 bg-neutral-200  ">

                </div>
              </div>
            </div>
    </div>
  )
}

export default landing