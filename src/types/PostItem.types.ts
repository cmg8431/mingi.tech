export type PostFrontmatterType = {
  title: string;
  date: string;
  summary: string;
  categories: string[];
  thumbnail: {
    publicURL: string;
  };
};

export type PostListItemType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    html: string;
    frontmatter: PostFrontmatterType;
  };
};
