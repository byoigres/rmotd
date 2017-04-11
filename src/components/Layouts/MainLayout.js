import { h } from 'preact';
import Navbar from '../Navbar';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Navbar />
    <div className="container">
      {children}
    </div>
  </div>
);

export default MainLayout;
