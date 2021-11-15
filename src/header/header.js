import logo from './Logo.jpg';

const Header = ({subtitle}) => {
    return (
        <div className="row">
            <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="col-md-7 mt-5 subtitle" >
                   {subtitle}
            </div>
        </div>
      );
}
 
export default Header;