import { Container } from '@/components/ui/Container'

const industryImages = [
  '/industries/Access Control.webp',
  '/industries/BodyGarding.webp',
  '/industries/Construction.webp',
  '/industries/Retail.webp',
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="h-screen w-full overflow-hidden bg-[#EEEDEB] text-[#0E151D]">
      <Container className="grid h-full gap-10 pt-24 lg:grid-cols-[minmax(30rem,1fr)_minmax(32rem,1fr)] lg:pt-28">
        <div className="w-full max-w-xl lg:max-w-[36rem]">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#0E151D]/80">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="mt-4 text-4xl font-medium leading-[1.08] text-[#0E151D] sm:text-5xl max-w-[33rem]">
            Security solutions build for your industry.
          </h2>
          <div className="h-0.5 w-20 bg-[#0E151D]/95 mt-6" />
          <p className="mt-8 max-w-lg text-[18px] leading-5 text-[#7F7F7F]">
            We deliver tailored security solutions designed to protect people, assets and operations across corporate, construction, executive and high-risk environments.
          </p>
        </div>

        <div className="relative max-h-[34rem] overflow-visible self-center -mt-16 industries-gallery">
          {industryImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Industry preview ${index + 1}`}
              className="industries-gallery-img"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
