import React, { useState } from 'react';
import ChatBot from './ChatBot'; // Ensure this path matches where your ChatBot component is located

const ChatRoom = () => {
  const [communityMessage, setCommunityMessage] = useState('');

  const handleCommunityMessageChange = (e) => {
    setCommunityMessage(e.target.value);
  };

  const handleSendCommunityMessage = () => {
    if (communityMessage.trim()) {
      // Logic to send the message to the community (e.g., via an API call or WebSocket)
      console.log("Message sent to community:", communityMessage);

      // Clear the message input after sending
      setCommunityMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-6">Chat Room</h1>
      
      {/* ChatBot Component */}
      <div className="flex-1 mb-6">
        <ChatBot />
      </div>
      
      {/* Community Message Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Send Message to Community</h2>
        <textarea
          value={communityMessage}
          onChange={handleCommunityMessageChange}
          placeholder="Type your message here..."
          className="w-full h-24 px-3 py-2 border rounded-lg resize-none mb-4"
        />
        <button
          onClick={handleSendCommunityMessage}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
