import { TABLE_STATUS } from '../enums';

interface ITableProps {
  tableNumber: number;
  status: string;
}

const Table = ({ tableNumber, status }: ITableProps) => {
  return (
    <div
      className={`${
        status === TABLE_STATUS.AVAILABLE ? 'bg-green-700' : 'bg-gray-700'
      } p-4 text-center text-white rounded`}
    >
      <h3 className="text-3xl">{tableNumber}</h3>
      <span>{status}</span>
    </div>
  );
};

export default Table;
