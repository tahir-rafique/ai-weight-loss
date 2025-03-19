import { useState } from "react";


const SwitchNotfication = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className="switch-notfi">
      <button className={`toggel-btn ${isSelected ? 'selected': ''}`} onClick={() => setIsSelected(!isSelected)}>
        <div className="thumb"></div>
      </button>

    </div>

  )
}

export default SwitchNotfication;