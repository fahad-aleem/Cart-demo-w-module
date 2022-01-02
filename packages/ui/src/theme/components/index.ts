import body from "./Body";
import Button from "./Button";
import Checkbox from "./Checkbox";
import FormLabel from "./FormLabel";
import Input, { globalInput } from "./Input";
// import Radio from "./Radio";
import Select, { globalSelect } from "./Select";
import Slider from "./Slider";
import Spinner from "./Spinner";
import Switch from "./Switch";
import Textarea from "./Textarea";

export const components = {
  Input,
  FormLabel,
  Select,
  Checkbox,
  Button,
  Switch,
  Textarea,
  Slider,
  Spinner,
};

export const globalComponents = {
  Input: globalInput,
  Select: globalSelect,
  body,
};
