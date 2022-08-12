import Link from "next/link";

export default function Navigation(): JSX.Element {
  const visibilityBorder = "border-solid border-2 border-lime-600";

  const pages = {
    pages: ["HOME", "ABOUT", "PORTFOLIO", "CONTACT"],
    routes: ["/", "/about", "/portfolio", "/contact"],
  };

  const navStyles = {
    li: "mr-6 border-solid border-2 border-lime-600",
    a: "hover:text-blue-800 hover:underline hover:underline-offset-4 decoration-solid border-solid border-2 border-lime-600",
  };


  return (
    <>
      <div>
        <nav className="fixed w-screen pt-5 border-solid border-2 border-lime-600">
          
          <ul className="flex-1 flex justify-center border-solid border-2 border-lime-600">
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
      </div>
    </>
  );
}
