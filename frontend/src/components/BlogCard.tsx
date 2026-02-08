import { Link } from "react-router-dom";

interface BlogCardProps {
    id: number
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}
const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b border-slate-200 pb-4 w-screen max-w-5xl cursor-pointer">
                <div className="flex">
                    <div className="flex justify-center flex-col">
                        <Avatar name={authorName} size={"small"} />
                    </div>
                    <div className="font-extralight pl-2">{authorName}</div>
                    <div className="text-[8px] flex justify-center flex-col pl-2">
                        &#9679;
                    </div>
                    <div className="pl-2 font-thin text-slate-500 text-sm">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-semibold">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 text-sm font-thin pt-2">
                    {`${Math.ceil(content.length / 100)} minutes`}
                </div>
                <div className="bg-slate-200 h-px w-full text-slate-400"></div>
            </div>
        </Link>
    )
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return (
        <div
            className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}
        >
            <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
                {name[0].toUpperCase()}
            </span>
        </div>
    );
}

export default BlogCard;
