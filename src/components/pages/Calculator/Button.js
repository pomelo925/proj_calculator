import React, { useEffect } from 'react';

import '../../common/PageStyle/electron.css'
import './button.css'

function Button() {
  //在元件渲染時執行指定的副作用程式碼。
  //在這裡副作用程式碼是一個函式，該函式在元件初始化時執行一次
  useEffect(() => {
    const handleClick = (event) => {
      const btnId = event.target.dataset.id;
      const btnClickEvent = new CustomEvent('btnClick', { detail: btnId });

      if(btnId != null) document.dispatchEvent(btnClickEvent);
    } 

    // 在 component 加載時加入監聽器到父元素
    document.addEventListener('click', handleClick);
      
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);


    // 在 component 卸載時移除事件監聽器


  return (
    <div className="parent-grid">
      <div className="symbol_area">
        <button className="gray" data-id="sin"> sin </button>
        <button className="gray" data-id="csc"> csc </button>
        <button className="gray" data-id="cos"> cos </button>
        <button className="gray" data-id="sec"> sec </button>
        <button className="gray" data-id="tan"> tan </button>
        <button className="gray" data-id="cot"> cot </button>
        <button className="gray" data-id="π"> π </button>
        <button className="gray" data-id="e"> e </button>
      </div>

      <div className="power_area">
        <button className="gray" data-id="("> ( </button>
        <button className="gray" data-id=")"> ) </button>
        <button className="gray" data-id="10^x"> 10^x </button>
        <button className="gray" data-id="√x"> √x </button>
        <button className="gray" data-id="x^y"> x^y </button>
        <button className="gray" data-id="log"> log </button>
        <button className="gray" data-id="%"> % </button>
        <button className="gray" data-id="ln"> ln </button>
      </div>

      <div className="number_area">
        <button className="azu" data-id="1"> 1 </button>
        <button className="azu" data-id="2"> 2 </button>
        <button className="azu" data-id="3"> 3 </button>
        <button className="azu" data-id="4"> 4 </button>
        <button className="azu" data-id="5"> 5 </button>
        <button className="azu" data-id="6"> 6 </button>
        <button className="azu" data-id="7"> 7 </button>
        <button className="azu" data-id="8"> 8 </button>
        <button className="azu" data-id="9"> 9 </button>
        <button className="azu0" data-id="0"> 0 </button>
        <button className="azu" data-id="."> . </button>
      </div>

      <div className="operator_area">
        <button className="gray" data-id="+"> + </button>
        <button className="gray" data-id="←"> ← </button>
        <button className="gray" data-id="-"> - </button>
        <button className="gray" data-id="="> = </button>
        <button className="gray" data-id="×"> × </button>
        <button className="AC" data-id="C"> AC </button>
        <button className="gray" data-id="÷"> ÷ </button>
      </div>

    </div>
  );
}

export default Button;
