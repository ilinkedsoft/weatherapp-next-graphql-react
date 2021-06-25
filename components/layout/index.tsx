import { FC } from 'react';
import Header from '../Header/Header';

export interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({
  children,
  ...rest
}) => {
  return (
    <div className="site-content">
      <Header />
      {children}
    </div>
  )
}

export default Layout;
