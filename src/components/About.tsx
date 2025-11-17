import { Card } from "@/components/ui/card";
import { Gamepad2, Users, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "بازی‌های باکیفیت",
      description: "ما بازی‌هایی را انتخاب می‌کنیم که استانداردهای بالای کیفیت را رعایت کنند",
    },
    {
      icon: Users,
      title: "حمایت از توسعه‌دهندگان",
      description: "پشتیبانی کامل از استودیوهای مستقل و توسعه‌دهندگان مستعد به روش های مختلف از جمله مشاوره و آموزش رایگان",
    },
    {
      icon: Trophy,
      title: "موفقیت مشترک",
      description: "فقط زمانی که شما به درآمد میرسید ما به درآمد میرسیم. شرکت ما تا قبل از موفقیت شما هیچ مبلغی را از شما درخواست نمیکند ",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-blue/20 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-primary">
            درباره Aurelion
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            هدف ما کمک به بازی و برنامه نویسان ایرانی جهت ورود به مارکت جهانی است
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-bl from-cosmic-purple/30 to-cosmic-blue/30 backdrop-blur border-primary/20">
          <h3 className="text-3xl font-bold mb-6 text-primary">ماموریت ما</h3>
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            Aurelion با هدف کشف و معرفی بازی‌های استثنایی به بازار جهانی تاسیس شد. ما معتقدیم که هر بازی یک داستان منحصر به فرد دارد و وظیفه ما این است که این داستان‌ها را به گوش جهانیان برسانیم.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            تیم ما از متخصصان با تجربه در صنعت بازی تشکیل شده است که با اشتیاق در زمینه یافتن و پرورش استعدادهای نوظهور فعالیت می‌کنند.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
