import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";

interface BreadcrumbsProps {
  name: string;
  slug: string;
}
export const Breadcrumbs = ({ name, slug }: BreadcrumbsProps) => {
  return (
    <Breadcrumb
      ml="-20px"
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem
        fontWeight="semibold"
        color="gray.500"
        _hover={{ color: "goldn" }}
      >
        <BreadcrumbLink href="/blog/">Goldn Blog</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem fontWeight="semibold" color="gray.500">
        <Link href={`/categories/${slug}`}>
          <a>{name}</a>
        </Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
