import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

Object.values = (obj) => Object.keys(obj).map(key => obj[key])
