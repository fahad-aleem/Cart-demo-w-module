import { Icon } from "@chakra-ui/icons";
import { HStack, Link, useClipboard, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FacebookShareButton, LinkedinShareButton } from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  LinkIcon,
} from "@goldn/icons";

export const SocialIcons = ({ blogEntry }) => {
  const [url, setURL] = useState<string>();
  const { hasCopied, onCopy } = useClipboard(url);

  useEffect(() => {
    setURL(window.location.href);
  }, [])
  return (
    <HStack ml="0 !important">
      <FacebookShareButton
        url={url}
        quote={blogEntry?.description}
        hashtag="#goldn"
      >
        <Icon
          viewBox="0 0 9 19"
          color="gray.600"
          _hover={{ color: "goldn" }}
          ml="8px"
        >
          <FacebookIcon />
        </Icon>
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <Icon
          viewBox="0 0 24 24"
          color="gray.600"
          _hover={{ color: "goldn" }}
          ml="8px"
        >
          <LinkedinIcon />
        </Icon>
      </LinkedinShareButton>
      {url && <Tooltip
        label={hasCopied ? "copied" : "copy to clipboard"}
        closeDelay={1000}
      >
        <Link onClick={onCopy}>
          <Icon
            viewBox="0 0 18 16"
            w="18px"
            h="20px"
            color="gray.600"
            _hover={{ color: "goldn" }}
            ml="10px !important"
          >
            <LinkIcon />
          </Icon>
        </Link>
      </Tooltip>}
    </HStack>
  );
};
