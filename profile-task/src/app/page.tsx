import Post from '@/components/Post';
import Image from 'next/image';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <div>
      <Profile />
      <Post />
    </div>
  );
}
