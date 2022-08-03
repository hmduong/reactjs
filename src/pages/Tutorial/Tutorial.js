import Sidebar from '~/components/Layout/components/Sidebar';
import styles from './Tutorial.module.scss';
import classNames from 'classnames/bind';
import Post from '~/components/Post';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const tutorialCatalog = [
  {
    header: 'TUTORIAL',
    list: [],
  },
];

function Tutorial() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/tutorial/tutorial.md')
      .then((res) => res.text())
      .then((text) => {
        setText(text);
        tutorialCatalog[0].list = text.match(/#.+\{#[^\}]+/gim).map((e) => ({
          path: '#' + e.split('{#')[1].split('}')[0],
          internal: true,
          title: e.split('# ')[1].split(' {#')[0],
        }));
      });
  }, [text]);

  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <Sidebar catalog={tutorialCatalog}>
          <Post url="https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/tutorial/tutorial.md" />
        </Sidebar>
      </div>
    </div>
  );
}

export default Tutorial;
