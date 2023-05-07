import { ExperienceCompany } from '@/components/Home/WorkExperience/ExperienceCompany'
import ExperienceHeader from '@/components/Home/WorkExperience/ExperienceHeader'

export const WorkExperience = () => {
  return (
    <div className='py-16 lg:py-20'>
      <div className='container max-w-5xl '>
        <ExperienceHeader />
        <div className='hidden md:block'>
          <div className='flex flex-col gap-2 md:flex-row md:gap-8'>
            <div className='grow pb-4 md:basis-1/4 md:pb-8'>
              <ExperienceCompany
                company='Staff Asia'
                location='Al Oli Center, House:32, Road:2, Block:E, Uposhohar Sylhet, 3100 '
                from='Jan 2021'
                logo='/assets/images/staff-asia-logo.png'
                isPresent
              />
            </div>
            <div className='experience-connect-line-1  w-[1px] border-r border-dotted border-primary md:block' />
            <div className='grow pb-4 md:basis-9/12 md:pb-8'>
              <h3 className='heading-4 mb-2'>UI/UX Designer</h3>
              <p className='body-2 text-justify'>
                As a UI/UX Designer, I recently drove the company&apos;s product
                strategy plan. I played a key role in establishing new brand
                guidelines across subsidiary groups, ensuring a consistent
                professional image. I designed and supervised the creation of
                subsidiary websites and products, collaborating with a design
                and development team to bring my vision to life. Additionally, I
                led a significant redesign of the company&apos;s website, app
                and software solutions, resulting in an improved user-friendly
                and visually appealing experience for customers.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-2 md:flex-row md:gap-8'>
            <div className='grow pb-4 md:basis-1/4 md:pb-8'>
              <ExperienceCompany
                company='Deqode'
                location='Fortune Business Centre, Kaspate Wasti, Wakad, Pune: 411057. Maharashtra, India.'
                from='May 2016'
                to='Dec 2022'
                logo='/assets/images/deqode-logo.png'
                isRemote
              />
            </div>
            <div className='experience-connect-line-2 w-[1px] border-r border-dotted border-primary md:block' />

            <div className='grow pb-4 md:basis-9/12 md:pb-8'>
              <h3 className='heading-4 mb-2'>UI/UX Designer</h3>
              <p className='body-2 mb-4 text-justify'>
                At Deqode, I served as a remote UI/UX Designer, where I was
                responsible for the design and development of websites and
                applications. I collaborated with cross-functional teams to
                understand the client&apos;s business requirements and delivered
                exceptional user experiences.
              </p>

              <div className='mb-4'>
                <p className='body-2'>My responsibilities included:</p>
                <ul className='body-2 mb-4 list-disc pl-8'>
                  <li>
                    Conducting user research to understand their needs and
                    preferences
                  </li>
                  <li>Sketching and wireframing concepts and ideas</li>
                  <li>Creating prototypes and testing designs for usability</li>
                  <li>
                    Developing UI/UX design strategies and visual design systems
                  </li>
                  <li>
                    Creating high-fidelity designs in Figma, Adobe XD,
                    Photoshop, and Illustrator6
                  </li>
                  <li>
                    Staying current with design trends and technologies to
                    deliver innovative solutions
                  </li>
                </ul>
                <p className='body-2 mb-4'>
                  I was committed to meeting project deadlines and producing
                  high-quality work. Through my design skills and experience, I
                  was able to help Deqode&apos;s clients achieve their goals and
                  succeed online.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 md:flex-row md:gap-8'>
            <div className='grow pb-4 md:basis-1/4 md:pb-8'>
              <ExperienceCompany
                company='Launch a Project'
                location='74 Agrabad C/A, Jahan Building 5, Chattogram, 4100'
                from='Oct 2021'
                to='Jun 2022'
                logo='/assets/images/lap-logo.png'
                isRemote
              />
            </div>
            <div className='experience-connect-line-3  h-1 w-[1px] border-r border-dotted border-primary md:block' />
            <div className='grow pb-4 md:basis-9/12 md:pb-8'>
              <h3 className='heading-4 mb-2'>UI/UX Designer</h3>
              <p className='body-2 mb-4'>
                I was responsible for both the operational and creative aspects
                of the business in my previous role as Chief Operating Officer
                and UI/UX Designer for this company. I led the redesign of our
                digital platforms using my expertise in user experience design,
                resulting in an intuitive and seamless user experience for our
                customers. At the same time, I was in charge of overseeing the
                company&apos;s day-to-day operations, ensuring that all
                departments ran smoothly.
              </p>
              <p className='body-2'>
                I was able to successfully balance my creative and operational
                responsibilities, resulting in increased customer satisfaction
                and a healthy bottom line. I also mentored and managed a
                talented design team, assisting them in developing their skills
                and reaching their full potential. Through my leadership, the
                company was able to reach new heights and achieve outstanding
                results.
              </p>
            </div>
          </div>
        </div>

        {/* For Mobile */}
        <div className='block md:hidden'>
          <div className='flex gap-8'>
            <div className='experience-connect-line-1 ml-4  w-[1px] basis-[3rem] border-l border-dotted border-primary md:block' />
            <div className='pb-8'>
              <ExperienceCompany
                company='Staff Asia'
                location='Al Oli Center, House:32, Road:2, Block:E, Uposhohar Sylhet, 3100 '
                from='Jan 2021'
                logo='/assets/images/staff-asia-logo.png'
                isPresent
              />
              <div className='pb-2'></div>
              <h3 className='heading-4 mb-2'>UI/UX Designer</h3>
              <p className='body-2 text-justify'>
                As a UI/UX Designer, I recently drove the company&apos;s product
                strategy plan. I played a key role in establishing new brand
                guidelines across subsidiary groups, ensuring a consistent
                professional image. I designed and supervised the creation of
                subsidiary websites and products, collaborating with a design
                and development team to bring my vision to life. Additionally, I
                led a significant redesign of the company&apos;s website, app
                and software solutions, resulting in an improved user-friendly
                and visually appealing experience for customers.
              </p>
            </div>
          </div>
          <div className='flex gap-8'>
            <div className='experience-connect-line-1 ml-4  w-[1px] basis-[3rem] border-l border-dotted border-primary md:block' />
            <div className='pb-8'>
              <ExperienceCompany
                company='Deqode'
                location='Fortune Business Centre, Kaspate Wasti, Wakad, Pune: 411057. Maharashtra, India.'
                from='May 2016'
                to='Dec 2022'
                logo='/assets/images/deqode-logo.png'
                isRemote
              />
              <h3 className='heading-4 mb-2'>UI/UX Designer</h3>
              <p className='body-2 mb-4 text-justify'>
                At Deqode, I served as a remote UI/UX Designer, where I was
                responsible for the design and development of websites and
                applications. I collaborated with cross-functional teams to
                understand the client&apos;s business requirements and delivered
                exceptional user experiences.
              </p>

              <div className=''>
                <p className='body-2 mb-4'>My responsibilities included:</p>
                <ul className='body-2 mb-4 list-disc pl-8'>
                  <li>
                    Conducting user research to understand their needs and
                    preferences
                  </li>
                  <li>Sketching and wireframing concepts and ideas</li>
                  <li>Creating prototypes and testing designs for usability</li>
                  <li>
                    Developing UI/UX design strategies and visual design systems
                  </li>
                  <li>
                    Creating high-fidelity designs in Figma, Adobe XD,
                    Photoshop, and Illustrator6
                  </li>
                  <li>
                    Staying current with design trends and technologies to
                    deliver innovative solutions
                  </li>
                </ul>
                <p className='body-2'>
                  I was committed to meeting project deadlines and producing
                  high-quality work. Through my design skills and experience, I
                  was able to help Deqode&apos;s clients achieve their goals and
                  succeed online.
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-8'>
            <div className='experience-connect-line-1 ml-4 h-0  w-[1px] basis-[3rem] border-l border-dotted border-primary md:block' />
            <div className='pb-8'>
              <ExperienceCompany
                company='Launch a Project'
                location='74 Agrabad C/A, Jahan Building 5, Chattogram, 4100'
                from='Oct 2021'
                to='Jun 2022'
                logo='/assets/images/lap-logo.png'
                isRemote
              />
              <h3 className='heading-4 mb-2'>UI/UX Designer</h3>
              <p className='body-2 mb-4'>
                I was responsible for both the operational and creative aspects
                of the business in my previous role as Chief Operating Officer
                and UI/UX Designer for this company. I led the redesign of our
                digital platforms using my expertise in user experience design,
                resulting in an intuitive and seamless user experience for our
                customers. At the same time, I was in charge of overseeing the
                company&apos;s day-to-day operations, ensuring that all
                departments ran smoothly.
              </p>
              <p className='body-2'>
                I was able to successfully balance my creative and operational
                responsibilities, resulting in increased customer satisfaction
                and a healthy bottom line. I also mentored and managed a
                talented design team, assisting them in developing their skills
                and reaching their full potential. Through my leadership, the
                company was able to reach new heights and achieve outstanding
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
