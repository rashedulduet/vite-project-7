import { AiOutlineSearch } from "react-icons/ai";

export default function NavBar({name,address}) {
  
  return (
 
    <div className="main mb-1">
      <div className="container">
      <div className="row me-auto">
        <div className="col-md-3 col-11 text-center mt-2 logo">
        <img src="/public/all_image/bpdb_logo.jpg" alt="bpdb_logo" className="logo_image"/>
        </div>
        <div className="col-md-9 col-11 text-center">
          <h1 className="pdbName fw-bolder">{name}</h1>
          <h1 className="gtcName fs-2 ">{address}</h1>
        </div>
      </div>
    </div>
    </div>

  )
}
