import SearchBar  from '@/components/SearchBar'; 
import TableUser from "@/components/TableUser";
import { Button } from 'antd';

export default function Home() {
  return (
    <div className="grid min-h-screen  ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="grid gap-2 w-full max-w-6xl mx-auto">
          <div className="flex justify-between w-full">
            <SearchBar />
            <Button>+ New Data</Button>
          </div>
          <TableUser />
        </div>
      </main>
    </div>
  );
}
