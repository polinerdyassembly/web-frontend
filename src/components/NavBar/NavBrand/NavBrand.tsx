import Image from "next/image";

import Logo from "@/public/logo-74-76.png";

export default function NavBrand() {
  return <Image src={Logo.src} alt="brand logo" width={74} height={76} />;
}
