import { personal } from '../data';

export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <span>© {new Date().getFullYear()} {personal.fullName}</span>
        <span>Product Designer · UI/UX · Frontend · {personal.location}</span>
      </div>
    </footer>
  );
}
