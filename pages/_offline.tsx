export default function Offline() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-800 to-blue-900'>
      <h2 className='text-2xl font-semibold sm:text-5xl'>You're offline now</h2>
      <h6 className='text-base opacity-60 sm:text-xl'>and we can't connect to your cache</h6>
      <button className='mt-6 Btn-white-40'>Refresh</button>
    </div>
  )
}
