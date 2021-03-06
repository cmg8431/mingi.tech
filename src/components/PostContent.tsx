import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import CommentWidget from './CommentWidget';

type PostContentProps = {
  html: string;
};

const PostContentComponent: FunctionComponent<PostContentProps> = function ({
  html,
}) {
  return (
    <>
      <MarkdownWrapper>
        <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
      </MarkdownWrapper>
      <CommentWrapper>
        <CommentWidget />
      </CommentWrapper>
    </>
  );
};
const CommentWrapper = styled.div`
  width: 100%;
`;
const MarkdownWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0px 8px;
    display: flex;
  }
`;
const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 2.5rem 0;
  word-break: break-all;
  color: white;
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  p {
    padding: 5px 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 10px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 50px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 10px;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 10px 0;
    padding: 1px 15px;
    border-left: 2px solid white;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    line-height: 1.6;
    font-size: 14px;
    padding: 80px 20px;
    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
    p {
      font-size: 18px;
    }
    .gatsby-highlight {
      display: inline-grid;
    }
  }
`;

export default PostContentComponent;
