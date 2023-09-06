export default function Header() {
  return (
    <header className="font-poppins flex items-center justify-center">
      <nav className="flex w-11/12 max-w-7xl justify-between py-8 md:py-10">
        <div className="flex items-center justify-center">
          <a href="#">
            <img src="images/Logo.png" alt="Company Logo" />
          </a>
        </div>

        <ul className="hidden items-center gap-12 lg:flex">
          <li>
            <a href="#" className="hover:text-brand-purple-secondary">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-purple-secondary">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-purple-secondary">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-purple-secondary">
              Blog
            </a>
          </li>
        </ul>
        <button className="hover:bg-brand-orange-secondary bg-brand-orange-primary rounded-lg border border-black px-3 py-1 active:bg-gray-200 md:mx-2 md:px-6 md:py-3">
          Request a Quote
        </button>
      </nav>
    </header>
  );
}
