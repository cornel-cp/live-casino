import Footer from "./footer";
import Header from "./header";

const Layout = (props: any) => {
  const { children } = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 relative bg-background overflow-x-hidden">
        <Header />
        {children}
        <span
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 text-white rounded-[50%] px-2 pt-[3px] bg-white/20 cursor-pointer hover:bg-white hover:text-gray-600 transition-all duration-500"
        >
          ^
        </span>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
