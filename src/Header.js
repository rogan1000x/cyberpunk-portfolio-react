import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div>
      <h1>ROGAN KIM</h1>
      <h2>Web Developer</h2>

      <nav>
        <Link 
          to="/" 
          style={{ color: location.pathname === '/' ? '#00ffff' : '#ff2d9b' }}
        >
          Home
        </Link>
        {' | '}
        <Link 
          to="/skills" 
          style={{ color: location.pathname === '/skills' ? '#00ffff' : '#ff2d9b' }}
        >
          Skills
        </Link>
        {' | '}
        <Link 
          to="/about" 
          style={{ color: location.pathname === '/about' ? '#00ffff' : '#ff2d9b' }}
        >
          About
        </Link>
      </nav>
    </div>
  );
}

export default Header;