import AddCompanyButton from "./components/addCompanyBtn";
import MagicButton from "./components/magic-button";
import StatusLabel, { Status } from "./components/status-label";

export default function Home() {
  return (
  <main>    
<h1 className="text-xl">Home Page</h1>
   <AddCompanyButton/>
   <MagicButton/>
  </main>
  )
}
