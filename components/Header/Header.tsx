import { FC } from 'react';
import Image from 'next/image';
import logoPic from 'images/logo.png';

const Header: FC = () => {
  return (
    <div className='site-header'>
      <div className='container'>
        <a href='index.html' className='branding'>
          <Image src={logoPic} alt='' className='logo' />
          <div className='logo-type'>
            <h1 className='site-title'>City Weather</h1>
            <small className='site-description'></small>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Header;
