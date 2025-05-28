import React from 'react';
import Image from 'next/image';
import type { ColumnsType } from 'antd/es/table';

export const columns: ColumnsType= [
  {
    title: 'Nama',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Umur',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Alamat',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'No. Telepon 1',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'No. Telepon 2',
    dataIndex: 'cell',
    key: 'cell',
  },
  {
    title: 'Gambar',
    dataIndex: 'picture',
    key: 'picture',
    render: (pictures: string[]) => (
      <div style={{ display: 'flex', gap: 8 }}>
        {
          (
          <Image
            key={pictures[1]}
            src={pictures[1]}
            alt={`avatar-${pictures[1]}`}
            width={120}
            height={50}
          />
          )
        }
      </div>
    ),
  },
];