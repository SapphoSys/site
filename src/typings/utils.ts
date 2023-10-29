export interface PostData {
  data: {
    astro: {
      frontmatter: {
        minutesRead?: string;
      };
    };
  };
}

export interface Webring {
  name: string;
  link: string;
  image: string;
}
