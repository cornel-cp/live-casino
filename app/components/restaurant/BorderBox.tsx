const BorderBox = (props: any) => {
  const { children } = props;
  return (
    <main className="relative h-[380px] mx-[88px] px-10 pt-[25px] pb-[33.5px] border-4 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.9)] rounded-xs">
      {children}
    </main>
  );
};

export default BorderBox;
