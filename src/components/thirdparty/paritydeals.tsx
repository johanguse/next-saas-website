'use client'

import Script from 'next/script'

const PDComponent = () => {
  return (
    <>
      <Script
        src="//cdn.paritydeals.com/banner.js"
        strategy="afterInteractive"
      />
    </>
  )
}

export default PDComponent
