import Navbar from './components/Navbar';

export default function Page({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
