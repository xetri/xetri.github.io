import { useEffect, useState } from "react"
import config from "@/config"
import { Link } from "wouter";

export function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        async function fetchBlogs() {
            const response = await fetch(config.my_blogs_url)
            const data = await response.json()
            setBlogs(data)
        }

        fetchBlogs().then(() => {
            console.log(blogs)
        }).catch((err) => {
            console.error("Error fetching blogs:", err)
        });

    }, [])

    return (
        <div>
            <h1>Blogs</h1>

            {!blogs.length && <p>No blogs found.</p>}

            {blogs.length && blogs.map(blog => (
                <div key={blog.id}>
                    <Link to={`/blogs/${blog.slug}`}>
                        <h2>{blog.title}</h2>
                        <p>{(new Date(blog.published_timestamp)).toLocaleDateString()}</p>
                    </Link>
                </div>
            ))}

        </div>
    )
}

export default Blogs

