import BlogPostCard from './BlogPostCard'
import PaginationNumber from './PaginationNumber'
import BLOG from '@/blog.config'
import BlogPostListEmpty from './BlogPostListEmpty'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount, siteInfo }) => {
  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)
  const showPagination = postCount >= BLOG.POSTS_PER_PAGE
  if (!posts || posts.length === 0 || page > totalPage) {
    return <BlogPostListEmpty />
  } else {
    return (
            <div id="container" className='w-full'>

              <section className="container grid items-center gap-6 pb-8 md:py-4">
                <div className="grid gap-12 md:grid-cols-2 md:gap-6 lg:gap-12">
                {posts.slice(0, 2)?.map(post => (
                    <BlogPostCard index={posts.indexOf(post)} key={post.id} post={post} siteInfo={siteInfo} />
                ))}
                </div>
              </section>

              <section className="container grid items-center gap-6 pb-8 md:py-6">
                <div className="grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-12">
                    {posts.slice(2, posts.length)?.map(post => (
                        <BlogPostCard index={posts.indexOf(post)} key={post.id} post={post} siteInfo={siteInfo} />
                    ))}
                </div>
              </section>

                    {showPagination && <PaginationNumber page={page} totalPage={totalPage} />}
            </div>
    )
  }
}

export default BlogPostListPage
