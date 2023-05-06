import TestimonialCard from '@/components/Home/Testimonials/TestimonialCard'
import SectionHeader from '@/components/common/SectionHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

type Testimonial = {
  author: string
  authorDesignation: string
  testimonial: string
}
const testimonials: Testimonial[] = [
  {
    author: 'Osman Goni',
    authorDesignation: 'Fronted Developer',
    testimonial:
      'I was impressed with Mosharrof&apos;s ability to work within tight deadlines without compromising on the quality of his work. He truly went above and beyond to ensure my project was completed on time and to my satisfaction.',
  },
  {
    author: 'Foysal Ahmed',
    authorDesignation: 'Fronted Developer',
    testimonial:
      'From start to finish, Mosharrof was pleasure to work with. His design work was top-notch and his customer service was exceptional - I would recommend him to anyone looking for a designer who truly cares about his clients.',
  },
  {
    author: 'Hamim Ur Rahman',
    authorDesignation: 'Fronted Developer',
    testimonial:
      '“I highly recommend Mosharrof for anyone looking for a talented and professional designer. His expertise in UX/UI design was invaluable in creating a user-friendly and visually appealing website.”',
  },
  {
    author: 'Ashfaqul Karim',
    authorDesignation: 'Fronted Developer',
    testimonial:
      'I appreciated Mosharrof&apos;s clear communication and responsiveness throughout the design process. They truly took the time to understand my needs and preferences, resulting in a design that was perfectly tailored to my business.',
  },
]

const TestimonialSection = () => {
  return (
    <div className='py-16 lg:py-20'>
      <div className='container max-w-screen-2xl '>
        <SectionHeader
          title='My Achievement'
          heading='Testimonial'
          paragraph='I have received glowing testimonials from satisfied clients, highlighting my ability to deliver high-quality design work and exceptional customer service.'
        />
        <div className='testimonial-slider relative mt-14 md:mt-10'>
          <div className='container hidden max-w-7xl justify-end gap-4 pb-6 md:flex'>
            <div id='prev-btn-slider' className='cursor-pointer'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                <Image
                  src='/assets/images/arrow-left-45.svg'
                  alt='arrow-left'
                  width={12}
                  height={8}
                />
              </div>
            </div>
            <div id='next-btn-slider' className='cursor-pointer'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                <Image
                  src='/assets/images/arrow-right-45.svg'
                  alt='arrow-right'
                  width={12}
                  height={8}
                />
              </div>
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={3}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: `#next-btn-slider`,
              prevEl: `#prev-btn-slider`,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 2.4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 2.6,
                spaceBetween: 25,
              },
              1366: {
                slidesPerView: 3.5,
                spaceBetween: 25,
              },
            }}>
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.author}>
                <TestimonialCard
                  author={testimonial.author}
                  designation={testimonial.authorDesignation}
                  testimonial={testimonial.testimonial}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='container flex max-w-7xl justify-center gap-4 pt-6 md:hidden'>
            <div id='prev-btn-slider' className='cursor-pointer'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                <Image
                  src='/assets/images/arrow-left-45.svg'
                  alt='arrow-left'
                  width={12}
                  height={8}
                />
              </div>
            </div>
            <div id='next-btn-slider' className='cursor-pointer'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                <Image
                  src='/assets/images/arrow-right-45.svg'
                  alt='arrow-right'
                  width={12}
                  height={8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
