import { ClosableDialog } from "./closabledialog";
import { createElement } from "./util";
import { PRIVACYPOLICY } from "./privacypolicy";
import tutImage from "url:../images/tut.png";

export class TutorialDialog extends ClosableDialog {
    constructor() {
        super();
        this.dialog.classList.add("dialog-tutorial");
    }

    show() {
        this.innerHTML = "";
        this.contentContainer.style.userSelect = "";
        let h1 = createElement("h1");
        h1.innerText = "Tutorial..";

        let learnMore = createElement("span", "link");
        learnMore.addEventListener("click", () => {
            this.contentContainer.style.userSelect = "text";
            this.innerText = PRIVACYPOLICY;
            this.contentContainer.scrollTop = 0;
        });
        learnMore.innerText = "learn more";

        let body = createElement("div");
        body.innerHTML =
            "Hello, you can resize the cropping area by dragging on the "
            + "\"corners\" of the circle/square/rectangle.<br>"
            + "To move the cropping area, click and drag anywhere inside the circle/square/rectangle.<br>"
            + "Server Banner format can be used for both Server Banner and Server Invite banner, both are 16:9.<br>"
            + "Please submit any issues or feature requests to the Github repo linked below.";

        body.innerHTML += "<br><br>" +
            "<b>Privacy Policy: </b>";

        body.appendChild(learnMore);

        this.appendChild(h1, body);

        super.show();
    }
}