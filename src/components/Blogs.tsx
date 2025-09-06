import { useEffect, useState } from "react"
import config from "@/lib/config"
import { Link } from "wouter";
import { FaCalendar } from "react-icons/fa";

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

    return (<>
        <main className="p-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Blogs</h2>
                    {blogs.length > 0 ? (
                        <div className="space-y-6">
                            {blogs.map((blog, index) => (
                                <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                                    <Link to={`/blogs/${blog.slug}`}>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                            <p className="text-sm text-gray-500 flex items-center">
                                                <FaCalendar className="inline mr-2" />
                                                {new Date(blog.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                            </p>
                                        </div>
                                        <div className="mb-4">
                                            {blog.tag_list.map((tag, idx) => (
                                                <span key={idx} className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2">{tag}</span>
                                            ))}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No blogs available at the moment.</p>
                    )}
                </section>
            </div>
        </main>
    </>)
}

export default Blogs

