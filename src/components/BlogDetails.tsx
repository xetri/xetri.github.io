import { useEffect, useState } from "react"
import { useParams } from "wouter"
import config from "@/lib/config"
import { MarkdownRenderer } from "@/components/MarkdownRenderer"
import { FaCalendarAlt } from "react-icons/fa"

export function BlogDetails() {
    const { blogId } = useParams()
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            const response = await fetch(config.blog_url + blogId)
            const data = await response.json()
            setBlog(data)
        }

        fetchBlogs().then(() => {
            console.log(blog)
        }).catch((err) => {
            console.error("Error fetching blogs:", err)
        });

    }, [])
  
    return (<>
      <main className="p-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {blog ? (
            <article className="prose lg:prose-xl">
              <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
              <p className="text-sm text-gray-500 mb-6 flex items-center">
                <FaCalendarAlt className="inline mr-2" />
                <span>
                  {new Date(blog.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
              </p>
              <div className="mb-4">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2">{tag}</span>
                ))}
              </div>

              <div className="mt-6">
                <MarkdownRenderer>{blog.body_markdown}</MarkdownRenderer>
              </div>
            </article>
          ) : (
            <p>Blog not found</p>
          )}
        </div>
      </main>
    </>
  )
}

export default BlogDetails

