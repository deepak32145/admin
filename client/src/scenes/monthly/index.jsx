import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "state/api";
import axios from "axios";

const Monthly = () => {
  const hello = "deepak";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      setData(res.data.data);
    });
  });

  return (
    <div>
      <ul>
        {data.map((res) => {
          return <li>{res.email}</li>;
        })}
      </ul>
    </div>
  );
};

export default Monthly;
