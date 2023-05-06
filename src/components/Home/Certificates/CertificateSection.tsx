import { CertificateCard } from '@/components/Home/Certificates/CertificateCard'
import { CertificateSectionHeader } from '@/components/Home/Certificates/CertificateSectionHeader'

export const CertificateSection = () => {
  return (
    <div className='py-16 lg:py-20'>
      <div className='container max-w-5xl '>
        <CertificateSectionHeader />
        <ul role='list' className='mt-14 flex flex-col gap-6 md:mt-16 md:gap-8'>
          <li>
            <CertificateCard
              title='UI/UX Design With Figma : 5+ Real World Projects (2023)'
              provider='UDEMY'
              issueDate='NOV 2022'
              credentialUrl=''
            />
          </li>
          <li>
            <CertificateCard
              title='Foundations of User Experience (UX) Design'
              provider='COURSERA'
              issueDate='FEB 2022'
              credentialUrl=''
              description='Google UX Design Professional Certificate'
            />
          </li>
          <li>
            <CertificateCard
              title='Create High-Fidelity Designs and Prototypes in Figma'
              provider='COURSERA'
              issueDate='AUG 2017'
              credentialUrl=''
              description='Google UX Design Professional Certificate'
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
