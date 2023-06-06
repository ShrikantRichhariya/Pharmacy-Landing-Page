import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function DynamicTable(props) {
  // get table column
  const[TableData, setTableData]= useState(props.items)
  const column = Object.keys(TableData[0]);
  console.log(props.items,TableData);

  const navigate = useNavigate();
  const navigateTo=(pharmacy)=>{
    navigate("/pharmacy/"+pharmacy)
  }
useEffect(()=>{
setTableData(props.items)
},[props.items])


  // get table heading data
  const ThData = () => {
    return column.map((data) => {
      return (
        <th style={{ border: "0.3vh solid lightgrey" }} key={data}>
          {data === "KEY METRICS" ? "" : data}
        </th>
      );
    });
  };
  //

  // get table row data
  const tdData = () => {
    return TableData.map((data) => {
      return (
        <tr>
          {column.map((v, i) => {
            return (v=="Pharmacy"?
            
              <td
              onClick={()=>navigateTo(data[v])}
                style={{
                  // backgroundColor: i == 0 ? "grey" : "pink",
                   border:  "0.3vh solid lightgrey" ,
                  color: i === 0 ? "#6b74d4" : "black",
                  fontWeight: i === 0 ? "bold" : "normal",
                  cursor: i===1 ? "pointer": "pointer"
                }}
              >
                {data[v]}
              </td>:<td
                style={{
                  // backgroundColor: i == 0 ? "grey" : "pink",
                   border:  "0.3vh solid lightgrey" ,
                  color: i === 0 ? "#6b74d4" : "black",
                  fontWeight: i === 0 ? "bold" : "normal",
                
                }}
              >
                {data[v]}
              </td>
            )

          })}
        </tr>
      );
    });
  };
  //Animation for refresh data

//   const rows = Array.from(document.querySelectorAll("tr"));

//   function slideOut(row) {
//     row.classList.add("slide-out");
//   }

//   function slideIn(row, index) {
//     setTimeout(function () {
//       row.classList.remove("slide-out");
//     }, (index + 5) * 200);
//   }

//   rows.forEach(slideOut);

//   rows.forEach(slideIn);

  //

  return (
    <div className="tablemain">
      <div className="tablenotmain">
         <table className="table">
          <thead>
            <tr className="heading">{ThData()}</tr>
          </thead>
          <tbody className="data">{tdData()}</tbody>
        </table>
      </div>
   
    </div>
  );
}
export default DynamicTable;
