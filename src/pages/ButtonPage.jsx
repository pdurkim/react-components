import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <h1 className="pb-8 text-8xl">Buttons</h1>
      <div>
        <Button primary className="mb-3">
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button primary outline className="mb-3">
          <GoBell />
          Primary, Outline
        </Button>
      </div>
      <div>
        <Button secondary rounded className="mb-3">
          <GoCloudDownload />
          Secondary, Rounded
        </Button>
      </div>
      <div>
        <Button success rounded className="mb-3">
          Success, Rounded
        </Button>
      </div>
      <div>
        <Button danger outline rounded className="mb-3">
          <GoDatabase />
          Danger, Outline, Rounded
        </Button>
      </div>
      <div>
        <Button warning rounded className="mb-3">
          <GoDatabase />
          Warning, Rounded
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

/* Using Tailwind CSS
  1. Decide on a new styling rule you want to add
  2. Go to tailwind.css/docs
  3. Hit CMD + K to search
  4. Search for your styling rule
  5. Add appropriate className to elements
*/
