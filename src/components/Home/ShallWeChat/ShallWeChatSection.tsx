import Image from 'next/image'

export const ShallWeChatSection = () => {
  return (
    <div className='pb-20'>
      <div className='flex bg-primary'>
        <div className='mx-auto max-w-[45rem] py-10 px-4'>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8'>
            <div>
              <span className='mb-4 block font-overlock font-black uppercase'>
                Shall we chat?
              </span>
              <span className='heading-2 font-extrabold text-neutral-900'>
                Let&apos;s make something amazing together Start by saying hi
              </span>
            </div>
            <Image
              src='/assets/images/big-open-envelope.png'
              width={177}
              height={200}
              alt='envelope'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
