import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! I'm your AI shopping assistant. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! I'm a demo chatbot. In the real implementation, I would connect to an AI service to provide helpful responses.",
        isUser: false
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:opacity-90 transition-all duration-300 flex items-center space-x-2 group z-50"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out">
          Chat with AI
        </span>
      </button>

      {/* Chat Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b bg-gradient-to-r from-pink-500 to-purple-500 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">AI Shopping Assistant</h3>
                <p className="text-sm opacity-90">Powered by AI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto h-[calc(100vh-180px)]">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-pink-500 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {!message.isUser && (
                    <div className="flex items-center space-x-1 mb-1">
                      <Sparkles className="h-3 w-3" />
                      <span className="text-xs font-medium">AI Assistant</span>
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ChatBot;