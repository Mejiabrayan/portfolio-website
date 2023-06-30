const Footer = () => {
  return (
    <footer className="w-full bg-transparent" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
      @mejiabrayan
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div className="flex flex-col items-baseline space-y-6">
          <div className="mx-auto">
            <a
              href="/"
              className="mx-auto text-lg text-center text-white transition duration-500 ease-in-out transform tracking-relaxed"
            >
              {/* Your SVG icon */}
            </a>
          </div>
          <div className="mx-auto">
            <span className="mx-auto mt-2 text-sm text-zinc-300">
              Copyright © 2020 - 2021
              <a
                href="https://unwrapped.design"
                className="mx-2 text-blue-500 hover:text-gray-500"
                rel="noopener noreferrer"
              >
                @unwrappedHQ
              </a>
              .Since 2020
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
