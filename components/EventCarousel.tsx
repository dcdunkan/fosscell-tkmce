import useEmblaCarousel from "embla-carousel-react";
import EmblaAutoplayPlugin from "embla-carousel-autoplay";
import { EVENTS } from "@/data/event-carousel";
import { formatDateDisplay } from "@/lib/utilities";
import Link from "next/link";

// only generate once.
const SLIDES = EVENTS.map((event, i) => {
  const formattedDate = formatDateDisplay(event.date);
  return (
    <div
      key={`slide-${i}`}
      className="group embla__slide h-80 bg-center bg-no-repeat bg-cover rounded-md select-none border-2 hover:border-primary-500 transition-colors duration-200 hover:shadow-inner"
      style={{ backgroundImage: `url("${event.image}")` }}
    >
      <Link href={`/events/${event.event_id}`}>
        <div className="flex flex-col justify-between w-full h-full p-8 bg-black/35 group-hover:bg-black/10 transition-all duration-200">
          <div>
            <div className="font-bold">{formattedDate}</div>
            <div className="font-black text-2xl">{event.title}</div>
            <div className="text-base">{event.short_description}</div>
          </div>

          <div>read more</div>
        </div>
      </Link>
    </div>
  );
});

export function EventCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    EmblaAutoplayPlugin({
      delay: 5 * 1000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{SLIDES}</div>
    </div>
  );
}
