import Image from "next/image";

import s from "./Sidebar.module.css";
import sidebarImage from "@/static/Earth.png";

export function Sidebar() {
    return (
        <aside className={s.sidebar_box}>
            <Image src={sidebarImage} alt="Earth" width={400} height={620} />
        </aside>
    );
}
