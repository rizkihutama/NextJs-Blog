import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Rizki Hutama</p>
        <p>I am a junior web developer</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>

          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              <small>{id}</small>
              <br />
              <time>{date}</time>
            </li>
          ))}

        </ul>
      </section >
    </Layout >
  );
}