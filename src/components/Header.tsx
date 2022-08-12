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
    ul: "flex justify-center",
    li: "m-3",
    a: "hover:text-blue-400 hover:underline hover:underline-offset-4 decoration-solid",
  };

  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.ul}>

            {navLinks.map((link, i) => (
              <Link key={i} href={link.path}>
                <li className={styles.li}>
                  <a className={styles.a}>{link.name}</a>
                </li>
              </Link>
            ))}

          </ul>
        </nav>
      </header>
    </>
  );
}
