import { useState } from "react";
import { MessageCircle, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CHAT_URL = "https://chaicorner-agent-hrbwcnaxcvgwhcfc.centralus-01.azurewebsites.net";

  return (
    <>
      <Button
        size="lg"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md h-[600px] p-0 left-auto right-6 top-auto bottom-6 translate-x-0 translate-y-0 flex flex-col">
          <DialogHeader className="p-4 border-b shrink-0">
            <DialogTitle>Chat with us</DialogTitle>
          </DialogHeader>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-12 top-4"
            onClick={() => {
              const newWin = window.open(CHAT_URL, "_blank");
              if (newWin) newWin.opener = null;
            }}
            aria-label="Open chat in new window"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
          <div className="flex-1 min-h-0">
            <iframe
              src={CHAT_URL}
              className="w-full h-full border-0"
              title="Chat"
              allow="microphone"
              style={{ height: '100%', minHeight: '100%' }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatButton;
