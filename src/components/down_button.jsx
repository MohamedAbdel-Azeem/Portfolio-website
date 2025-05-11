import downIconImg from "../assets/images/downIcon.png";

export default function DownButton({ nextPage }) {
  return (
    <a href={`#${nextPage}`} className="downArrow pt-16">
      <img src={downIconImg} alt="down arrow" className="w-12 h-12" />
    </a>
  );
}
