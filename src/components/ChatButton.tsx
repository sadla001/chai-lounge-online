import { useState } from "react";
import { MessageCircle, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CHAT_URL =
    "https://garamchai-gthjandwekewdugh.centralus-01.azurewebsites.net";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Bubble */}
      <Button
        size="lg"
        className={`h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all ${
          isOpen ? "bg-red-600" : "bg-blue-600"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Animated Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-box"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 w-[400px] h-[140vh] sm:h-[600px] bg-white rounded-2xl shadow-2xl overflow-y-auto border border-gray-200"
          >
            <div className="flex items-center justify-between px-0.5 py-0.5 border-b bg-gray-50">
              <h2 className="font-semibold text-gray-800 text-sm">
                Chat with us
              </h2>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(CHAT_URL, "_blank")}
                  aria-label="Open chat in new tab"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <iframe
              src={CHAT_URL}
              className="w-full h-full border-0"
              title="Chat"
              allow="microphone"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatButton;