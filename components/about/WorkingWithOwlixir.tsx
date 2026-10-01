const expectations = [
    {
      number: "01",
      title: "Clear scope and quote upfront",
      description:
        "Before work begins, we agree on what the project includes, the expected cost and the next steps so both sides know what to expect.",
    },
    {
        number: "02",
        title: "Proper project documentation",
        description:
          "Projects are supported by clear written terms and professional invoices containing our registered business details, including the relevant business identification information.",
    },
    {
      number: "03",
      title: "Flexible collaboration",
      description:
        "We work directly with businesses and can also support agencies and creative partners through white-label development when extra technical capacity is needed.",
    },
    {
      number: "04",
      title: "Clear communication throughout",
      description:
        "We explain important decisions, keep communication straightforward and make sure the next step stays clear as the project moves forward.",
    },
  ];
export default function WorkingWithOwlixir() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Introduction */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Working with Owlixir
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Straightforward collaboration,{" "}
                            <span className="text-primary">without unnecessary complexity.</span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Whether we are working directly with a business or supporting
                            another agency behind the scenes, the aim is the same: understand
                            what needs to be done, communicate clearly and build with a
                            purpose.
                        </p>
                    </div>
                </div>

                {/* Expectations */}
                <div className="mt-14 border-t border-border">
                    {expectations.map((item) => (
                        <div
                            key={item.number}
                            className="grid gap-4 border-b border-border py-7 md:grid-cols-[70px_0.75fr_1.25fr] md:items-start md:gap-8 lg:py-8"
                        >
                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                {item.number}
                            </span>

                            <h3 className="max-w-[340px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                {item.title}
                            </h3>

                            <p className="max-w-[560px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}