import Navbar from './components/navbar';

export default function Page({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
