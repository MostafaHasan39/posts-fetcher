import { Post } from "@/types/post";
import { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface IPostsTableProps {
  posts: Post[];
  maxLimit?: number;
}

const PostsTable: FC<IPostsTableProps> = ({ posts, maxLimit = 30 }) => {
  const limitedPosts = posts.slice(0, maxLimit);
  return (
    <Table className="mx-auto my-20 max-w-[800px]">
      <TableCaption>Post Lists</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {limitedPosts.map((post) => {
          return (
            <TableRow key={post.id}>
              <TableCell>
                <Link className="block w-full" href={`/posts/${post.id}`}>
                  {post.id}
                </Link>
              </TableCell>
              <TableCell>
                <Link className="block w-full" href={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </TableCell>
              <TableCell className="text-right">
                <Link className="block w-full" href={`/posts/${post.id}`}>
                  {post.body}
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default PostsTable;
