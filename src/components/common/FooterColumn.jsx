
function FooterColumn({title, links}) {
  return (
    <div className="flex flex-col">
      <h3 className="text-slate-400 text-base font-medium leading-none uppercase py-3">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-base font-normal leading-snug hover:text-purple-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn