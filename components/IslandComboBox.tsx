import { useEffect, useState } from 'react';
import api from "../providers/Api"

interface Island {
  id: string;
  name: string;
}

const IslandComboBox = () => {
  const [islands, setIslands] = useState<Island[]>([]);

  useEffect(() => {
    const fetchIslands = async () => {
      try {
        const response = await api.get<Island[]>('/islands');
        console.log(response.data)
        setIslands(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIslands();
  }, []);

  return (
    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5">
      <option selected></option>
      
      {islands.map((island) => (
        <option key={island.id} value={island.name}>{island.name}</option>
      ))}
    </select>
  );
};

export default IslandComboBox;
