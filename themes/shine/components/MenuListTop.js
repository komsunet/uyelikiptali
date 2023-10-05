import React from 'react'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import BLOG from '@/blog.config'
import { MenuItemDrop } from './MenuItemDrop'

export const MenuListTop = (props) => {
  const {
    customNav,
    customMenu
  } = props
  const { locale } = useGlobal()

  let links = [
    {
      id: 1,
      icon: 'fa-solid fa-house',
      name: locale.NAV.INDEX,
      to: '/',
      show: CONFIG.MENU_INDEX
    },
    {
      id: 2,
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      to: '/search',
      show: CONFIG.MENU_SEARCH
    },
    {
      id: 3,
      icon: 'fas fa-search',
      name: 'Gez',
      to: '/gez',
      show: true,
      subMenus: [
        {
          title: 'Ras Mohammed',
          to: '/gor'
        },
        {
          title: 'Hotel 2',
          to: '/gor'
        },
        {
          title: 'Hotel 4',
          to: '/gor'
        },
        {
          title: 'Hotel 5',
          to: '/gor'
        }
      ]
    },
    {
      id: 4,
      icon: 'fas fa-search',
      name: 'Gör',
      to: '/gez',
      show: true,
      subMenus: [
        {
          title: 'Farsha Cafe',
          icon: 'fas fa-location-dot',
          to: '/gor'
        },
        {
          title: 'Gör',
          icon: 'fas fa-location-dot',
          to: '/gor'
        }
      ]
    },
    {
      id: 5,
      icon: 'fas fa-search',
      name: 'Konakla',
      to: '/konakla',
      show: true,
      subMenus: [
        {
          title: 'Hotel 1',
          to: '/gor'
        },
        {
          title: 'Hotel 2',
          to: '/gor'
        },
        {
          title: 'Hotel 4',
          to: '/gor'
        },
        {
          title: 'Hotel 5',
          to: '/gor'
        }
      ]
    },
    {
      id: 6,
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      to: '/archive',
      show: CONFIG.MENU_ARCHIVE
    }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (BLOG.CUSTOM_MENU) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (<>
    <nav id='nav-mobile' className='leading-8 justify-center font-light w-full flex'>
      {links?.map(link => link && link.show && <MenuItemDrop key={link?.id} link={link} />)}
    </nav>
  </>)
}
