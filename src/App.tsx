import { Switch, Route } from "react-router";
import { Checkout } from "./Checkout";
import { Home } from "./Home";
import { Cart } from "./Cart";
import { Header } from "./shared/Header";
import { OrderSummary } from "./OrderSummary";

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/order">
            <OrderSummary />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
};
