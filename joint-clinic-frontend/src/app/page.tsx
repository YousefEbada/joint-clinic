import SideBar from "@components/SideBar/SideBar";
import NavBar from "@components/NavBar/NavBar";

export default function Home() {
  return (
    <div className={"w-full"}>
        {/*{Don't push code to the repo in here}*/}
        <div className={"flex flex-col bg-[#9FD5E2] w-full h-[100vh] justify-center items-center gap-10 p-5"}>
            <NavBar />
                <SideBar/>
        </div>
    </div>
  );
}
