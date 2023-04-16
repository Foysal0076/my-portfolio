const Copyright = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='container max-w-screen-xl'>
      <div className='flex flex-wrap gap-2 py-5'>
        <p className='body-1'>
          © Copyright {currentYear} . All rights reserved.
        </p>
        <p className='body-1 md:ml-auto'>
          Designed by,{' '}
          <a href='#' className='text-link underline'>
            Mosharrof
          </a>{' '}
        </p>
      </div>
    </div>
  )
}

export default Copyright
