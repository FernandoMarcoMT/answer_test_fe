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
         scroll={{
            y: 600, // Tinggi maksimum table 400px (scroll vertikal jika lebih)
            x: 'max-content', // Scroll horizontal jika kolom melebihi lebar layar
        }}
        />
    )
};

export default TableUser;