import React from 'react'
import BLOG from '@/blog.config'
import SocialButton from './SocialButton'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function () {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
        <footer
            className='relative z-1 mt-4 flex-shrink-0 bg-[#f1f3f7] dark:bg-[#30343f] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'
        >

            <div id='footer-bottom' className='container w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center '>

                <div id='footer-bottom-left' className="flex items-center gap-2">
                  <div><i className='animate-pulse fas fa-heart text-red-700' /> <a href={BLOG.LINK} className='underline font-bold  dark:text-gray-300 '>{BLOG.AUTHOR}</a></div>
                  <div>{`${copyrightDate}`}</div>
                </div>

            <div id='footer-bottom-right'>
                {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a></>}

                <span className='hidden busuanzi_container_site_pv'>
                    <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
                <span className='pl-2 hidden busuanzi_container_site_uv'>
                    <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>

                {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {BLOG.BIO && <>|</>} {BLOG.BIO}</h1> */}

            </div>
        </div>
        </footer >
  )
}

export default Footer
