import { KeyboardArrowDown } from "@mui/icons-material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { stylesheetInclude } from "sitemap/dist/lib/sitemap-stream";

export default function Hero(): JSX.Element {
  const styles = {
    mainDiv: "text-white bg-black py-20",
    textDiv: "table mx-auto",
    mainText: "text-6xl font-bold",
    subText: "text-4xl pt-5",
    iconDiv: "text-center bg-black pt-10 pb-5",
    icon: "text-white b-0 w-12 h-12",
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.textDiv}>
          <div className={styles.mainText}>Diego Gallardo</div>
          <div className={styles.subText}>Portfolio</div>
        </div>
      </div>
      <div className={styles.iconDiv}>
        <KeyboardArrowDown className={styles.icon} />
      </div>
    </>
  );
}
