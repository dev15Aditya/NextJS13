import Card from './components/Carousel/Card';
import CardList from './components/Carousel/CardList';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/QuickLinks/Cards';

export default function Home() {
  return (
    <>
      <Navbar />
      <Cards />
      <CardList />
    </>
  );
}
