import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 relative" id="contact">
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-purple/20 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-primary">
            تماس با ما
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            آماده همکاری با استودیوهای بازی‌سازی مستعد و خلاق هستیم
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
         

          <Card className="p-8 md:p-12 bg-gradient-to-br from-cosmic-blue/30 to-cosmic-purple/30 backdrop-blur border-primary/20 text-center">
            <Send className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              بازی خود را به ما معرفی کنید
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              اگر یک استودیوی بازی‌سازی مستقل هستید و به دنبال ناشری قابل اعتماد می‌گردید، دوست داریم درباره پروژه شما بیشتر بدانیم
            </p>
            <Button onClick={() => window.open("https://t.me/Nameless_Entt", "_blank")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-[var(--glow-gold)]"
            >
              ارسال درخواست همکاری
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
