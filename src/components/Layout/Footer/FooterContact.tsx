import Image from 'next/image'

const FooterContact = () => {
  return (
    <>
      <h2 className='subtitle-1 mb-4'>
        <span className='heading-4 flex h-[45px]  items-center  lg:h-auto'>
          Mosharrof
          <span className='font-extrabold text-primary-500'>.</span>
        </span>
      </h2>
      <p className='body-1'>
        Let&apos;s work together to bring your design vision to life. Contact me
        today to start your next project. This message can inspire visitors to
        take action and reach out to you for your services.
      </p>
      <address className='mt-8 mb-4 not-italic'>
        <span className='body-1 mb-4 inline-block font-overlock font-[900] text-neutral-900 dark:text-neutral-0'>
          {' '}
          Inquiries
        </span>

        <div className='mb-2 flex gap-2'>
          <Image
            src={'/assets/images/envelope.png'}
            height={24}
            width={24}
            alt=''
          />
          <a
            className='text-primary-500 underline'
            href={`mailto:contact@mosharrof.com`}>
            contact@mosharrof.com
          </a>
        </div>

        <div className='mb-2 flex gap-2'>
          <Image
            src={'/assets/images/whatsapp.png'}
            height={24}
            width={24}
            alt=''
          />
          <a
            className='text-[#47C757] underline'
            href={`whatsapp://send?abid=+8801615966703&text=Say Hi! to Mosharrof`}>
            +8801615966703
          </a>
        </div>

        <p className='body-1 mt-8 mb-4'>
          <span className='font[900] text-neutral-900 dark:text-neutral-0'>
            Address 1:
          </span>{' '}
          Shirajuddin Sarkar Road, Dattapara, Islampur, Tongi, Gazipur, Dhaka -
          1712
        </p>
        <p className='body-1'>
          <span className='font[900] text-neutral-900 dark:text-neutral-0'>
            Address 2:
          </span>{' '}
          House:31, Road:2, Block: E, Uposhohar Sylhet - 3100
        </p>
      </address>
    </>
  )
}

export default FooterContact
