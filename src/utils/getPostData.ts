import readingTime from 'reading-time';

type Post = {
  body: string;
};

export default function getPostData(post: Post) {
  return {
    readingTime: readingTime(post.body).text,
  };
}
