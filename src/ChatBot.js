import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

// Keyword-based responses
const responses = {
  "study techniques": "Active recall and spaced repetition are effective methods for studying.",
  "time management": "Use a planner or digital calendar to organize tasks and set deadlines.",
  "study habits": "Regular breaks, a quiet study environment, and setting specific goals can improve study habits.",
  "motivation": "Set clear goals, reward yourself for achieving milestones, and stay positive.",
  "pomodoro technique": "The Pomodoro Technique involves working in intervals, usually 25 minutes, followed by a short break.",
  "study tip": "Here's a tip: Try to summarize each topic you study in your own words to reinforce learning.",
  "timetable" : `
  Here's a timetable for you! Don't forget to take breaks! Good Question               

9:00 AM	Start Session 1: Subject 1
10:00 AM	Short Break (10 minutes)
10:10 AM	Continue Session 1: Subject 1
11:00 AM	Break (20 minutes)
11:20 AM	Start Session 2: Subject 2
12:20 PM	Short Break (10 minutes)
12:30 PM	Continue Session 2: Subject 2
1:30 PM	    Lunch Break (1 hour)
2:30 PM	    Start Session 3: Subject 3
3:30 PM	    Short Break (10 minutes)
3:40 PM	    Continue Session 3: Subject 3
4:30 PM	    Break (20 minutes)
4:50 PM	    Review/Revise any subject
5:20 PM 	Wrap-up, review notes
5:30 PM	    End of Study Session`,
"win code rush" : "Yes"
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(null);

  useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
      setSpeechRecognition(new SpeechRecognitionClass());
    } else {
      console.warn('Speech Recognition API not supported.');
    }
  }, []);

  useEffect(() => {
    if (isListening && speechRecognition) {
      speechRecognition.lang = 'en-US';
      speechRecognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        setInput(spokenText);
        handleSubmit(spokenText);
      };
      speechRecognition.start();
      speechRecognition.onend = () => setIsListening(false);
    }
  }, [isListening, speechRecognition]);

  const handleSubmit = (text) => {
    const userMessage = text.trim().toLowerCase();
    const responseText = getResponse(userMessage);
    if (responseText) {
      setMessages([...messages, { text: userMessage, type: 'user' }, { text: responseText, type: 'bot' }]);
    } else {
      setMessages([...messages, { text: userMessage, type: 'user' }, { text: "Sorry, I don't understand that question.", type: 'bot' }]);
    }
    setInput('');
  };

  const getResponse = (userMessage) => {
    for (const keyword in responses) {
      if (userMessage.includes(keyword)) {
        return responses[keyword];
      }
    }
    return null;
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleVoiceToggle = () => {
    if (!speechRecognition) {
      alert('Speech Recognition is not supported in your browser.');
      return;
    }
    setIsListening(!isListening);
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      <div className="flex-1 p-4 overflow-auto">
        <h1 className="text-3xl font-bold mb-4">ChatBot</h1>
        <div className="flex-1 overflow-y-auto bg-gray-100 p-2 rounded-lg space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              <div
                className={`px-4 py-2 rounded-lg my-1 max-w-xs ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); handleSubmit(input); }}
        className="p-4 bg-white border-t flex space-x-2"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me about study-related topics..."
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
        <button
          type="button"
          onClick={handleVoiceToggle}
          className={`px-4 py-2 ${isListening ? 'bg-red-500' : 'bg-green-500'} text-white rounded-lg hover:bg-opacity-80`}
        >
          {isListening ? 'Stop Listening' : 'Speak'}
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
