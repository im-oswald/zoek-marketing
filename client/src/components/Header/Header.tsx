export default function Header() {
  return (
    <header className="font-poppins flex items-center justify-center">
      <nav className="flex w-11/12 max-w-7xl justify-between py-10">
        <div>
          <a href="#">Logo</a>
        </div>

        <ul className="flex items-center gap-12">
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
          <button className="hover:bg-brand-background mx-2 rounded-lg border border-black px-6 py-3 active:bg-gray-200">
            Request a Quote
          </button>
        </ul>
      </nav>
    </header>
  );
}
