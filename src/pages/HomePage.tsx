import Table from '../components/Table';
import { TABLE_STATUS } from '../enums';

const tables = [
  {
    id: 1,
    tableNumber: 1,
    status: TABLE_STATUS.AVAILABLE,
  },
  {
    id: 2,
    tableNumber: 2,
    status: TABLE_STATUS.OCCUPIED,
  },
  {
    id: 3,
    tableNumber: 3,
    status: TABLE_STATUS.AVAILABLE,
  },
];

const HomePage = () => {
  return (
    <div className="flex gap-3">
      {tables.map((table) => (
        <Table
          key={table.id}
          tableNumber={table.tableNumber}
          status={table.status}
        />
      ))}
    </div>
  );
};

export default HomePage;
