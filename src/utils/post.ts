import readingTime from 'reading-time';

interface Post {
  body: string;
}

const getPostData = (post: Post) => {
  return {
    readingTime: readingTime(post.body).text,
  };
};

export { getPostData };
