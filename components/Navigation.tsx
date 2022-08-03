import Link from "next/link";

export default function Navigation(): JSX.Element {

  const pages = {
    pages: ["HOME", "ABOUT", "PORTFOLIO", "CONTACT"],
    routes: ["/", "/about", "/portfolio", "/contact"],
  }

  const navStyles = {
    li: "mr-6",
    a: "hover:text-blue-800 hover:underline hover:underline-offset-4 decoration-solid",
  };

  return (
    <>
      <nav className="fixed w-screen pt-5">
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
