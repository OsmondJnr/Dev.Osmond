import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Dev Osmond.</p>
      <a href="#home">Back to top</a>
    </footer>
  );
}

export default Footer;