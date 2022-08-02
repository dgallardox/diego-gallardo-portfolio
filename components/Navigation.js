import Link from "next/link";

export default function Navigation() {

  const pages = {
    pages: ["home", "about", "portfolio", "blog"],
    routes: ["/", "/about", "/portfolio", "/blog"],
  }

  const navStyles = {
    li: "mr-6",
    a: "hover:text-blue-800 hover:underline decoration-solid",
  };

  return (
    <>
      <nav className="fixed w-screen">
        <ul className="flex-1 flex justify-center mr-auto">
          {pages.pages.map((page, i) => (
            <>
              <li className={navStyles.li}>
                <Link href={pages.routes[i]}>
                  <a className={navStyles.a}>{page}</a>
                </Link>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </>
  );
}
