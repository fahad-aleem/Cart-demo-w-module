import { useEffect, useState, useMemo } from "react";

import { useScript } from "@goldn/hooks";

import { GOOGLE_MAPS_API_KEY } from "../../../constants";
import { Address } from "./FormAddress";

const formatAddress = (
  place: google.maps.places.PlaceResult | null
): Address | null => {
  if (!place) {
    return null;
  }

  const getByType = (type: string) =>
    place.address_components.find(addrC => addrC.types.includes(type))
      ?.short_name || "";

  return {
    street: [getByType("route"), getByType("street_number")].join(" "),
    city: getByType("locality"),
    state: getByType("administrative_area_level_1"),
    postalCode: getByType("postal_code"),
    country: getByType("country"),
  };
};

export const useAddress = (): Address | null => {
  const status = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`
  );
  const [place, setPlace] = useState<google.maps.places.PlaceResult>(null);

  const populate = (autocomplete: google.maps.places.Autocomplete): void => {
    const place = autocomplete.getPlace();

    setPlace(place);
  };

  useEffect(() => {
    if (status !== "ready") return;

    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete") as HTMLInputElement,
      {
        types: ["geocode"],
        componentRestrictions: { country: ["US"] },
        fields: ["address_component"],
      }
    );

    const autocompleteListener = autocomplete.addListener("place_changed", () =>
      populate(autocomplete)
    );

    return () => {
      autocompleteListener.remove();

      const mapContainer = document.getElementsByClassName("pac-container");

      while (mapContainer.length > 0) {
        mapContainer[0].parentNode.removeChild(mapContainer[0]);
      }
    };
  }, [status]);

  return useMemo(() => formatAddress(place), [place]);
};
