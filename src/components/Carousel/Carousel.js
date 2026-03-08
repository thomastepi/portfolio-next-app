import React, { useEffect, useState } from "react";
import { Image, Button, Flex, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import useEmblaCarousel from "embla-carousel-react";
import s from "./Carousel.module.css";

export function Carousel({ carousel }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [imgInView, setImgInView] = useState(0);

  const updateScrollState = () => {
    if (!emblaApi) return;

    setImgInView(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollState();
    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);
  }, [emblaApi]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className="embla">
      <Flex justifyContent="space-between" mb={4}>
        <Flex gap={4}>
          <Button
            borderRadius="full"
            onClick={goToPrev}
            isDisabled={!canScrollPrev}
          >
            <ChevronLeftIcon />
          </Button>

          <Button
            borderRadius="full"
            onClick={goToNext}
            isDisabled={!canScrollNext}
          >
            <ChevronRightIcon />
          </Button>
        </Flex>
        <Box>
          <span>
            {imgInView + 1} / {carousel.length}
          </span>
        </Box>
      </Flex>

      <div className={s["embla__viewport"]} ref={emblaRef}>
        <div className={s["embla__container"]}>
          {carousel.map((image, index) => (
            <div className={s["embla__slide"]} key={index}>
              <Image src={image.imageSrc} alt={image.alt} borderRadius="md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
