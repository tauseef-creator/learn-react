import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
interface Props {
    changeStatus: () => void;
}
const Like = ({changeStatus}: Props) => {
  const [status, setStatus] = useState(true);
  const toggle =() =>{ setStatus(!status);  changeStatus();}
      if(status) return <AiFillHeart size={20} color="#ff6b81" onClick={()=>{toggle()}}/>
       return <AiOutlineHeart size={20} onClick={()=>{toggle()}}/>
};

export default Like;
