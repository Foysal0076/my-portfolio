import PrimaryButton from '@/components/common/PrimaryButton'
import classNames from 'classnames'
import { useState } from 'react'

const selectWinners = (contestants: string[], numWinners: number) => {
  // Create an array to store the winners.
  const winners = []

  // Loop through the contestants.
  for (let i = 0; i < numWinners; i++) {
    // Generate a random number between 0 to numWinners.
    const randomNumber = Math.floor(Math.random() * contestants.length)

    // If the random number is less than or equal to the number of winners,
    // add the contestant to the winners array.
    winners.push(contestants[randomNumber])
  }

  // Return the winners array.
  return winners
}

const WhoGetsTheBreastPiece = () => {
  const [contestants, setContestants] = useState<string[]>([])
  const [winners, setWinners] = useState<string[]>([])
  const [winnerCount, setWinnerCount] = useState<number>(1)

  const [name, setName] = useState<string>('')

  const onAdd = () => {
    const newContestants = [...contestants, name]
    setContestants(newContestants)
    setName('')
  }

  const handleSelectWinners = () => {
    setWinners([])
    const winners = selectWinners(contestants, winnerCount)
    setWinners(winners)
  }

  const handleWinnerCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // validation to take only positive numbers
    if (parseInt(e.target.value) < 0) {
      setWinnerCount(0)
    } else if (parseInt(e.target.value) >= contestants.length) {
      setWinnerCount(contestants.length - 1)
    } else {
      setWinnerCount(parseInt(e.target.value))
    }
  }

  const reset = () => {
    setContestants([])
    setWinners([])
    setWinnerCount(1)
  }

  return (
    <div>
      <div className='container'>
        <h1 className='heading-3 mb-16 text-center'>
          Who Gets the Breast Piece?
        </h1>

        {/* Show winner list */}
        <div
          className={classNames(
            'mx-auto mt-8 mb-8 flex w-full max-w-md flex-col items-center justify-center',
            { hidden: winners.length === 0 }
          )}>
          <ul className='w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-lg text-gray-900'>
            {winners.map((winner, index) => (
              <li
                className='my-4 flex items-center justify-between rounded-md bg-primary-200 px-4 py-2'
                key={index}>
                <span>{winner}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* beautiful tailwind css input field to take names */}
        <div className='mx-auto flex w-full max-w-md flex-col items-center justify-center'>
          <div className='relative'>
            <input
              type='text'
              className='px- w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-8 text-lg text-gray-900 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-400'
              placeholder='Enter a name'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='h-5 w-5 text-gray-400'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'>
                <path
                  d='M21 11.5C21 16.1944 16.1944 21 11.5 21C6.80558 21 2 16.1944 2 11.5C2 6.80558 6.80558 2 11.5 2C16.1944 2 21 6.80558 21 11.5Z'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M15.5 15.5L19.5 19.5'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Tailwind button to add name in the array from the input */}
        <div className='mx-auto mt-8 flex w-full max-w-md items-center justify-center'>
          <div
            className='cursor-pointer rounded-md bg-primary-500 px-12 py-2 text-lg text-btn-1 text-black'
            onClick={onAdd}>
            Add
          </div>
        </div>

        {/* Tailwind css to take number input */}
        <div className='mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center'>
          <div className='relative'>
            <input
              type='number'
              className='px- w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-8 text-lg text-gray-900 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-400'
              placeholder='Enter number of winners'
              onChange={handleWinnerCountChange}
              value={winnerCount}
            />
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='h-5 w-5 text-gray-400'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'>
                <path
                  d='M21 11.5C21 16.1944 16.1944 21 11.5 21C6.80558 21 2 16.1944 2 11.5C2 6.80558 6.80558 2 11.5 2C16.1944 2 21 6.80558 21 11.5Z'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M15.5 15.5L19.5 19.5'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Tailwind button to choose winners */}
        <div
          className={classNames(
            'mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center',
            { hidden: contestants.length < 2 }
          )}>
          <PrimaryButton onClick={handleSelectWinners}>
            Choose Winners
          </PrimaryButton>
        </div>
        {/* Tailwind button to choose winners */}
        <div
          className={classNames(
            'mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center'
          )}>
          <PrimaryButton size='sm' fullWidth={true} onClick={reset}>
            Reset
          </PrimaryButton>
        </div>

        {/* Tailwind design to show the added persons in a list */}
        <div
          className={classNames(
            'mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center',
            { hidden: contestants.length === 0 }
          )}>
          <ul className='w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-lg text-gray-900'>
            {contestants.map((contestant, index) => (
              <li
                className='my-4 flex items-center justify-between rounded-md bg-primary-200 px-4 py-2'
                key={index}>
                <span>{contestant}</span>
                <button
                  className='rounded-md bg-red-500 px-2 py-1 text-sm text-white'
                  onClick={() => {
                    const newContestants = contestants.filter(
                      (c) => c !== contestant
                    )
                    setContestants(newContestants)
                  }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WhoGetsTheBreastPiece
