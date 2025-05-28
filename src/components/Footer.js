function Footer() {
    return (
      <footer className="bg-violet-800 text-white text-center py-4 mt-5">
        <p className="text-sm">
          © {new Date().getFullYear()} ToDo App. Built with ❤️ by Your Name.
        </p>
        <p className="text-xs">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:underline"
          >
            View on GitHub
          </a>
          {" | "}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:underline"
          >
            Visit My Website
          </a>
        </p>
      </footer>
    );
  }
  
  export default Footer;
  