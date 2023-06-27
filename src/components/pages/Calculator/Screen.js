import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'

import '../../common/PageStyle/electron.css'
import './screen.css'

const Monitor = ()=>{
  const [message, setMessage] = useState('');

  useEffect(()=>{
    const handleButtonClick = (event)=>{
      switch(event.detail){
        
        case "":
          setMessage((prevMessage) => prevMessage.slice(0, -1));
          break;

        case "←":
          setMessage((prevMessage) => prevMessage.slice(0, -1));
          break;

        case "C":
          setMessage('');
          break;
        
        default:
          // 更新狀態中的 message
          setMessage((prevMessage) => prevMessage + event.detail);
          break;
      }
    };
  
    // 監聽 document 上的 'buttonClick' 事件
    document.addEventListener('btnClick', handleButtonClick);
  
    // 在組件卸載時移除事件監聽器
    return () => {
      document.removeEventListener('btnClick', handleButtonClick);
    };
  }, []);

  return(
    <div>
      <input 
        className="screen" 
        type="text"
        placeholder="Type or Click number button !"
        value={message} // 綁定狀態中的 message
        onChange={(event) => setMessage(event.target.value)}
        // 如果字段是可變的，需設置 onChange 處理函式來處理字段值的變化。
        // onChange 使用 event.target.value 來獲取輸入字段的值
        // 並將該值設置為新的 message 狀態值。
      />
    </div>
  )
}

export default Monitor