import React from "react";
import { TabButton, TabsHeader } from "./Styles";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["Info", "Orders", "Comments", "Favorites"];

const ProfileTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <TabsHeader>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </TabsHeader>
  );
};

export default ProfileTabs;
