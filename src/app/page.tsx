import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg">HomePage</h2>

      {/* <a href="/tickets" className="text-sm underline">
        Go to Tickets
      </a> */}
      <Link href={ticketsPath()} className="text-sm underline">
        Go to Tickets
      </Link>
    </div>
  );
};

export default HomePage;
