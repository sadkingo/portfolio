import getWithBaseUrl from "@/util/getRelativePath";
import handleError from "@/util/handleError";
import { Comment, Image } from "@prisma/client";

interface Props {
  formData: FormData;
}
interface CommentWithImage extends Comment {
  image: Image;
}

async function getPagedComments(
  page: number = 1,
): Promise<CommentWithImage[] | null> {
  const response = await fetch(getWithBaseUrl("/api/comments?page=" + page));
  const { commentsPage: comments } = await response.json();
  return comments;
}

async function registerComment({
  formData,
}: Props): Promise<CommentWithImage | null> {
  const response = await fetch(getWithBaseUrl("/api/user/comments"), {
    method: "POST",
    body: formData,
  });

  const { error, comment } = await response.json();

  if (error) {
    handleError(error);
    return null;
  }

  return comment;
}

export { registerComment, getPagedComments };
