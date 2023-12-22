import CardList from './Carousel/CardList';
import HeroContainer from './Hero/HeroContainer';
import NewsList from './NewsCarousel/NewsList';
import PollCard from './Poll/PollCard';
import LinkCard from './QuickLinks/LinkCard';

export default function HomePage() {
  return (
    <div>
      <HeroContainer />
      <LinkCard />
      <CardList />
      <PollCard />
      <NewsList />
    </div>
  );
}
