import BTCIcon from "../../assets/btc.svg";
import ETHIcon from "../../assets/eth.svg";
import { CoinCardProps } from "../../types";

/**
 * The CoinCard component renders a card displaying the value of a cryptocurrency in USD along with its
 * corresponding icon and name.
 * @param {CoinCardProps}  - The CoinCard component takes a prop called "coin" which is an object. The
 * object is expected to have a single key-value pair, where the key represents the name of the coin
 * (e.g. "ETH" or "BTC") and the value represents the price of the coin in USD.
 * @returns The CoinCard component is being returned.
 */
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
