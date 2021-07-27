import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Food from './components/Food';
import ProductInfo from './components/ProductInfo';

const App = () => {
  return (
    <>
      <Box bgColor="#F5F5F5">
        <Router>
          <Switch>
            <Route exact path="/" component={Food} />
            <Route exact path="/info" component={ProductInfo} />

            <Redirect to="/" />
          </Switch>
        </Router>
      </Box>
    </>
  );
};
export default App;
