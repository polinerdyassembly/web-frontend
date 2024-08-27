import NavBar from "@/components/NavBar/NavBar";
import BgHome from "@/public/bg-home.svg";

export default function Home() {
  return (
    <div className="static min-h-screen w-screen">
      <header>
        <NavBar />
      </header>

      <BgHome
        viewBox="0 0 1086 982"
        className="absolute inset-y-0 left-0 -z-10 h-full w-auto"
      />

      <main />
    </div>
  );
}
