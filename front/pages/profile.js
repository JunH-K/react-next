import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout>Profile page</AppLayout>
    </>
  );
};

export default Profile;
