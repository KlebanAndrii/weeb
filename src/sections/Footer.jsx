import youtube from "../assets/icon/youtube.svg";
import facebook from "../assets/icon/facebook.svg";
import twitter from "../assets/icon/twitter.svg";
import instagram from "../assets/icon/instagram.svg";
import linkedin from "../assets/icon/linkedin.svg";
import FooterColumn from "../components/common/FooterColumn";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Overview", href: "#overview" },
      { label: "Browse", href: "#browse" },
      { label: "Accessibility", href: "#accessibility" },
      { label: "Five", href: "#five" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "Brainstorming", href: "#brainstorming" },
      { label: "Ideation", href: "#ideation" },
      { label: "Wireframing", href: "#wireframing" },
      { label: "Research", href: "#research" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#help center" },
      { label: "Ideation", href: "#ideation" },
      { label: "Blog", href: "#blog" },
      { label: "Tutorials", href: "#tutorials" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Press", href: "#press" },
      { label: "Blog", href: "#blog" },
      { label: "Events", href: "#events" },
      { label: "Careers", href: "#careers" },
    ],
  },
};

const socialLinks = [
  { name: "YouTube", icon: youtube, href: "https://youtube.com" },
  { name: "Facebook", icon: facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: linkedin, href: "https://linkedin.com" },
];

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white border-t border-slate-200">
      <div className="container">
        <div className="grid grid-col-1 lg:grid-cols-5 text-center lg:text-start justify-center gap-y-12 lg:gap-x-12 py-12">
          <a href="#" className="text-3xl font-bold leading-9">
            weeb
          </a>

          {Object.values(footerLinks).map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        <div className="flex flex-col text-center lg:text-start lg:flex-row lg:justify-between  py-12 border-t border-slate-200">
          <div className="text-base font-normal leading-snug mb-6 lg:mb-0">
            <p>&copy; {currentYear} Weeb, Inc. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex justify-center lg:justify-end gap-x-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="group"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      aria-hidden="true"
                      className="w-6 h-6 opacity-100 group-hover:opacity-60 transition-opacity duration-300 dark:invert"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



// import youtube from "../assets/icon/youtube.svg";
// import facebook from "../assets/icon/facebook.svg";
// import twitter from "../assets/icon/twitter.svg";
// import instagram from "../assets/icon/instagram.svg";
// import linkedin from "../assets/icon/linkedin.svg";

// const footerLinks = {
//   product: {
//     title: "Product",
//     links: [
//       { label: "Pricing", href: "#pricing" },
//       { label: "Overview", href: "#overview" },
//       { label: "Browse", href: "#browse" },
//       { label: "Accessibility", href: "#accessibility" },
//       { label: "Five", href: "#five" },
//     ],
//   },
//   solutions: {
//     title: "Solutions",
//     links: [
//       { label: "Brainstorming", href: "#brainstorming" },
//       { label: "Ideation", href: "#ideation" },
//       { label: "Wireframing", href: "#wireframing" },
//       { label: "Research", href: "#research" },
//     ],
//   },
//   resources: {
//     title: "Resources",
//     links: [
//       { label: "Help Center", href: "#help" },
//       { label: "Blog", href: "#blog" },
//       { label: "Tutorials", href: "#tutorials" },
//     ],
//   },
//   company: {
//     title: "Company",
//     links: [
//       { label: "About", href: "#about" },
//       { label: "Press", href: "#press" },
//       { label: "Events", href: "#events" },
//       { label: "Careers", href: "#careers" },
//     ],
//   },
// };

// const socialLinks = [
//   { name: "YouTube", icon: youtube, href: "https://youtube.com" },
//   { name: "Facebook", icon: facebook, href: "https://facebook.com" },
//   { name: "Twitter", icon: twitter, href: "https://twitter.com" },
//   { name: "Instagram", icon: instagram, href: "https://instagram.com" },
//   { name: "LinkedIn", icon: linkedin, href: "https://linkedin.com" },
// ];

// function FooterColumn({ title, links }) {
//   return (
//     <div className="flex flex-col">
//       <h3 className="text-slate-400 dark:text-slate-500 text-sm font-semibold uppercase tracking-wider mb-4">
//         {title}
//       </h3>
//       <ul className="space-y-3">
//         {links.map((link) => (
//           <li key={link.label}>
//             <a
//               href={link.href}
//               className="text-slate-700 dark:text-slate-300 text-base font-normal hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
//             >
//               {link.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-white dark:bg-slate-950 text-slate-950 dark:text-white border-t border-slate-200 dark:border-slate-800">
//       <div className="container">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 py-12 lg:py-16">
//           {/* Logo/Brand */}
//           <div className="text-center lg:text-start">
//             <a
//               href="#"
//               className="inline-block text-3xl font-bold leading-9 text-slate-950 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
//             >
//               weeb
//             </a>
//             <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs mx-auto lg:mx-0">
//               Design tools for the modern creative team.
//             </p>
//           </div>

//           {/* Footer Columns */}
//           {Object.values(footerLinks).map((column) => (
//             <FooterColumn
//               key={column.title}
//               title={column.title}
//               links={column.links}
//             />
//           ))}
//         </div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-6 py-8 border-t border-slate-200 dark:border-slate-800">
//           {/* Copyright & Legal */}
//           <div className="text-center lg:text-start">
//             <p className="text-slate-600 dark:text-slate-400 text-sm font-normal mb-2">
//               © {currentYear} Weeb, Inc. All rights reserved.
//             </p>
//             <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
//               <a
//                 href="#privacy"
//                 className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
//               >
//                 Privacy Policy
//               </a>
//               <span className="text-slate-400">•</span>
//               <a
//                 href="#terms"
//                 className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
//               >
//                 Terms of Service
//               </a>
//               <span className="text-slate-400">•</span>
//               <a
//                 href="#cookies"
//                 className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
//               >
//                 Cookie Policy
//               </a>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div>
//             <ul className="flex justify-center lg:justify-end gap-4">
//               {socialLinks.map((social) => (
//                 <li key={social.name}>
//                   <a
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-200 group"
//                     aria-label={`Visit our ${social.name} page`}
//                   >
//                     <img
//                       src={social.icon}
//                       alt=""
//                       aria-hidden="true"
//                       className="w-5 h-5 opacity-70 group-hover:opacity-100 dark:invert transition-opacity"
//                     />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;