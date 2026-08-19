import Image from 'next/image';

export function HeroCollage() {
  return (
    <div className="relative isolate mx-auto h-[25rem] max-w-[42rem] sm:h-[34rem] lg:h-[38rem]">
      <div className="border-border bg-surface absolute inset-x-[11%] top-[3%] z-10 aspect-[16/10] overflow-hidden rounded-[1.5rem] border">
        <Image
          src="/products/pinnr-hero.jpg"
          alt="Pinnr product dashboard in Shopify Admin"
          fill
          sizes="(max-width: 1024px) 80vw, 40vw"
          className="object-cover object-top"
          loading="eager"
        />
      </div>
      <div className="border-border bg-surface absolute bottom-[4%] left-0 z-20 aspect-[1.25/1] w-[48%] overflow-hidden rounded-[1.5rem] border">
        <Image
          src="/products/discova.png"
          alt="Discova technology discovery interface"
          fill
          sizes="(max-width: 1024px) 45vw, 23vw"
          className="object-cover object-top"
        />
      </div>
      <div className="border-border bg-surface absolute right-0 bottom-[9%] z-30 aspect-[1.12/1] w-[47%] overflow-hidden rounded-[1.5rem] border">
        <Image
          src="/products/trustkarry-request-inbox.png"
          alt="TrustKarry request coordination interface"
          fill
          sizes="(max-width: 1024px) 45vw, 23vw"
          className="object-cover object-top"
        />
      </div>
      <div
        className="bg-wash absolute top-[16%] left-[3%] -z-10 size-56 rounded-full blur-3xl sm:size-80"
        aria-hidden
      />
    </div>
  );
}
