import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-8 pr-8 z-10 w-full bg-transparent justify-end fixed text-white font-semibold" >
      <Link href={"/"} className="px-7 py-4">Downloads</Link>
      <Link href={"/"} className="px-7 py-4">Podcasts</Link>
      <Link href={"/"} className="px-7 py-4">Gallery</Link>
    </nav>
  )
}
