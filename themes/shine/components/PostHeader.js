import Link from 'next/link'
import BLOG from '@/blog.config'
import NotionIcon from '@/components/NotionIcon'
import { HashTag } from '@/components/HeroIcons'
import WordCount from '@/components/WordCount'
import LazyImage from '@/components/LazyImage'
import { formatDateFmt } from '@/lib/formatDate'

export default function PostHeader({ post, siteInfo }) {
  if (!post) {
    return <></>
  }
  // 文章头图
  const headerImage = post?.pageCover ? post.pageCover : siteInfo?.pageCover

  return (
        <div id='post-bg' className="w-full h-[30rem] relative md:flex-shrink-0 overflow-hidden bg-cover bg-center bg-no-repeat z-10 mb-5">
          <div
            className="absolute bottom-0 left-0 z-10 h-full w-full"
            style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}
          ></div>

          <LazyImage id='post-cover' className='absolute left-0 top-0 z-0 h-full w-full object-cover' src={headerImage} />

            <div className={' w-full h-full py-10 flex justify-center items-center'}>

                <div id='post-info' className='absolute bottom-2 z-10 flex flex-col space-y-4 lg:-mt-12 w-full max-w-[86rem]'>
                    <div className='flex justify-center md:justify-start items-center'>
                        {post.category && <>
                            <Link href={`/category/${post.category}`} className='mr-4' passHref legacyBehavior>
                                <div className="cursor-pointer font-sm font-bold px-3 py-1 rounded-lg bg-blue-500 hover:bg-white text-white hover:text-blue-500 duration-200 ">
                                    {post.category}
                                </div>
                            </Link>
                        </>}

                        {post.tagItems && (
                            <div className="hidden md:flex justify-center flex-nowrap overflow-x-auto">
                                {post.tagItems.map((tag, index) => (
                                    <Link
                                        key={index}
                                        href={`/tag/${encodeURIComponent(tag.name)}`}
                                        passHref
                                        className={'cursor-pointer inline-block text-gray-50 hover:text-white duration-200 py-0.5 px-1 whitespace-nowrap '}>
                                        <div className='font-light flex items-center'><HashTag className='text-gray-200 stroke-2 mr-0.5 w-3 h-3' /> {tag.name + (tag.count ? `(${tag.count})` : '')} </div>

                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="max-w-5xl font-bold text-3xl lg:text-5xl md:leading-snug shadow-text-md flex  justify-center md:justify-start text-white">
                        <NotionIcon icon={post.pageIcon} />{post.title}
                    </div>

                    <section className="flex-wrap shadow-text-md flex text-sm  justify-center md:justify-start mt-4 text-white dark:text-gray-400 font-light leading-8">

                        <div className='flex justify-center dark:text-gray-200 text-opacity-70'>
                            <div className='mr-2'><WordCount /></div>
                            {post?.type !== 'Page' && (
                                <>
                                    <Link
                                        href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
                                        passHref
                                        className="pl-1 mr-2 cursor-pointer hover:underline">
                                        <i className="fa-regular fa-calendar"></i> {post?.publishDay}
                                    </Link>
                                </>
                            )}

                            <div className="pl-1 mr-2">
                              <i className="fa-regular fa-calendar-check"></i> {post.lastEditedDay}
                            </div>

                        </div>

                        {JSON.parse(BLOG.ANALYTICS_BUSUANZI_ENABLE) && <div className="busuanzi_container_page_pv font-light mr-2">
                            <i className="fa-solid fa-fire-flame-curved"></i> <span className="mr-2 busuanzi_value_page_pv" />
                        </div>}
                    </section>

                </div>

            </div>
        </div>
  )
}
