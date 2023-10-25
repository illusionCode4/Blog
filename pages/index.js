import { Fragment } from 'react';
import Hero from '@/components/homePage/hero';
import FeaturedPosts from '@/components/homePage/featuredPosts';
import { getFeaturedPosts } from '@/lib/posts-util';
import Head from 'next/head';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Joey's Blog</title>
        <meta name='description' content="A blog about Joey\'s life" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
