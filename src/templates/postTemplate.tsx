import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { PostListItemType } from 'types/PostItem.types';
import PostContent from '../components/PostContent';
import styled from 'styled-components';
import HeaderComponent from 'components/Header';
import { string } from 'prop-types';
import LayoutComponent from 'components/Layout';
import CommentWidget from 'components/CommentWidget';

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
  };
  html: string;
};

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const {
    node: {
      html,
      frontmatter: { title, summary, date },
    },
  } = edges[0];

<<<<<<< HEAD
  return <PostContent html={html} />;
=======
  return (
    <>
      <PostContent html={html} />
      <CommentWidget />
    </>
  );
>>>>>>> 107c7822065757579e3c47fc70f4ea21813577d2
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
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