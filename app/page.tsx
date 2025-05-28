import SearchBar  from '@/components/SearchBar'; 
import TableUser from "@/components/TableUser";
import { Button } from 'antd';

export default function Home() {
  return (
    <div className="grid min-h-screen gap-16 sm:px-20 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex justify-between w-full">
          <SearchBar  /> 
          <Button color="default" variant="outlined" className='text-slate-500'>
            + New Data
          </Button>
        </div>
          <TableUser />
      </main>
    </div>
  );
}
