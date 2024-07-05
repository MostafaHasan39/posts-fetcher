import { getPosts } from "@/lib/api/posts";
import PostsTable from "@/components/PostsTable";

const Posts = async () => {
  const posts = await getPosts();
  return <PostsTable posts={posts} />;
};
export default Posts;
