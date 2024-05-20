import { imgLibs } from "../constants";

import img101 from "./svg/hearts/1.svg";
import img102 from "./svg/hearts/2.svg";
import img103 from "./svg/hearts/3.svg";
import img104 from "./svg/hearts/4.svg";
import img105 from "./svg/hearts/5.svg";
import img106 from "./svg/hearts/6.svg";
import img107 from "./svg/hearts/7.svg";
import img108 from "./svg/hearts/8.svg";
import img109 from "./svg/hearts/9.svg";
import img110 from "./svg/hearts/10.svg";

import img01 from "./svg/default/1.svg";
import img02 from "./svg/default/2.svg";
import img03 from "./svg/default/3.svg";
import img04 from "./svg/default/4.svg";
import img05 from "./svg/default/5.svg";
import img06 from "./svg/default/6.svg";
import img07 from "./svg/default/7.svg";
import img08 from "./svg/default/8.svg";
import img09 from "./svg/default/9.svg";
import img10 from "./svg/default/10.svg";

//Hearts
const heartsLibImages = [img101, img102, img103, img104, img105, img106, img107, img108, img109, img110];

//Calendars
const calendarsLibImages = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10];

export default function imgLibController(nameImgSet: imgLibs) {
    switch (nameImgSet) {
        case 'Hearts':
            return heartsLibImages

        case 'Calendars':
            return calendarsLibImages

        default:
            return calendarsLibImages
    }
}