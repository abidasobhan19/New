import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { AddBox, ArrowDownward } from "@material-ui/icons";
const axios = require("axios");

const Table = () => {

    const url = "https://forbit.tech/movizo/movies/popular";

    const [movies,setData] = useState([]);


    useEffect(() => {
      if(movies.length===0){
        axios
        .get(url)
        .then((response) => {
          console.log(response.data)
          setData(response.data);
          
        })
        .catch((err) => console.log(err));
      }
     
    },[]);


    return (
        <div style={{ maxWidth: "100%" }}>
      <MaterialTable
      title="Basic Validation Preview"
      columns={[
        {
          title: 'Name', field: 'name', validate: rowData => rowData.name !== '',
        },
        { title: 'Surname', field: 'surname', validate: rowData => rowData.surname.length > 3 },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric', validate: rowData => rowData.birthYear > 1900 },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([movies, newData]);
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [movies];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData(dataUpdate);

              resolve();
            }, 1000)
          }),
      }}
    />
      </div>
    );
}
 
export default Table;