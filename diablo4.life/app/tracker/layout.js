import Navbar from './components/navbar';
import ReportHistort from './components/ReportHistory';
import data from '../components/UserActivity/user.json';

export default function Page({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <ReportHistort data={data} />
    </div>
  );
}
