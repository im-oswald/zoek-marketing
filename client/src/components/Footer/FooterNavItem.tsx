type FooterNavItemProps = {
  content: string;
};

export default function FooterNavItem({ content }: FooterNavItemProps) {
  return (
    <li>
      <a
        href="#"
        title=""
        className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"
      >
        {content}
      </a>
    </li>
  );
}
