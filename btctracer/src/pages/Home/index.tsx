import { useQuery } from "react-query";
import { getPrices } from "../../api";
import BTCIcon from "../../assets/btc.svg";
import ETHIcon from "../../assets/eth.svg";
import { Button } from "../../components";

export const Logo = () => (
  <div className="logo">
    Bitcoin<span className="logo-color">Tracer</span>
  </div>
);

interface CoinType {
  [name: string]: number;
}

interface CoinCardProps {
  icon: string;
  value: number;
  name: string;
}

export const CoinCard = ({ icon, value, name }: CoinCardProps) => {
  return (
    <div className="coinWrapper">
      <div className="icon">
        <img src={icon} alt="coin-icon" />
      </div>
      <div className="value">USD {value.toFixed(2)}</div>
      <div className="name">Precio {name}</div>
    </div>
  );
};

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getPrices"],
    queryFn: getPrices,
  });

  return isLoading ? (
    <>Loading...</>
  ) : (
    <div className="container">
      <Logo />
      {data.map((coin: CoinType) => {
        switch (Object.keys(coin)[0]) {
          case "ETH": {
            return <CoinCard name="ETH" icon={ETHIcon} value={coin["ETH"]} />;
          }
          case "BTC": {
            return <CoinCard name="BTC" icon={BTCIcon} value={coin["BTC"]} />;
          }
          default:
            return <></>;
        }
      })}
      <Button label="Hacerme una cuenta" onClick={() => {}} />
    </div>
  );
};
