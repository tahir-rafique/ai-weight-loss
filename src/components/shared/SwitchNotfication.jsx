import { useState } from "react";

import classNames from "classnames";
// class name is imported as classNames from npm, ya ek NPM ka package hai jo class name ko manage karne me help karta hai Condiction kee base pe class name add/remove karne me help karta hai.

const SwitchNotfication = () => {
  const [isSelected, setisSelected] = useState(false)

  return (
    <div
      onClick={() => setisSelected(!isSelected)}
      className={classNames("cursor-pointer flex items-center w-10 h-5 bg-[var(--color-btn)] border border-[var(--color-bg)] rounded-full transition-all duration-400 ", { 'bg-[var(--color-btn)] border border-[var(--color-bg)]': isSelected  })}>

      <input type="checkbox" name="" id="check" className="absolute -z-1 hidden" value="" />
      <label htmlFor="check" className={classNames('bg-[var(--color-bg-white)] h-4 w-4 rounded-full tansition-all duration-400 ', { 'ml-5 ': isSelected })}
      />

    </div>
  )
}

export default SwitchNotfication;