import { useQuery } from "react-query";
import { getPrices } from "../../api";
import { Button, CoinCard, Logo } from "../../components";
import { useNavigate } from "react-router";
import { BarLoader } from "react-spinners";
import { CoinType } from "../../types";

export const Home = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["getPrices"],
    queryFn: getPrices,
  });

  const handleSignup = () => navigate("/signup", { replace: true });

  return isLoading ? (
    <BarLoader color="#614ad9" />
  ) : (
    <div className="container">
      <Logo />
      {data.map((coin: CoinType, index: number) => (
        <CoinCard key={index} coin={coin} />
      ))}
      <Button label="Hacerme una cuenta" onClick={handleSignup} />
    </div>
  );
};
