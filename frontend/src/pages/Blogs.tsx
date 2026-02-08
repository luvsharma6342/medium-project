import Appbar from "./../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"
import BlogSkeleton from "../components/BlogSkeleton";

const Blogs = () => {
    // store it in state
    // store it directly here
    // store it in a context variables
    // create our own custom look calles useBlogs

    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>

            <Appbar /> <div className="flex flex-col items-center">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    {
                        blogs.map(blog => <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} publishedDate={"2nd feb 2024"} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default Blogs
