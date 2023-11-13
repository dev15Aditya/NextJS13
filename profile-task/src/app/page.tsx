import Post from '@/components/Post';
import Image from 'next/image';
import Profile from '../components/Profile';
import data from './data';
import Counter from '@/components/Counter';

export default function Home() {
  const count = data.length;
  return (
    <div>
      <Profile />
      <Counter count={count} />
      {data.map((post) => {
        return (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            content={post.content}
            activity={post.activity}
            author={post.author}
            datePosted={post.datePosted}
            minutesRead={post.minutesRead}
            views={post.views}
          />
        );
      })}
    </div>
  );
}
