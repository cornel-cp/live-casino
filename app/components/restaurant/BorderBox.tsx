const BorderBox = (props: any) => {
  const { children } = props;
  return (
    <main className="relative h-[380px] mx-[88px] px-10 pt-[25px] pb-[33.5px] border-4 border-red-600 shadow-md shadow-red-600 rounded-xs">
      {children}
    </main>
  );
};

export default BorderBox;
