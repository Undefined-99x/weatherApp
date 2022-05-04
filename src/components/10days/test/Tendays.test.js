import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Tendays from "../Tendays";

const setChangeBarChart = jest.fn();

describe("tendays", () => {
  test("should render tendays", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Tendays />
        </Provider>
      </BrowserRouter>
    );
  });
});