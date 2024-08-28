import NavBrand from "@/components/NavBar/NavBrand";
import NavItem from "@/components/NavBar/NavItem";
import SearchBox from "@/components/SearchBox";

export default function NavBar() {
  return (
    <div className="flex min-h-32 justify-center border-b-2 border-neutral-300 px-16 pb-4 pt-8">
      <div className="flex w-full max-w-screen-lg items-center gap-8">
        <NavBrand />

        <NavItem href="/catalog">Catalog</NavItem>
        <NavItem href="/about">About us</NavItem>
        <NavItem href="/references">References</NavItem>
        <NavItem href="/news">News</NavItem>
        <NavItem href="/faq" className="me-auto">
          FAQ
        </NavItem>

        <SearchBox />
      </div>
    </div>
  );
}
