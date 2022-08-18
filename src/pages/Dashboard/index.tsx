import Players from "../../components/Players";
import Graph from "../../components/Graph/index";
import Pay from "../../components/Pay";
import Card from "../../components/Card";
import Status from "../../components/Status";

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      <div className="lg:w-2/3 w-full px-2">
        <div className="lg:flex">
          <div className="w-full lg:w-1/2 mb-5 lg-mb-0 lg:px-2">
            <Card>
              <Graph />
            </Card>
          </div>
          <div className="w-full lg:w-1/2 mb-5 lg-mb-0 lg:px-2">
            <Card>
              <Pay />
            </Card>
          </div>
        </div>
        <div className="w-full lg:px-2 mt-5">
          <div className="bg-[#555] rounded-lg">
            <Status />
          </div>
        </div>
      </div>
      <div className="w-1/3 hidden lg:block">
        <Players customHeight="85vh" />
      </div>
    </div>
  );
}
