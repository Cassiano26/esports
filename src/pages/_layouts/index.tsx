import { Navbar } from "../components/navbar";
import { Sponsors } from "../components/sponsors";

export default function Home() {
  return (
    <div className="w-[1728px] ml-auto mr-auto">
      <Navbar />
      <Sponsors />
    </div>
  )
}