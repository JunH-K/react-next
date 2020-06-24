import React from 'react'; //next 는 import 안해도됨
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

/* pages 컴포넌트들의 공통 요소 페이지*/

/**
 *
 * @param Component pages 에 있는 컴포넌트 들이 props 로 들어온다.
 * @returns {*}
 * @constructor
 */
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
