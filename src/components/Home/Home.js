import './Home.scss';
import Popular from '../Popular/Popular';
import SearchResults from '../SearchResults/SearchResults';
import SearchInput from '../SearchInput/SearchInput';

function Home() {
  return (
    <>
      <div className='home-banner'>
        <SearchInput />
      </div>
      <SearchResults />
      <Popular />
    </>
  )
}

export default Home