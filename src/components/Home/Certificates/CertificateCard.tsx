import Link from 'next/link'

type Props = {
  title: string
  provider: string
  issueDate: string
  credentialId?: string
  credentialUrl: string
  description?: string
}

export const CertificateCard = ({
  title,
  credentialUrl,
  issueDate,
  provider,
  credentialId,
  description,
}: Props) => {
  return (
    <div className='border border-neutral-800 bg-slate-50 py-6 pl-10 pr-14 dark:bg-neutral-900'>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
        <div className='text-center md:text-left'>
          <span className='subtitle-1 mb-2 block'> {title}</span>
          <p className='body-1 mb-2'>
            <span className='text-btn-1 font-black text-primary-500'>
              {provider}
            </span>{' '}
            - ISSUED {issueDate}
          </p>
          <p className='body-2'>{description}</p>
        </div>
        <Link href={credentialUrl}>
          <button
            className='mt-6 rounded-none border border-neutral-800 bg-neutral-0 px-5 py-2.5 text-center text-sm text-btn-2 font-medium uppercase tracking-widest text-neutral-900 ring-offset-0 transition-all duration-100 hover:bg-neutral-50 focus:ml-[1px] focus:ring-1 focus:ring-neutral-500 dark:bg-neutral-900 dark:text-neutral-0 dark:hover:bg-neutral-800 dark:focus:ring-neutral-0  md:mt-0'
            onClick={() => {}}>
            SHOW CREDENTIAL
          </button>
        </Link>
      </div>
    </div>
  )
}
