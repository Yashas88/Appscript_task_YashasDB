export default function Navbar() {
  const links = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {links.map((link) => (
          <a key={link} href="#" className="navbar-link">
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
