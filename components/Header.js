// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='fixed z-30 w-full flex justify-between items-center px-4 md:px-16 xl:px-0 xl:h-[90px] top-0'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href={'/'}>
          
        </Link>
        {/* socials */}
        <Socials />
      </div>
    </header>
  );
};

export default Header;
