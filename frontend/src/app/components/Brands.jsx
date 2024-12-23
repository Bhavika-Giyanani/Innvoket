const Brands = ({ imagePath, altText = "Brand Logo" }) => {
  return (
    <div className="flex items-center justify-center bg-[#232323] px-6 rounded-2xl">
      <img src={imagePath} alt={altText} className="w-32 h-16 object-contain" />
    </div>
  );
};

export default Brands;
