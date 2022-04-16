import { motion, AnimatePresence } from 'framer-motion'
import { app } from '@config'
import IceJIlogo from 'views/assets/logo/IceJIlogoS'
import RealMotionS from 'views/assets/logo/RealMotionS'

export default function about({
  toggleAbout,
  setToggleAbout,
}: {
  toggleAbout: boolean
  setToggleAbout: any
}) {
  return (
    <>
      <AnimatePresence>
        {toggleAbout && (
          <motion.div
            initial={{ y: '80%', opacity: 0 }}
            exit={{ y: '80%', opacity: 0 }}
            animate={{
              y: toggleAbout ? 0 : '80%',
              opacity: toggleAbout ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className='flex fixed z-90 justify-center items-center w-screen h-screen'
            onClick={() => setToggleAbout(false)}
          >
            <div className="overflow-hidden w-[339px] h-[182px] bg-[url('/gui/SplashBG.png')] rounded-md drop-shadow-xl md:w-[677px] md:h-[363px]">
              <div className='w-[150px] h-full text-white backdrop-blur-md md:w-1/3 bg-[#02717C]/30'>
                <div className='flex flex-col justify-between p-5 h-full md:py-10 md:pl-10'>
                  <div className='hidden md:block'>
                    <IceJIlogo fill='#FFF' />
                  </div>
                  <div>
                    <h4 className='text-1xs md:text-xs'>
                      TheIceJI {app.VERSION}
                    </h4>
                    <h6 className='text-1xs font-light opacity-90 md:text-xs'>
                      {app.UPDATE_DATE}
                    </h6>
                  </div>
                  <p className='text-2xs font-light opacity-60 md:text-1xs'>
                    Engine:
                    <br />
                    DyedIn UI 1.0 | IJN App 3.0
                    <br />
                    React 18.0 | NextJs 12.1.5
                    <br />
                    Copyright&#169;TheIceJI.com <br />
                    All rights reserved
                  </p>
                  <div className='hidden md:block'>
                    <RealMotionS fill='#FFF' />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
