import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import BlogSkeleton from "../components/BlogSkeleton";
import Appbar from "../components/Appbar";

// atomFamilies/selectorFamilies
export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || "" });
    if (loading || !blog) {
        return <div>
            <Appbar />
            <div className="flex flex-col items-center ">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}