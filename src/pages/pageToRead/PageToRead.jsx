import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { BookContext } from '../../context/BookContext';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index, isActive } = props;
  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(x, y, width, height)}
      stroke={color}
      fill={color}
      strokeWidth={isActive ? 5 : 0}
      style={{ transition: 'stroke-width 0.3s ease-out' }}
    />
  );
};

const CustomLabel = (props) => {
  const { x, y, width, value, index } = props;
  const fill = colors[index % colors.length];

  return (
    <text
      x={x + width / 2}
      y={y - 5}
      fill={fill}
      textAnchor="middle"
      fontSize={12}
    >
      {value}
    </text>
  );
};

const PageToRead = () => {
  const { readList } = useContext(BookContext);

  if (readList.length === 0) {
    return (
      <div className="h-75 flex items-center justify-center bg-gray-100 rounded-xl my-10">
        <p className="text-gray-500 font-bold text-3xl">No data to show</p>
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto bg-gray-50 p-10 rounded-2xl h-100 my-10">
      <ResponsiveContainer>
        <BarChart
          data={readList}
          margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />

          <XAxis
            dataKey="bookName"
            angle={-20}
            textAnchor="end"
            interval={0}
          />

          <YAxis />

          <Bar dataKey="totalPages" shape={<TriangleBar />} activeBar={{}}>
            <LabelList content={<CustomLabel />} />
          </Bar>

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;