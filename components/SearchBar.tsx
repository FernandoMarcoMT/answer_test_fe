'use client'

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useUserStore } from '@/stores/userStore';
import { getUsers } from '@/services/fetchUser';

const { Search } = Input;



const SearchBar = () => {
  const { setUsers, setSearch, search } = useUserStore();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (value: string) => {
    await getUsers({ search })
          .then(setUsers)
          .catch(console.error)
  }
  return(
    <Search
      placeholder="Search"
      allowClear
      value={search}
      onChange={handleSearchChange}
      onSearch={handleSearch}
      className="w-56"
      style={{ width: 500 }}
    />
  )
};

export default SearchBar;