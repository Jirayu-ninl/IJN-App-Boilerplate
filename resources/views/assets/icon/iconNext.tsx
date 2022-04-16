const IconNext = ({
  Darkmode,
}: {
  Darkmode?: boolean
}) => (
  <>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='49.458'
      height='30.911'
      viewBox='0 0 49.458 30.911'
    >
      <path
        d='M45.095,20.486,29.584,33.335l1.327,1.576,18.547-15.5L30.911,4,29.582,5.574,45.1,18.425H0v2.061H45.095Z'
        transform='translate(0 -4)'
        fill={Darkmode ? '#FFF' : '#000'}
        fillRule='evenodd'
      />
    </svg>
  </>
)

export default IconNext
