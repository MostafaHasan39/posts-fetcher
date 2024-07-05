import { Post } from "@/types/post";
import { FC } from "react";
import Image from "next/image";

interface IPostCardProps {
  post: Post;
}

const PostCard: FC<IPostCardProps> = ({ post }) => {
  return (
    <div className="max-w-[600px] mx-auto mt-40 flex flex-row justify-between items-start p-6 border-[1px] shadow-md hover:shadow-lg rounded cursor-pointer">
      <Image
        src={post.id % 2 === 0 ? "/woman.png" : "/man.png"}
        width={256}
        height={256}
        alt={post.id % 2 === 0 ? "woman-avatar" : "man-avatar"}
      />
      <div className="mx-6 ">
        <h2 className="font-extrabold text-xl">{post.title}</h2>
        <p className="mt-2">{post.body}</p>
      </div>
    </div>
  );
};
export default PostCard;
