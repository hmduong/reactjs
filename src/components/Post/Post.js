import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';
import { useEffect, useState } from 'react';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function convert(raw) {
  //console.log(raw.match(/\[[^\)#]+\)/gim));
  return (
    '# ' + raw.split('---')[1].split('title: ')[1].split('permalink:')[0] + raw.split('---')[2] + raw.split('---')[3]
  );
}

export default function Post({ url }) {
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => setPost(convert(text)));
  }, [url]);

  return (
    <>
      <div className={cx('post')}>
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkHeadingId]}>{post}</ReactMarkdown>
      </div>
    </>
  );
}
