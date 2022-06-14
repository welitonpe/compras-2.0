import AddButton from "../../AddButton/Index";

const FooterApp: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "-20px",
        right: "40px",
      }}
    >
      <AddButton />
    </div>
  );
};
export default FooterApp;
