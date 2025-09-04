import { useContext } from "react"
import ThemeContext from "../../Contexts/ThemeContext"
import { TbColorFilter } from "react-icons/tb";

export default function ToggleTheme() {
    const {changeTheme,themes}=useContext(ThemeContext);


  return (
  <div>
<button className="btn-primary btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
    <TbColorFilter size={20}/>
    <p>Theme</p>
</button>

<ul className=" dropdown-end  dropdown menu  w-40 h-[400px] overflow-auto flex-nowrap rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  {themes?.map((theme,index)=>{
        return <li key={index}  onClick={()=>{changeTheme(theme)}}><a>{theme}</a></li>
    })}
</ul>
</div>
  )
}
