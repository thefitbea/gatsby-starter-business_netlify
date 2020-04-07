import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p>Made with love in Kerala</p><p>Funded by Grandma and cousins in United States</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
