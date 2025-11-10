import { useState } from "react";
import { MessageCircle, X, ExternalLink, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const CHAT_URL =
    "https://garamchai-gthjandwekewdugh.centralus-01.azurewebsites.net";

  const handleToggle = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) {
        setIsExpanded(false);
      }
      return next;
    });
  };

  const handleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Bubble */}
      <Button
        size="lg"
        className={`h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all ${
          isOpen ? "bg-red-600" : "bg-blue-600"
        }`}
        onClick={handleToggle}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Animated Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-box"
            layout
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`mt-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 ${
              isExpanded
                ? "w-[90vw] max-w-[1200px] h-[90vh]"
                : "w-[400px] h-[75vh] sm:h-[600px]"
            }`}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
                <h2 className="font-semibold text-gray-800 text-base">
                  Chai Lounge Chat
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleExpand}
                  aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
                  className="text-gray-600"
                >
                  {isExpanded ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <ExternalLink className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <iframe
                src={CHAT_URL}
                className="flex-1 w-full border-0"
                title="Chat"
                allow="microphone"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatButton;

