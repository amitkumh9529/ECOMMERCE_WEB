import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, sunt aut ad animi expedita consequuntur cum consequatur cumque, eveniet sequi numquam officiis fugit quod dolores adipisci quaerat omnis sed error. Dolorem voluptatibus illo ullam, officiis autem, excepturi suscipit illum similique sint minus perferendis quam sunt vel. Veritatis commodi rerum in, perspiciatis architecto consectetur, voluptatem molestias, sint recusandae delectus odio asperiores.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iste, veritatis dolorum fugiat architecto molestiae. Reiciendis eum fuga sint quod velit, dolorem quo eaque quos magnam, veniam voluptates consequatur eos! Mollitia, ex molestiae? Delectus consequatur sunt nesciunt provident fuga accusantium, dicta dolor. Officia sit perferendis, exercitationem laboriosam quidem nihil ab rem ipsam numquam, aperiam, ipsum consequatur veritatis vitae sint nostrum.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia nesciunt quod, nostrum voluptas vitae eius accusamus ratione porro, molestias temporibus eveniet atque cum tempora rem magni similique aliquam enim. Rem ipsam ab aperiam molestias velit vel, recusandae blanditiis autem commodi maxime eos suscipit error quis accusamus facilis accusantium quidem ipsa soluta ducimus nihil dignissimos itaque. Illo, iusto eum! Possimus.</p>

        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit voluptate cum sunt quibusdam quia atque non, temporibus architecto expedita, sed soluta, odit magnam optio similique minima deserunt ratione voluptates.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit voluptate cum sunt quibusdam quia atque non, temporibus architecto expedita, sed soluta, odit magnam optio similique minima deserunt ratione voluptates.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer serv:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit voluptate cum sunt quibusdam quia atque non, temporibus architecto expedita, sed soluta, odit magnam optio similique minima deserunt ratione voluptates.</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About