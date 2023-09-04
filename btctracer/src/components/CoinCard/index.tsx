import BTCIcon from "../../assets/btc.svg";
import ETHIcon from "../../assets/eth.svg";
import { CoinCardProps } from "../../types";

export const CoinCard = ({ coin }: CoinCardProps) => {
  const key = Object.keys(coin)[0];
  const value = coin[key];

  const getIcon = (name: string) => {
    switch (name) {
      case "ETH":
        return ETHIcon;
      case "BTC":
        return BTCIcon;
      default:
        return "";
    }
  };

  return (
    <div className="coinWrapper">
      <div className="icon">
        <img src={getIcon(key)} alt="coin-icon" />
      </div>
      <div className="value">USD {value.toFixed(2)}</div>
      <div className="name">Precio {key}</div>
    </div>
  );
};
