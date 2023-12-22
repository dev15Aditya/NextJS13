import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/layout';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div
      style={{
        'font-family': 'Roboto',
        'font-weight': '400',
      }}
    >
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
