import downIconImg from "../../assets/images/downIcon.png";

export function createDownButton(nextPage) {
    const downButton = document.createElement("a");

    const downIcon = document.createElement("img");
    downIcon.src = downIconImg;
    downIcon.alt = "down arrow";
    downIcon.classList.add("w-12", "h-12");

    downButton.appendChild(downIcon);
    downButton.href = `#${nextPage}`;
    downButton.classList.add("downArrow"); //Down Arrow Class is Defined in the styles.css file
    return downButton;
}