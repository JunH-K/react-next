/*
next 는 pages 폴더에 파일들은 코드스플릿된 페이지로 만들어준다.

* */
import React from 'react';
import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <div>Hello next</div>
    </AppLayout>
  );
};

export default Home;
