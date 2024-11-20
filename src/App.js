import "./App.css";
import InputField from "./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer";
import socket from "./server";
import { useEffect, useState } from "react";
function App() {
  const [user,setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList]=useState([]);
  console.log("message", messageList);
  useEffect(()=>{
    socket.on('message', (message)=>{
      setMessageList((prevState)=> prevState.concat(message));
    });
    askUserName();
  },[]);
  const askUserName=()=>{
    const userName = prompt("당신의 이름을 입력하세요");
    console.log("uuu", userName);

    socket.emit("login", userName,(res)=>{
      if(res?.ok){
        setUser(res.data);
      }
    });
  };
  const sendMessage=(event)=>{
    event.preventDefault()
    if (!message.trim()) return; // 빈 메시지 전송 방지
    socket.emit("sendMessage", message,(res)=>{
      if(res?.ok) {
        setMessage('');
        console.log('메시지 전송 성공:', message);
      } else {
        console.log('메시지 전송 실패');
      }
    })
  }
  return (
    <div>
      <div className="App">
        <MessageContainer messageList={messageList} user={user}/>
        <InputField message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>

    </div>
  );
}

export default App;
