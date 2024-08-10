import Button from "../components/Button";
import img from "../assets/images/hand-holding-a-phone.png";

const Onboarding = () => {
  return (
    <div className="home-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div data-test="right-column" className="rectangle" />
          <div data-test="left-column" className="div" />
          <img
            data-test="phone-img"
            className="hand-with-mobile"
            alt=""
            src={img}
          />
          <img data-test="logo" className="logo" alt="logo" src="/logo.png" />
          <div data-test="title" className="text-wrapper-2">
            Chat anywhere with anyone
          </div>
          <Button data-test="btn" className="button-instance">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
