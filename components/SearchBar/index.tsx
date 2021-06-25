import { FC, useEffect, useState } from 'react';

export interface SearchBarProps {
  searchAction?: any;
}

const SearchBar: FC<SearchBarProps> = ({  
  searchAction,
  ...rest
}) => {
  const [cityName, setCityName] = useState<string>('');
  return (
    <div className="hero" style={{background: 'url(\'banner.png\')', backgroundSize: 'cover'}}>
      <div className="container">
        <form action="#p" className="find-location">
          <input type="text" placeholder="Find your location..." value={cityName} onChange={(e) => setCityName(e.target.value)}/>
          <input type="submit" value="Find" onClick={(e) => searchAction && searchAction(cityName)}/>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
