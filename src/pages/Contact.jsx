import React from 'react'

export const Contact = () => {
  return (
    <div className="text-white text-center flex flex-col items-center justify-center min-h-screen ">
  <h2 className="pt-10 text-2xl font-[SpaceGroteskLight]">SEND ME A MESSAGE</h2>
  <a className="p-4 text-[40px] md:text-[80px] font-[SpaceGroteskBold] hover:underline" href="mailto:juanestarli@gmail.com">juanestarli@gmail.com</a>
  <h2 className="mt-8 text-xl font-[SpaceGroteskLight]">OR CONNECT WITH ME ON SOCIALS</h2>
  
  <div className="mt-4 space-x-8">
    <a href="https://linkedin.com" className="hover:underline font-[SpaceGroteskBold]">LINKEDIN</a>
    <a href="https://instagram.com" className="hover:underline font-[SpaceGroteskBold]">INSTAGRAM</a>
    <a href="https://github.com" className="hover:underline font-[SpaceGroteskBold]">GITHUB</a>
  </div>
</div>

  )
}
