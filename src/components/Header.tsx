import Link from "next/link";

export default function Header(): JSX.Element {
  const navLinks = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "PORTFOLIO",
      path: "/portfolio",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ];

  const styles = {
    header: "bg-black py-10 text-white",
    nav: "sticky w-screen border-solid border-2 border-lime-600",
    ul: "flex-1 flex justify-center border-solid border-2 border-lime-600",
    li: "mr-6 border-solid border-2 border-lime-600",
    a: "hover:text-blue-800 hover:underline hover:underline-offset-4 decoration-solid border-solid border-2 border-lime-600",
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {navLinks.map((link, i) => (
              <Link key={i} href={link.path}>
                <li className={styles.li}>{link.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
