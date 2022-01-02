import React, { FunctionComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PostItem from 'components/item/PostItem';
import { PostListItemType } from 'types/PostItem.types';
import { useEffect } from 'react';

type PostListProps = {
  posts: PostListItemType[];
};

const PostList: FunctionComponent<PostListProps> = ({ posts }: any) => {
  return (
    <PostListWrapper>
      {posts.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { ...rest },
          },
        }: PostListItemType) => (
          <PostItem {...rest} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  );
};

const PostListWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 60rem;

  @media (max-width: 926px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0px;
  }
`;

export default PostList;
