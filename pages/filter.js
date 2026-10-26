import { useState } from "react";
function Filter()
{
    const [item, setItem] = useState([
        {id:0, title: "rafael", isDone:false},
        {id:1, title: "angela", isDone:true},
        {id:2, title: "maria", isDone:true}
    ]);
    const itemFiltrado = item.filter((prev) => prev.isDone == true)
    console.log(itemFiltrado)
}

export default Filter;