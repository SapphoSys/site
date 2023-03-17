import readingTime from 'reading-time';

type Post = {
  body: string;
};

const getPostData = (post: Post) => {
  return {
    readingTime: readingTime(post.body).text,
  };
};

export default getPostData;
