import React, { useState } from 'react';
import './ChatPage.css'; // Ensure you create this CSS file

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a response from ChatGPT
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a simulated response!', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  const handleSuggestion = (suggestion) => {
    setMessages([...messages, { text: suggestion, sender: 'user' }]);
    // Simulate a response from ChatGPT
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `You selected: ${suggestion}`, sender: 'bot' },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-page">
      <header className="chat-header">
        <h1>What is the Query ? </h1>
        <h1>What type of insights do you want ! </h1>
      </header>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="suggestions">
        <button onClick={() => handleSuggestion('Generate Dashboard')} className="suggestion-button">Generate Dashboard</button>
        <button onClick={() => handleSuggestion('Help')} className="suggestion-button">Help</button>
        <button onClick={() => handleSuggestion('History Searches')} className="suggestion-button">History Searches</button>
      </div>

      <footer className="chat-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button onClick={handleSend} className="send-button">Send</button>
      </footer>
    </div>
  );
};

export default ChatPage;