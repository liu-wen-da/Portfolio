import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [from, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  
  const handelchange = (e) => {}
  
  const handelSubmit = (e) => {}


  return(
    <div className={'xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>

        <form
          ref = {formRef}
          onSubmit = {handelSubmit}
          className='mt-12 flex flex-col gap-8'>

          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Name
              </span>

              <input
                type='text'
                name='name'
                value={from.name}
                onChange={handelchange}
                placeholder='Your Name'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>

          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Email
              </span>

              <input
                type='email'
                name='email'
                value={from.email}
                onChange={handelchange}
                placeholder='Your Email'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>

          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Message
              </span>

              <textarea
                rows={7}
                name='message'
                value={from.message}
                onChange={handelchange}
                placeholder='Your Message'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          
          <button
           type='submit'
           className='bg-tertiary py-3 px-8 outline-none w-fit texy-white font-blod shadow-md shoadow-primary hover:shadow-secondary rounded-xl'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

      </motion.div>

      


    </div>
  )
}

export default SectionWrapper(Contact, "contact")