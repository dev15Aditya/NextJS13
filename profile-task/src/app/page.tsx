import Post from '@/components/Post';
import Profile from '../components/Profile';
import data from './data';
import Counter from '@/components/Counter';

export default function Home() {
  const count = data.posts.length;
  return (
    <div>
      <Profile
        name={data.name}
        instaHandle={data.instaHandle}
        profilePic={data.profilePic}
        coverPic={data.coverPic}
        followers={data.followers}
        following={data.following}
        title={data.title}
        star={data.star}
        liked={data.liked}
        views={data.views}
        loved={data.loved}
      />
      <Counter count={count} />
      {data.posts.map((post) => {
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
