import CanvasPlaceholder from "../components/canvas-placeholder";
import Sidebar from "../components/Sidebar";
import TopToolbar from "../components/top-toolbar";

const Workflow = () => {
  return (
    <div className="max-w-[90vw] mx-auto">
      <TopToolbar />
      <div className="flex flex-row justify-between items-center">
        <Sidebar />
        <CanvasPlaceholder />
      </div>
    </div>
  );
};

export default Workflow;
