import Conference from "./component/Conference";
import Herosection from "./component/Herosection";
import Sponsors from "./component/Sponsors";

export default function Home() {
  return (
    <>
      <Herosection />
      <Conference />
      <Sponsors />
    </>
  );
}
