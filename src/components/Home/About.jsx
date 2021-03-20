import React from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const About = ({ id }) => {
  const { t } = useTranslation();

  return (
    <div id={id} className="min-h-screen bg-black text-white px-2 lg:px-6 py-28 flex flex-col justify-center space-y-20">
      <div className="flex flex-col xl:flex-row space-y-20 xl:space-y-0">
        <div className="relative xl:w-3/5 px-2 lg:px-6 py-4">
          <BadgeNumber number="03" />
          <h1 className="font-semibold text-3xl mb-4 text-white uppercase">{t('aboutSection.aboutCategory')}</h1>
          <p className="font-mono xl:text-lg text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam accusamus quibusdam sit beatae, dignissimos quod natus est non impedit id voluptates obcaecati. Id quo ducimus odit? Ea, sapiente dolore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit aspernatur quisquam praesentium quasi molestias aliquid nesciunt natus dolor? Nulla possimus quae omnis perferendis ut dignissimos sequi iste reiciendis tempore.</p>
        </div>
        <div className="flex flex-1 flex-col items-center space-y-8">
          <img src="/img/logo.svg" alt="logo" />
          <div className="flex space-x-2">
            <a href="#fb"><img src="/icons/fb.svg"/></a>
            <a href="#fb"><img src="/icons/ig.svg"/></a>
            <a href="#fb"><img src="/icons/youtube.svg"/></a>
            <a href="#fb"><img src="/icons/spotify.svg"/></a>
          </div>
        </div>
      </div>
      <div className="relative px-2 lg:px-6 py-4 xl:w-3/5">
        <h1 className="font-semibold text-3xl mb-8 text-white uppercase">{t('aboutSection.contactUsField')}</h1>
        <div className="flex flex-wrap space-y-8 sm:space-y-0 justify-between">
          <div className="w-full sm:w-auto">
            <p className="font-mono xl:text-lg text-gray-200">M.A.U Collective</p>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-col space-x-0 lg:space-x-28 xl:space-x-0">
            <div>
              <p className="font-mono xl:text-lg text-gray-200">371/4 Hai Ba Trung</p>
              <p className="font-mono xl:text-lg text-gray-200 mb-6">District 3</p>
            </div>
            <div>
              <p className="font-mono xl:text-lg text-gray-200">Ho Chi Minh City</p>
              <p className="font-mono xl:text-lg text-gray-200">Vietnam</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-col 2xl:flex-row md:space-x-28 2xl:space-x-28 xl:space-x-0">
            <div>
              <p className="font-mono xl:text-lg text-gray-200">Email</p>
              <p className="font-mono xl:text-lg text-gray-200 mb-6">info@mau.network</p>
            </div>
            <div>
              <p className="font-mono xl:text-lg text-gray-200">Phone</p>
              <p className="font-mono xl:text-lg text-gray-200">+84 93 785 10 36</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

About.propTypes = {
  id: PropTypes.string
}

export default About