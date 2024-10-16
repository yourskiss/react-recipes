import { Link } from "react-router-dom";
import './footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p>&copy; 2024. <Link to="/">Term & Condition</Link></p>
    </footer>
  )
}
