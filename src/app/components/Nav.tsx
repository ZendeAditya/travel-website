import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/hilink-logo.svg";
import user from "../../../public/user.svg";
import Button from "./Button";
const Nav = () => {
  let navLinks = [
    { href: "/", key: "home", label: "Home" },
    { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
    { href: "/", key: "services", label: "Services" },
    { href: "/", key: "pricing ", label: "Pricing " },
    { href: "/", key: "contact_us", label: "Contact Us" },
  ];
  return (
    <>
      <nav className="flex items-center justify-between gap-2 py-3 relative z-30  text-black ">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo image" width={72} height={29} />
          </Link>
        </div>
        <div>
          <ul className=" hidden h-full gap-12 lg:flex">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className=" text-xl text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flexCenter">
          <Button type="button" title="LogIn" icon={user} variant="btn_dark" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
