import Content from "@components/content";
import Profile from "@components/profile";
import Tab from "@components/tab";
import About from "@components/about";
import Guestbook from "./components/guestbook";

export default async function Home() {
  return (
    <div className="flex w-full h-full gap-5 my-16 max-md:mt-16 max-md:m-2 main-container max-md:flex-col md:px-5 ">
      <Profile />
      <Content>
        <Tab tabClassName="text-gray-400" defaultChecked title={"About"}>
          <About />
        </Tab>
        <Tab title={"Guestbook"}>
          <Guestbook />
        </Tab>
        <Tab title={"My work"}>contact</Tab>
      </Content>
    </div>
  );
}
