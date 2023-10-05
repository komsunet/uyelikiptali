import Link from 'next/link'
import CONFIG from '../config'
import BLOG from '@/blog.config'
import Image from 'next/image';

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview = CONFIG.POST_LIST_PREVIEW && post.blockMap
  if (post && !post.pageCoverThumbnail && CONFIG.POST_LIST_COVER_DEFAULT) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover = CONFIG.POST_LIST_COVER && post?.pageCoverThumbnail && !showPreview
  const { title, pageCoverThumbnail, publishDay } = post;

  return (

    <div className="group cursor-pointer">
      <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
        {showPageCover && (<Link
          className="relative block aspect-video"
          href={`${BLOG.SUB_PATH}/${post.slug}`}>
          <Image alt="thumbnail" className="object-cover transition-all"
                 sizes="(max-width: 768px) 30vw, 33vw"
                 fill
                 src={pageCoverThumbnail}
                 priority={index === 1 ? true : undefined}
          />
        </Link>)}
      </div>
      <div>
        <div>
          <div className="flex gap-3">
            {post.category && (
              <Link href={`/category/${post.category}`} className="mt-5 inline-block text-xs font-medium uppercase tracking-wider text-blue-600 hover:underline">
                {post.category}
              </Link>
            )}
          </div>
          <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight dark:text-white">
            <Link href={`${BLOG.SUB_PATH}/${post.slug}`}>
              <span className="bg-gradient-to-r from-orange-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                {title}
              </span>
            </Link>
          </h2>
          {/* <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"> */}
          {/*   <time className="truncate text-sm">{publishDay}</time> */}
          {/* </div> */}

          {/* {post.tagItems.map((tag) => ( */}
          {/*   <Link href={`/tag/${tag.name}`} key={tag.id}> */}
          {/*       <span className="mt-5 inline-block text-xs font-medium uppercase tracking-wider text-blue-600"> */}
          {/*         {tag.name} */}
          {/*       </span> */}
          {/*   </Link> */}
          {/* ))} */}
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
