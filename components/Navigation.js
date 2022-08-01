import Link from "next/link";

export default function Navigation() {

  const pages = ["home", "about", "portfolio", "blog"];

  const navStyles = {
    li: "mr-6",
    a: "hover:text-blue-800 hover:underline decoration-solid",
  };

  return (
    <>
      <nav className="fixed w-screen">
        <ul className="flex-1 flex justify-center mr-auto">
          {pages.map((page) => (
            <>
              <li className={navStyles.li}>
                <Link href="/">
                  <a className={navStyles.a}>{page}</a>
                </Link>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </>
    // <>
    //   <nav className="fixed w-screen">
    //     <ul className="flex-1 flex justify-center mr-auto">
    //       <li className={navStyles.li}>
    //         <Link href="/">
    //           <a className={navStyles.a}>Home</a>
    //         </Link>
    //       </li>
    //       <li className={navStyles.li}>
    //         <Link href="/about">
    //           <a className={navStyles.a}>About</a>
    //         </Link>
    //       </li>
    //       <li className={navStyles.li}>
    //         <Link href="/portfolio">
    //           <a className={navStyles.a}>Portfolio</a>
    //         </Link>
    //       </li>
    //       <li className={navStyles.li}>
    //         <Link href="/blog">
    //           <a className={navStyles.a}>Blog</a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </>
  );
}
