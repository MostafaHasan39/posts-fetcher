import { getPost } from "@/lib/api/posts";
import PostCard from "@/components/Post";

const Post = async ({ params }: { params: { id: string } }) => {
  const post = await getPost(Number(params.id));
  return <PostCard post={post} />;
};
export default Post;
