const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-black text-primary mb-2">Aurelion</h3>
            <p className="text-muted-foreground">ناشر بازی‌های ویدیویی</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">درباره ما</a>
            <a href="#games" className="hover:text-primary transition-colors">بازی‌ها</a>
            <a href="#contact" className="hover:text-primary transition-colors">تماس</a>
          </div>

          <div className="text-center md:text-left text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Aurelion. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
