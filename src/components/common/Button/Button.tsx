export interface ButtonProps {
  onClick?(event: React.MouseEvent<HTMLElement>): void
  isDisabled?: boolean
  isLoading?: boolean
  children: string
}

//#

const Button = (props: ButtonProps) => {
  const { children, onClick, isDisabled, isLoading } = props

  let className = `rounded-lg bg-oasis-700 hover:bg-oasis-900 text-white font-bold py-2 px-4 rounded`

  if (isDisabled) {
    className += ' opacity-50 cursor-not-allowed'
  }

  if (isLoading) {
    className += ' opacity-50 cursor-not-allowed inline-flex items-center'
  }

  return (
    <button onClick={onClick} disabled={isDisabled} className={className}>
      {isLoading && <Loader />}
      {children}
    </button>
  )
}

const Loader = () => {
  return (
    <svg
      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        stroke-width='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      ></path>
    </svg>
  )
}

export default Button
