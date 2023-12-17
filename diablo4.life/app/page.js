import CardList from './components/Carousel/CardList';
import LinkCard from './components/QuickLinks/LinkCard';
import Navbar from './components/Navbar/Navbar';
import NewsList from './components/NewsCarousel/NewsList';
import PollCard from './components/Poll/PollCard';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <LinkCard />
      <CardList />
      <PollCard />
      <NewsList />
      <Footer />
    </>
  );
}
