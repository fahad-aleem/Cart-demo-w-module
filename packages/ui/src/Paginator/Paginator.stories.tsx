import { Paginator } from './Pagintor';

export default {
  title: 'Components/Paginator',
  component: Paginator,
};

export const PaginatorExampleWith50Records = () => {
  return <Paginator page={1} total={50} />;
};
