import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          startIcon={<ShareIcon />}
          text="Share Brain" 
        />
        <Button
          variant="secondary"
          startIcon={<PlusIcon />}
          text="Add Content"
        />
      </div>

      <div className="flex">
        <Card
          title="Youtube"
          link="https://www.youtube.com/watch?v=KfF1W7GWfgo"
          type="youtube"
        />
        <Card
          title="Twitter"
          link="https://x.com/taran_adarsh/status/1908050227954606248"
          type="twitter"
        />
      </div>
    </>
  );
}

export default App;
