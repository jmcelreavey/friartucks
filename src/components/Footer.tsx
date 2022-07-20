import { GrFacebook } from 'react-icons/gr';
import { SiContactlesspayment } from 'react-icons/si';

export const Footer = () => (
  <footer className="border-green-700 border-t-2 footer footer-center p-5 bg-base-100 text-green-700">
    <div>
      <p className="font-bold">
        All major payment providers are supported.
      </p>
      <SiContactlesspayment size={40} className="text-black" />
      <p className="font-bold">
        Friar Tucks Ltd. <br />
        Providing tasty meals since 1983
      </p>
      <p>Copyright © {new Date().getFullYear()}</p>
      </div>
  </footer>
);
