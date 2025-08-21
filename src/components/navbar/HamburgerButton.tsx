
interface HamburgerButtonProps {
  isOpen: boolean;
  isScrolled: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isOpen, isScrolled, onClick }: HamburgerButtonProps) => {
  return (
    <button
      className="md:hidden text-foreground"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className={`w-6 h-5 flex flex-col justify-between relative ${isOpen ? 'transform' : ''}`}>
        <span 
          className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          } ${isScrolled ? 'bg-foreground' : 'bg-white'}`} 
        />
        <span 
          className={`w-6 h-0.5 transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          } ${isScrolled ? 'bg-foreground' : 'bg-white'}`} 
        />
        <span 
          className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          } ${isScrolled ? 'bg-foreground' : 'bg-white'}`} 
        />
      </div>
    </button>
  );
};

export default HamburgerButton;
