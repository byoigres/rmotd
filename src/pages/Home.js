import { h } from 'preact';
import FullPageLayout from '../components/Layouts/FullPageLayout';
import MinutesContainer from '../containers/MinutesContainer';

const Home = () => (
  <FullPageLayout>
    <MinutesContainer />
  </FullPageLayout>
);

export default Home;
