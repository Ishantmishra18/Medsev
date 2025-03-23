import React, { useState } from "react";


const MessageBubble = ({ text, sender }) => (
  <div
    className={`py-3 px-6 rounded-4xl max-w-[25vw] h-auto break-words text-wrap text-xl  ${
      sender === "user"
        ? "bg-neutral-600 text-white self-end shadow-md"
        : "self-start text-white"
    }`}
  >
    {text}
  </div>
);

const MedicalChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages([...newMessages, { text: "I'm analyzing your symptoms...", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="flex">
        <div className="w-[70vw] flex flex-col p-3 bg-neutral-800">
            <div className="msgcont h-[75vh] overflow-y-scroll overflow-x-hidden flex flex-col p-4">
                {messages.map((msg , index)=>(
                    <MessageBubble key={index} text={msg.text} sender={msg.sender} />
                ))}
            </div>
            <div className="downcont flex gap-1 relative">
                <input name="" id="" value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="px-6 py-4 w-full outline-none text-xl bg-neutral-700 rounded-4xl h-[20vh] text-white"></input>
            <div className="send px-6 py-4 bg-white font-semibold absolute bottom-3 right-3 rounded-full cursor-pointer" onClick={handleSendMessage}>Send</div>
            </div>
            
        </div>
        <div className="w-[30vw] sticky h-screen">
            <img src="https://media.gettyimages.com/id/1508780671/photo/touching-metaverse.jpg?s=612x612&w=0&k=20&c=80bp44Mc3UA4Qp5YkblAeJfjXBqbzrTTkhPn6-orO-c=" alt="" className="h-full w-full object-cover"/>
        </div>
      
    </div>
  );
};

export default MedicalChatbot;
