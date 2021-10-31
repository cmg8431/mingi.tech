import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import LayoutComponent from 'components/Layout';
import PostList, { PostType } from 'components/PostList';

import { PostListItemType } from 'types/PostItem.types';
import BannerComponents from 'components/Banner';
import SEO from 'components/Seo';

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
  };
};

const IndexPage: FunctionComponent<IndexPageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <LayoutComponent>
      <SEO title={'MinGI.tech'} />
      <BannerComponents />
      <PostList posts={edges} />
    </LayoutComponent>
  );
};

export const queryPostList = graphql`
  query queryPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
          }
        }
      }
    }
  }
`;

export default IndexPage;
