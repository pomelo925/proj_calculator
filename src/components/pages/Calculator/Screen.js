import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'

import '../../common/PageStyle/electron.css'
import './screen.css'

const outcome = (string) => {
  string = string.replace(/\s/g, '')  // 移除空格

  // 預處理，丟給 eval 辨識和運算
  string = string.replace('×','*')
  string = string.replace('÷','/')
  string = string.replace('%','*0.01')
  string = string.replace('sin','Math.sin')
  string = string.replace('csc','Math.csc')
  string = string.replace('cos','Math.cos')
  string = string.replace('sec','Math.sec')
  string = string.replace('tan','Math.tan')
  string = string.replace('cot','Math.cot')
  string = string.replace('√','Math.sqrt')
  string = string.replace('π','Math.PI')
  string = string.replace('e','Math.E')
  string = string.replace("^", "Math.pow(")
  string = string.replace(/log\((.*?)\)/g, (_, number) => `Math.log(${number}) / Math.log(10)`)
  string = string.replace('ln','Math.log')
  string = string.replace(/\s/g, '')  // 移除空格
  console.log(string)
  
  if (!isParenthesesBalanced(string)) {
    return ' ERROR: Unpaired () !';
  }

  try {
    const result = eval(string);
    return Number.isFinite(result) ? parseFloat(result.toFixed(10)) : 'Undefined';
  } catch (error) {
    return 'ERROR: Incorrect Form of Formula !';
  }
};

// 檢查括號是否平衡的輔助函式
const isParenthesesBalanced = (string) => {
  const stack = [];

  for (let char of string) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};


const Screen = ()=>{
  const [message, setMessage] = useState('');

  useEffect(()=>{
    // 按鍵處理邏輯
    const handleButtonClick = (event)=>{
      if (event.detail === "←") setMessage((prevMessage) => prevMessage.slice(0,-1));
      
      // 清除
      else if (event.detail === "C") setMessage('');

      // 輔助括號
      else if (event.detail === "√x") setMessage((prevMessage) => prevMessage + '√(');
      else if (event.detail === "x^y") setMessage((prevMessage) => prevMessage + '^(');
      else if (event.detail === "10^x") setMessage((prevMessage) => prevMessage + "10^(");
      else if (event.detail === "sin" || event.detail === "cos" ||
              event.detail === "tan" || event.detail === "csc" ||
              event.detail === "cot" || event.detail === "sec" ||
              event.detail === "log" || event.detail === "ln"){
        setMessage((prevMessage) => prevMessage + event.detail + '(');
      }

      // 計算
      else if (event.detail === "=") setMessage((prevMessage) => prevMessage + "  =" + outcome(message));
      
      // 按鍵同字
      else setMessage((prevMessage) => prevMessage + event.detail);
    };
  
    // 監聽 document 上的 'buttonClick' 事件
    document.addEventListener('btnClick', handleButtonClick);
  
    // 在組件卸載時移除事件監聽器
    return () => {
      document.removeEventListener('btnClick', handleButtonClick);
    };
  }, [message]);

  return(
    <div>
      <input 
        className="screen" 
        type="text"
        placeholder="Click Number Button ..."
        value={message} // 綁定狀態中的 message
        readOnly
        onChange={(event) => setMessage(event.target.value)}
        // // 如果字段是可變的，需設置 onChange 處理函式來處理字段值的變化。
        // // onChange 使用 event.target.value 來獲取輸入字段的值
        // // 並將該值設置為新的 message 狀態值。
      />
    </div>
  )
}

export default Screen