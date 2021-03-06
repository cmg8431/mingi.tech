import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import LayoutComponent from 'components/Layout';

const NotFoundPage: FunctionComponent = function () {
  return (
    <LayoutComponent>
      <NotFoundPageWrapper>
        <NotFoundText>404</NotFoundText>
        <NotFoundDescription>
          찾을 수 없는 페이지입니다. <br />
          다른 콘텐츠를 보러 가보시겠어요?
        </NotFoundDescription>
        <GoToMainButton to="/">메인으로</GoToMainButton>
      </NotFoundPageWrapper>
    </LayoutComponent>
  );
};

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NotFoundText = styled.div`
  font-size: 200px;
  font-weight: 800;
  color: white;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 100px;
  }
`;

const NotFoundDescription = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 1.3;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 20px;
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
`;

export default NotFoundPage;
