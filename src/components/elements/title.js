export default function Title({ children }) {
  return (
    <h1
      className="flex text-6xl sm:text-8xl lg:text-9xl xl:text-[200px] text-white sm:tracking-widest lg:tracking-wider xl:tracking-wide"
      style={{
        textShadow:
          "8px 0 #003878, -8px 0 #003878, 0 8px #003878, 0 -8px #003878, 8px 8px #003878, -8px -8px #003878, 8px -8px #003878, -8px 8px #003878",
      }}
    >
      {children}
    </h1>
  );
}
