import { KeyboardArrowDown } from "@mui/icons-material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function Hero(): JSX.Element {
  const STYLES = {};

  return (
    <>
      <div className="relative bg-black py-20 border-solid border-2 border-lime-600">
        <div className="table mx-auto border-solid border-2 border-lime-600">
          <h2 className="text-6xl text-white font-bold border-solid border-2 border-lime-600">
            Diego Gallardo
          </h2>
          <p className="text-4xl text-white pt-5 border-solid border-2 border-lime-600">
            Portfolio
          </p>
        </div>
      </div>
      <div className="text-white bg-black text-center pt-5 border-solid border-2 border-lime-600">
        <KeyboardArrowDown className="b-0 w-12 h-12 border-solid border-2 border-lime-600" />
      </div>
    </>
  );
}
