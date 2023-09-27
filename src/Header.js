import './Header.css';

function Header() {
    return (
      <header>
        <div id='header-wrapper'>
          <div className='logo'>
            <h1>Hassan</h1>
          </div>
          <ul className="menu">
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Work</a></li>
          </ul>
          <a className='resume' href="">Resume</a>
        </div>
      </header>
    );
  }
  
  export default Header;
