import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./ShopByCategory.css";
import "react-tabs/style/react-tabs.css";
import CategoryContener from "./CategoryContener";

const ShopByCategory = () => {
  return (
    <div>
      <div className="md:w-1/2 text-center space-y-6 mb-12 mx-auto">
        <h1 className="font-bold">Filter Your Action Hero</h1>
        <p>
          {" "}
          In the Toy Photo Gallery section, you can showcase a collection of
          captivating and visually appealing images of your toys. Here are some
          ideas on what you can mention about the Toy Photo Gallery section
        </p>
      </div>
      <section>
        <Tabs id="tab-contener" className=" text-black mb-16">
          <TabList className=" border-b-2 border-gray-600">
            <Tab>Marvel</Tab>
            <Tab>Avenger</Tab>
            <Tab>Dc</Tab>
          </TabList>

          <TabPanel>
            <CategoryContener category={"marvel"} />
          </TabPanel>
          <TabPanel>
            <CategoryContener category={"avenger"} />
          </TabPanel>
          <TabPanel>
            <CategoryContener category={"dc"} />
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default ShopByCategory;
