import "@testing-library/jest-dom/extend-expect";
import { Response, Request, Headers, fetch } from "whatwg-fetch";

global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;