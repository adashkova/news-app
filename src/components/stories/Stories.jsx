import React, { useContext, useEffect } from 'react';
import Story from './Story';
import Spinner from '../spinner/Spinner';
import { Context } from '../../Context';
import axios from 'axios';
import useSWR from 'swr';

const Stories = () => {
  const [context, setContext] = useContext(Context);

  const baseUrl = `https://hacker-news.firebaseio.com/v0`;

  const fetcher = async url => {
    const storedNews = [];
    const comments = [];

    const res = await axios.get(`${url}/topstories.json?print=pretty`);

    res.data.forEach(async id => {
      const res = await axios.get(`${url}/item/${id}.json?print=pretty`);
      storedNews.push(res);
    });

    setContext({ ...context, news: storedNews });
    // setContext({...context, comments: comments});
  };

  useEffect(() => {
    console.log(`use`);
    fetcher(`${baseUrl}`);
  }, []);

  if (!context) return <Spinner />;
  console.log(context);

  return (
    <>
      {context.news &&
        context.news.map((news, idx) => (
          <Story key={news.data.id} news={news} idx={idx + 1} />
        ))}
      <a href="!#">MORE</a>
    </>
  );
};

export default Stories;
