import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Terms of Service | Owlixir",
    description:
        "Read the terms that apply when working with Owlixir on web design, website improvements, SEO, maintenance and related digital services.",
    alternates: {
        canonical: "/terms",
    },
};

const sections = [
    {
        number: "01",
        title: "About these terms",
        content: (
            <>
                <p>
                    These terms explain the general conditions that apply when
                    you engage Owlixir for web design, website development,
                    website improvements, SEO, maintenance, audits or related
                    digital services.
                </p>

                <p>
                    Owlixir is an independent web studio operated by Hatim Tagmi
                    in Morocco. Project-specific details such as scope,
                    deliverables, price and payment arrangements may be set out
                    separately in a quotation, proposal, invoice, email or other
                    written agreement.
                </p>

                <p>
                    Where project-specific written terms differ from these
                    general terms, the project-specific terms will apply to that
                    part of the engagement.
                </p>
            </>
        ),
    },
    {
        number: "02",
        title: "Project scope",
        content: (
            <>
                <p>
                    Before paid project work begins, we aim to establish a clear
                    scope describing the work to be carried out, expected
                    deliverables and agreed price or pricing basis.
                </p>

                <p>
                    Work or features that fall outside the agreed scope may
                    require a separate quotation, additional fee or revised
                    timeline. We will normally discuss this with you before
                    carrying out additional chargeable work.
                </p>

                <p>
                    Estimates, discussions or examples provided before the scope
                    is agreed should not be treated as a commitment to deliver
                    work that is not included in the final agreed scope.
                </p>
            </>
        ),
    },
    {
        number: "03",
        title: "Quotes and payment",
        content: (
            <>
                <p>
                    Pricing and payment arrangements are agreed according to the
                    project. A project may use a fixed price, staged payments,
                    recurring charges or another arrangement stated in writing.
                </p>

                <p>
                    Where a quotation has a stated validity period, the quoted
                    price may be reviewed after that period. If no validity
                    period is stated, we may revise a quotation before it has
                    been accepted if the scope, requirements or circumstances
                    change.
                </p>

                <p>
                    Invoices should be paid according to the payment terms
                    stated on the relevant invoice or agreed for the project.
                    Where payment is overdue, work or delivery may be paused
                    until the outstanding amount is resolved.
                </p>
            </>
        ),
    },
    {
        number: "04",
        title: "Client responsibilities",
        content: (
            <>
                <p>
                    To complete work effectively, we may need information,
                    feedback, approvals, content or access from you. You agree
                    to provide reasonably accurate information and the materials
                    required for the agreed work.
                </p>

                <p>Your responsibilities may include:</p>

                <ul>
                    <li>
                        Providing content, branding, images and business
                        information where required
                    </li>
                    <li>
                        Providing appropriate access to websites, hosting,
                        domains or third-party services where necessary
                    </li>
                    <li>
                        Reviewing work and providing feedback or approval within
                        a reasonable time
                    </li>
                    <li>
                        Ensuring that materials you provide can legally be used
                        for the project
                    </li>
                    <li>
                        Keeping your own account credentials secure and using
                        appropriate access permissions
                    </li>
                </ul>

                <p>
                    Delays in receiving required information, access, feedback
                    or approvals may affect delivery dates.
                </p>
            </>
        ),
    },
    {
        number: "05",
        title: "Timelines and delivery",
        content: (
            <>
                <p>
                    Any project timeline or delivery date is based on the
                    information available when it is provided and may depend on
                    timely feedback, access, content and decisions from the
                    client.
                </p>

                <p>
                    We will make reasonable efforts to meet agreed timelines,
                    but dates may need to change where requirements change,
                    client dependencies are delayed, third-party services are
                    unavailable or circumstances outside our reasonable control
                    affect the work.
                </p>

                <p>
                    Where a deadline is particularly important, it should be
                    agreed explicitly as part of the project scope.
                </p>
            </>
        ),
    },
    {
        number: "06",
        title: "Changes and revisions",
        content: (
            <>
                <p>
                    Reasonable revisions may be included where they form part of
                    the agreed project scope. The number, type or extent of
                    revisions may also be specified in the project quotation or
                    agreement.
                </p>

                <p>
                    Requests that materially change the approved direction,
                    functionality, structure or original requirements may be
                    treated as additional work.
                </p>

                <p>
                    If additional work is required, we may provide a revised
                    quote or agree another pricing arrangement before
                    proceeding.
                </p>
            </>
        ),
    },
    {
        number: "07",
        title: "Websites and third-party services",
        content: (
            <>
                <p>
                    Website projects can depend on third-party products and
                    services such as hosting providers, domain registrars,
                    content management systems, plugins, APIs, email providers,
                    analytics platforms, payment services and other software.
                </p>

                <p>
                    Unless explicitly included in our agreement, third-party
                    charges are separate from Owlixir's fees and remain the
                    client's responsibility.
                </p>

                <p>
                    Third-party services operate under their own terms,
                    availability and policies. We cannot guarantee that an
                    external service will remain available, unchanged,
                    compatible or free of interruptions.
                </p>

                <p>
                    Where practical, we will explain important third-party
                    dependencies that form part of the work we deliver.
                </p>
            </>
        ),
    },
    {
        number: "08",
        title: "Website maintenance and support",
        content: (
            <>
                <p>
                    Maintenance and support cover only the services agreed for
                    the relevant arrangement. They do not automatically include
                    unlimited development, redesign work, new functionality or
                    support for every third-party system connected to a
                    website.
                </p>

                <p>
                    Websites can be affected by software updates, hosting
                    environments, external integrations, security events and
                    changes made by other parties. We will address issues
                    according to the maintenance or support scope that has been
                    agreed.
                </p>
            </>
        ),
    },
    {
        number: "09",
        title: "SEO and search visibility",
        content: (
            <>
                <p>
                    SEO work is intended to improve a website's search
                    foundations, relevance, visibility and ability to compete
                    for appropriate searches.
                </p>

                <p>
                    Search engines use systems and algorithms that are outside
                    Owlixir's control. Rankings, traffic, indexing, enquiries
                    and commercial results therefore cannot be guaranteed.
                </p>

                <p>
                    SEO results may also depend on factors such as competition,
                    website history, content, location, market demand,
                    third-party websites and changes made by search engines.
                </p>
            </>
        ),
    },
    {
        number: "10",
        title: "Website checks and audits",
        content: (
            <>
                <p>
                    A free Website Check is a high-level review intended to
                    identify useful observations or obvious areas worth further
                    attention. It is not a comprehensive technical, SEO,
                    accessibility, legal or security audit.
                </p>

                <p>
                    A paid Website Audit provides a deeper review according to
                    the scope agreed for that audit. Findings and
                    recommendations reflect the website, information and access
                    available at the time of review.
                </p>

                <p>
                    An audit cannot guarantee that every possible issue will be
                    identified, particularly where relevant systems,
                    information or access are unavailable.
                </p>
            </>
        ),
    },
    {
        number: "11",
        title: "Content and intellectual property",
        content: (
            <>
                <p>
                    You retain ownership of content, branding, images and other
                    materials that you provide to us, subject to any rights held
                    by third parties.
                </p>

                <p>
                    You grant us permission to use those materials as reasonably
                    necessary to carry out the agreed work.
                </p>

                <p>
                    Unless otherwise agreed, rights in custom final project work
                    created specifically for you will be transferred or
                    licensed for your use once the corresponding agreed fees
                    have been paid in full.
                </p>

                <p>
                    Pre-existing tools, reusable code, development methods,
                    frameworks, libraries, templates, general techniques and
                    third-party materials remain subject to their existing
                    ownership or licence terms.
                </p>
            </>
        ),
    },
    {
        number: "12",
        title: "Project visibility and portfolio use",
        content: (
            <>
                <p>
                    Unless confidentiality requirements or another written
                    agreement prevent it, we may refer to completed work in the
                    Owlixir portfolio or use limited project material to
                    demonstrate the type of work we provide.
                </p>

                <p>
                    We will not intentionally publish confidential information,
                    private credentials, non-public business information or
                    materials that we do not have permission to disclose.
                </p>

                <p>
                    If a project requires specific confidentiality or
                    white-label arrangements, those requirements should be
                    agreed in writing.
                </p>
            </>
        ),
    },
    {
        number: "13",
        title: "Access and credentials",
        content: (
            <>
                <p>
                    Where access to a website or third-party account is required,
                    we may ask for an appropriate account, invitation or
                    temporary permission.
                </p>

                <p>
                    Where possible, clients should provide the minimum access
                    reasonably required rather than sharing personal master
                    credentials.
                </p>

                <p>
                    Clients remain responsible for controlling their accounts
                    and for removing or changing access when it is no longer
                    required.
                </p>
            </>
        ),
    },
    {
        number: "14",
        title: "Cancellations and paused projects",
        content: (
            <>
                <p>
                    If you want to cancel or pause a project, please contact us
                    as soon as possible. The financial consequences will depend
                    on the project, the work already completed, commitments
                    already made and any project-specific cancellation terms
                    agreed in writing.
                </p>

                <p>
                    Fees for work already completed or costs already incurred
                    may remain payable. Any refund or remaining balance will be
                    considered according to the relevant project agreement and
                    circumstances.
                </p>

                <p>
                    We may also pause or end work where payment remains overdue,
                    required cooperation is repeatedly unavailable, the
                    requested work becomes unlawful or unsafe, or continuing
                    the engagement is no longer reasonably possible.
                </p>
            </>
        ),
    },
    {
        number: "15",
        title: "Liability",
        content: (
            <>
                <p>
                    We aim to provide services with reasonable care and skill.
                    However, digital services depend on technologies, platforms
                    and circumstances that are not always within our control.
                </p>

                <p>
                    To the extent permitted by applicable law, Owlixir is not
                    responsible for indirect or consequential losses arising
                    from matters outside the agreed scope or from failures,
                    changes or interruptions caused by third-party services,
                    platforms or systems outside our reasonable control.
                </p>

                <p>
                    Nothing in these terms is intended to exclude or limit any
                    responsibility that cannot legally be excluded or limited.
                </p>
            </>
        ),
    },
    {
        number: "16",
        title: "Confidentiality",
        content: (
            <>
                <p>
                    During a project, either party may receive non-public
                    information relating to the other's business, systems or
                    work.
                </p>

                <p>
                    We will take reasonable care not to disclose confidential
                    client information except where necessary to provide the
                    agreed services, where authorised by the client, or where
                    disclosure is required by law.
                </p>
            </>
        ),
    },
    {
        number: "17",
        title: "Personal information",
        content: (
            <p>
                Information about how Owlixir handles personal information is
                explained in our{" "}
                <Link
                    href="/privacy"
                    className="cursor-pointer text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary"
                >
                    Privacy Policy
                </Link>
                .
            </p>
        ),
    },
    {
        number: "18",
        title: "Changes to these terms",
        content: (
            <p>
                These terms may be updated as Owlixir's services, processes or
                legal requirements change. The version that applies to a
                specific project may also depend on the project-specific terms
                agreed with the client.
            </p>
        ),
    },
    {
        number: "19",
        title: "Questions",
        content: (
            <p>
                If you have a question about these terms or an existing
                project, contact{" "}
                <a
                    href="mailto:hatimtagmi@gmail.com"
                    className="cursor-pointer text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary"
                >
                    hatimtagmi@gmail.com
                </a>
                .
            </p>
        ),
    },
];

export default function TermsPage() {
    return (
        <>
            <Navigation />

            <main>
                <section className="pb-20 pt-40 md:pb-24 md:pt-48 lg:pb-28 lg:pt-52">
                    <div className="site-container">
                        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                        Legal
                                    </p>
                                </div>

                                <h1 className="mt-7 max-w-[620px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                                    Terms of
                                    <br />
                                    <span className="text-primary">
                                        Service.
                                    </span>
                                </h1>
                            </div>

                            <div className="flex items-end">
                                <div>
                                    <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                        These terms set out the general basis
                                        for working with Owlixir. Specific
                                        project scope, pricing and payment terms
                                        are agreed separately before work
                                        begins.
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                        <span>Effective: October 2026</span>
                                        <span>Last updated: October 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-border">
                    <div className="site-container">
                        <div className="grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                            <aside className="hidden border-r border-border py-16 pr-12 lg:block">
                                <div className="sticky top-32">
                                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                        Working together
                                    </p>

                                    <p className="mt-5 max-w-[300px] text-[15px] leading-6 text-text-secondary">
                                        Scope, deliverables and pricing are
                                        agreed before paid work begins. These
                                        terms provide the general framework
                                        around that agreement.
                                    </p>

                                    <div className="mt-8 border-t border-border pt-6">
                                        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                            Questions
                                        </p>

                                        <a
                                            href="mailto:hatimtagmi@gmail.com"
                                            className="mt-3 inline-block cursor-pointer break-all text-[14px] leading-6 text-text-secondary transition-colors hover:text-primary"
                                        >
                                            hatimtagmi@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </aside>

                            <div className="py-6 lg:py-16">
                                {sections.map((section) => (
                                    <section
                                        key={section.number}
                                        className="grid gap-5 border-b border-border py-10 first:pt-4 last:border-b-0 md:grid-cols-[70px_1fr] md:gap-8 lg:first:pt-0"
                                    >
                                        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                            {section.number}
                                        </p>

                                        <div>
                                            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-text-primary">
                                                {section.title}
                                            </h2>

                                            <div className="mt-6 max-w-[720px] space-y-5 text-[15px] leading-6 text-text-secondary md:text-[16px] [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px] [&_li]:before:h-1 [&_li]:before:w-1 [&_li]:before:rounded-full [&_li]:before:bg-primary [&_ul]:space-y-2">
                                                {section.content}
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-space border-t border-border bg-surface">
                    <div className="site-container">
                        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                        Start a project
                                    </p>
                                </div>

                                <h2 className="mt-6 max-w-[520px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                                    Clear scope before{" "}
                                    <span className="text-primary">
                                        work begins.
                                    </span>
                                </h2>
                            </div>

                            <div className="flex items-end">
                                <div>
                                    <p className="max-w-[600px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                        Tell us what you need. We can review
                                        the project, clarify the scope and
                                        provide the relevant next steps before
                                        you commit to the work.
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="mt-7 inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                                    >
                                        Start a project
                                    </Link>

                                    <p className="mt-5 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        Personal information is handled
                                        according to our{" "}
                                        <Link
                                            href="/privacy"
                                            className="cursor-pointer text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary"
                                        >
                                            Privacy Policy
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}