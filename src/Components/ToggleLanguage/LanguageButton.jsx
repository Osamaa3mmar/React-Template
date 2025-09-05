import React, { useContext } from 'react'
import { BsGlobe } from "react-icons/bs";
import { LanguageContext } from '../../Contexts/LanguageContext';

export default function LanguageButton() {

  const {currentLang,changeLanguage}=useContext(LanguageContext);
  console.log(currentLang)
  return (
     <div>
    <button className="btn-primary btn btn-sm" popoverTarget="popover-2" style={{ anchorName: "--anchor-2" }}>
        <BsGlobe/>
    </button>
    
    <ul className=" dropdown-center  dropdown menu  w-20 max-h-[400px] overflow-auto flex-nowrap rounded-box bg-base-100 shadow-sm"
      popover="auto" id="popover-2" style={{ positionAnchor: "--anchor-2" } /* as React.CSSProperties */ }>
      <li key={"arabic"}  onClick={()=>{changeLanguage("ar")}}><a>Arabic</a></li>
      <li key={"english"}  onClick={()=>{changeLanguage("en")}}><a>English</a></li>
    </ul>
    </div>
  )
}
