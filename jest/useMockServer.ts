import { setupServer } from "msw/node";

const useMockServer = handlers => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
};

export default useMockServer;
