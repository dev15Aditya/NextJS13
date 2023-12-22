import CardList from './Carousel/CardList';
import HeroContainer from './Hero/HeroContainer';
import NewsList from './NewsCarousel/NewsList';
import PollCard from './Poll/PollCard';
import LinkCard from './QuickLinks/LinkCard';
import UserData from './UserData';

export default function HomePage() {
  return (
    <div className="md:flex w-[95%] mx-auto mt-3">
      <div className="md:w-[80%] mr-5 mt-[7rem]">
        <HeroContainer />
        <LinkCard />
        <CardList />
        <PollCard />
        <NewsList />
      </div>
      <UserData />
    </div>
  );
}
