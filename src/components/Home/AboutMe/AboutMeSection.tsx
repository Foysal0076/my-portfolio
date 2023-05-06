import OutlinedButton from '@/components/common/OutlinedButton'

export const AboutMeSection = () => {
  return (
    <>
      <div className='lg:border-t-2 lg:border-b-2 lg:border-y-neutral-800'>
        <div className='container max-w-5xl py-2 lg:bg-neutral-900 lg:py-10'>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='basis-3/12 text-center lg:text-left'>
              <h2 className='heading-2 mb-2 text-primary-500'>About Me</h2>
              <h3 className='mb-- lg:mb-8'>
                Mohammad <br /> Mosharrof <br /> Hossain
              </h3>
              <div className='hidden lg:block'>
                <OutlinedButton onClick={() => {}}>Download CV</OutlinedButton>
              </div>
            </div>
            <div className='basis-3/4 text-center lg:text-left'>
              <p className='body-1 mb-4'>
                With 7+ years of experience as a UI/UX Designer, I bring a
                unique combination of technical proficiency and creative vision
                to every project. I excel in conducting user research, creating
                prototypes, and conducting design testing, and am proficient in
                using Figma, Adobe XD, Photoshop, and Illustrator. I have a
                proven track record of working effectively with cross-functional
                teams to deliver outstanding user experiences. Whether it&apos;s
                a standalone project or as part of a team, my goal is to help
                businesses and organizations achieve their objectives and
                succeed online. I am excited to collaborate with you on your
                next project!
              </p>
              <p className='body-1 mb-4'>
                Staying up-to-date with the latest design trends and
                technologies is a passion of mine, and I am committed to
                constantly improving my skills to better serve my clients. I am
                a reliable and dedicated professional, always striving to meet
                project deadlines and produce top-quality work.
              </p>
              <p className='body-1 mb-4 lg:mb-0'>
                Whether it&apos;s a standalone project or as part of a team, my
                goal is to help businesses and organizations achieve their
                objectives and succeed online. I am excited to collaborate with
                you on your next project!
              </p>
            </div>
            <div className='mx-auto mb-6 lg:hidden'>
              <OutlinedButton onClick={() => {}}>Download CV</OutlinedButton>
            </div>
          </div>
        </div>
      </div>
      <div className='container max-w-5xl py-2 lg:py-10 '>
        <div className='flex flex-col justify-center gap-6 lg:flex-row lg:gap-8'>
          <div className='basis-1/3 border border-neutral-800 bg-neutral-900 px-4 py-4 text-center lg:max-w-[240px]'>
            <span className='subtitle-1 block text-primary-500'>7+</span>
            <span className='subtitle-1 block'>Years Experience</span>
          </div>
          <div className='basis-1/3 border border-neutral-800 bg-neutral-900 px-4 py-4 text-center lg:max-w-[240px]'>
            <span className='subtitle-1 block text-primary-500'>47+</span>
            <span className='subtitle-1 block'>Handled Projects</span>
          </div>
          <div className='basis-1/3 border border-neutral-800 bg-neutral-900 px-4 py-4 text-center lg:max-w-[240px]'>
            <span className='subtitle-1 block text-primary-500'>550+</span>
            <span className='subtitle-1 block'>Worldwide Clients</span>
          </div>
        </div>
      </div>
    </>
  )
}
