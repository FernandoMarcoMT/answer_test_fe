'use client'

import { Table } from "antd";
import { columns } from './header';
import { useEffect, useState } from 'react';
import { getUsers } from '@/services/fetchUser';
import { useUserStore } from "@/stores/userStore";





  

const TableUser = () => {

    const { users, setUsers, search } = useUserStore();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setLoading(true);
        getUsers({ search })
            .then(setUsers)
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])

    return (
        <Table
         dataSource={users || []} 
         columns={columns} 
         pagination={false}
         loading={loading} 
         rowKey="email"
         scroll={{
            y: 600,
        }}
        />
    )
};

export default TableUser;