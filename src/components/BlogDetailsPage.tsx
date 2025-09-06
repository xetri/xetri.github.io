import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import { useParams } from "wouter"
import config from "@/config"
import { MarkdownRenderer } from "@/ui/MarkdownRenderer"

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
      <div>Blog: {blogId}</div>
    
      {!blog && "Blog doesnot exist!"}
      
      {blog && <div>
        <h1>{blog.title}</h1>
        <MarkdownRenderer>{blog.body_markdown}</MarkdownRenderer>
      </div>}
    </>
  )
}

export default BlogDetails

