import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {CountryList} from '../data'

function RegisterItemPage() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPosstsPerPage] = useState(10);

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      const res = await axios.get();
      setDatas(res.data);
      setLoading(false);
    };
    fetchDatas();
  }, []);

  console.log(datas);

  return <div></div>;
}

export default RegisterItemPage;
