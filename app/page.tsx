'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, FaceIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export default function Home() {
  const { setTheme, theme } = useTheme()
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <header className="flex justify-center bg-blue-500">
        <div className="flex justify-between w-4/5">
          <div className="flex justify-center items-center">
            <Image src={"/logo.webp"} alt={"logo"} width={100} height={100} priority style={{ width: 100, height: 'auto' }} ></Image>
            <button className="mx-2 text-2xl text-white">History</button>
            <button className="mx-2 text-2xl text-white">About</button>
          </div>
          <div className="flex justify-center items-center">
            {theme === "light" ? (
              <MoonIcon className="mx-2 text-white w-5 h-5" onClick={() => setTheme("dark")} />
            ) : (
              <SunIcon className="mx-2 text-white w-5 h-5" onClick={() => setTheme("light")} />
            )
            }
            <button className="mx-2 text-2xl text-white" onClick={() => setTheme("dark")}>Language</button>
            <span className="mx-2 text-2xl text-white">sign in</span>
          </div>
        </div>
      </header>
      <main className="flex flex-1 justify-center bg-white">
        <div className="flex flex-col justify-start mt-20 w-1/2">
          <div className="text-4xl font-bold mb-5 text-center text-black dark:text-white">TO DO LISTS</div>
          <div className="flex flex-1 flex-col justify-start items-center bg-neutral-100 w-full rounded">
            <div className="flex flex-row justify-center items-center mt-10">
              <input placeholder="Add to do" />
              <Button className="ml-2 text-2xl text-white bg-blue-500">Add</Button>
            </div>
            <div>
              {/* TODO: add todo list items */}
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-row justify-center items-center mt-10 h-10">
        <p>版权所有 &copy; 2023 网站名称</p>
        <p>网站运营者：网站运营者名称</p>
        <p>联系方式：xxx@example.com</p>
        <p>网站描述：网站的简要描述</p>
      </footer>
    </div>
  );
}
