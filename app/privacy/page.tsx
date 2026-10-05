import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Privacy Policy | Owlixir",
    description:
        "Read how Owlixir collects, uses and protects personal information when you use our website, contact us or request a website review.",
    alternates: {
        canonical: "/privacy",
    },
};

const sections = [
    {
        number: "01",
        title: "Who we are",
        content: (
            <>
                <p>
                    Owlixir is an independent web studio operated by Hatim Tagmi
                    in Morocco. This privacy policy explains how personal
                    information is handled when you visit the Owlixir website,
                    contact us, request a website check or audit, or otherwise
                    communicate with us.
                </p>

                <p>
                    For questions about this privacy policy or how your personal
                    information is handled, you can contact us at{" "}
                    <a
                        href="mailto:hatimtagmi@gmail.com"
                        className="cursor-pointer text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary"
                    >
                        hatimtagmi@gmail.com
                    </a>
                    .
                </p>
            </>
        ),
    },
    {
        number: "02",
        title: "Information we may collect",
        content: (
            <>
                <p>
                    The information we collect depends on how you interact with
                    the website. When you contact us or submit a request, this
                    may include:
                </p>

                <ul>
                    <li>Your name and email address</li>
                    <li>Your business or organisation name</li>
                    <li>Your website address</li>
                    <li>
                        Information about the service, project or website you
                        want us to review
                    </li>
                    <li>
                        Messages and other information you choose to provide
                    </li>
                    <li>
                        Technical information required to operate, protect and
                        secure the website and its forms
                    </li>
                </ul>

                <p>
                    Please avoid submitting sensitive personal information that
                    is not necessary for your enquiry or project.
                </p>
            </>
        ),
    },
    {
        number: "03",
        title: "How we use your information",
        content: (
            <>
                <p>We may use personal information to:</p>

                <ul>
                    <li>Respond to enquiries and requests</li>
                    <li>
                        Review a website or project when you ask us to do so
                    </li>
                    <li>
                        Assess whether Owlixir is suitable for a proposed
                        project
                    </li>
                    <li>
                        Prepare proposals, quotations and project
                        communications
                    </li>
                    <li>Provide and support agreed services</li>
                    <li>
                        Maintain appropriate business and transaction records
                    </li>
                    <li>
                        Protect the website, forms and services from spam,
                        abuse and automated activity
                    </li>
                    <li>
                        Comply with legal, accounting or regulatory
                        requirements where applicable
                    </li>
                </ul>

                <p>
                    We only use personal information where there is an
                    appropriate reason for doing so. Depending on the
                    circumstances, this may include taking steps at your request
                    before entering into a contract, performing an agreed
                    contract, complying with legal obligations, or pursuing
                    legitimate business interests in operating and protecting
                    Owlixir.
                </p>
            </>
        ),
    },
    {
        number: "04",
        title: "Website forms and security",
        content: (
            <>
                <p>
                    Owlixir provides forms that can be used to contact us, discuss a
                    project, request a website check or request a website audit.
                </p>

                <p>
                    Form submissions are processed through our website infrastructure and
                    selected third-party services that help us deliver enquiries, protect
                    forms from spam and automated activity, and prevent abuse.
                </p>

                <p>
                    These services may process limited personal or technical information
                    where necessary to provide their respective functions.
                </p>
            </>
        ),
    },
    {
        number: "05",
        title: "Service providers",
        content: (
            <>
                <p>
                    We use selected third-party service providers to operate, host,
                    protect and support the Owlixir website and its forms. These providers
                    may process limited personal or technical information where necessary
                    to provide their services.
                </p>

                <p>
                    We also use Google Analytics for optional website usage analytics when
                    you consent to analytics. More information about this is provided in
                    the Analytics and cookies section below.
                </p>

                <p>
                    Service providers process information according to their respective
                    roles and services. We do not sell your personal information to third
                    parties.
                </p>
            </>
        ),
    },
    {
        number: "06",
        title: "Analytics and cookies",
        content: (
            <>
                <p>
                    Owlixir uses Google Analytics 4 to understand how visitors use the
                    website and to help us improve its content, performance and user
                    experience. We do not currently use advertising or marketing tracking
                    technologies on this website.
                </p>

                <p>
                    Google Analytics is optional on Owlixir. Analytics is not activated
                    unless you choose to accept analytics through our privacy controls. If
                    you reject analytics or do not make a choice, Google Analytics remains
                    blocked.
                </p>

                <p>
                    When analytics is enabled, Google Analytics may collect information
                    about how you interact with the website, such as pages viewed, general
                    device and browser information, language, approximate location derived
                    from technical information, and information about how you arrived at
                    and navigated the website. Google Analytics may also place analytics
                    cookies, including cookies used to distinguish visits and sessions.
                </p>

                <p>
                    We use this information to understand website traffic, identify which
                    pages and content are useful, evaluate how visitors move through the
                    website and improve Owlixir. We do not intentionally send names, email
                    addresses, form messages or other information entered into our forms
                    to Google Analytics.
                </p>

                <p>
                    If you accept analytics, your preference is stored so that we can
                    remember your choice. If you reject analytics, that choice is also
                    remembered and Google Analytics remains blocked. If you do not make a
                    choice, analytics remains disabled.
                </p>

                <p>
                    You can change your choice at any time using{" "}
                    <strong className="font-medium text-text-primary">
                        Cookie preferences
                    </strong>{" "}
                    in the website footer. If you withdraw previously given consent,
                    analytics is disabled and Owlixir removes the Google Analytics cookies
                    accessible to this website.
                </p>

                <p>
                    Google provides the Google Analytics service and may process analytics
                    information through infrastructure in different countries. Google's
                    own privacy and data processing terms also apply to its handling of
                    information within the service.
                </p>
            </>
        ),
    },
    {
        number: "07",
        title: "How long we keep information",
        content: (
            <>
                <p>
                    Personal information is kept only for as long as reasonably
                    necessary for the purpose for which it was collected,
                    including responding to enquiries, managing projects,
                    maintaining appropriate business records and meeting
                    applicable legal or accounting requirements.
                </p>

                <p>
                    Retention periods can therefore vary depending on the type
                    of information and the nature of our relationship with you.
                    Information that is no longer reasonably required may be
                    deleted or securely disposed of.
                </p>
            </>
        ),
    },
    {
        number: "08",
        title: "International processing",
        content: (
            <>
                <p>
                    Owlixir is operated from Morocco and works with clients and
                    service providers internationally. As a result, personal
                    information may be processed in countries other than the
                    country in which you are located.
                </p>

                <p>
                    Some of the technology providers used to operate the website
                    may also process information through infrastructure located
                    in different countries. Where data protection law requires
                    safeguards for an international transfer, appropriate
                    safeguards should apply according to the circumstances and
                    the service provider involved.
                </p>
            </>
        ),
    },
    {
        number: "09",
        title: "Your privacy rights",
        content: (
            <>
                <p>
                    Depending on the data protection laws that apply to you and
                    the circumstances of the processing, you may have rights
                    relating to your personal information. These can include
                    rights to request access, correction or deletion of your
                    information, and in some circumstances to restrict or object
                    to its processing.
                </p>

                <p>
                    Where processing is based on consent, you may also have the
                    right to withdraw that consent. Withdrawing consent does not
                    affect processing that was lawful before the withdrawal.
                </p>

                <p>
                    To make a privacy request, contact{" "}
                    <a
                        href="mailto:hatimtagmi@gmail.com"
                        className="cursor-pointer text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary"
                    >
                        hatimtagmi@gmail.com
                    </a>
                    . We may need to verify your identity before acting on
                    certain requests.
                </p>
            </>
        ),
    },
    {
        number: "10",
        title: "Security",
        content: (
            <>
                <p>
                    We take reasonable technical and organisational measures to
                    protect personal information against unauthorised access,
                    loss, misuse or alteration.
                </p>

                <p>
                    No method of transmitting or storing information online can
                    be guaranteed to be completely secure, so absolute security
                    cannot be promised.
                </p>
            </>
        ),
    },
    {
        number: "11",
        title: "Third-party websites",
        content: (
            <p>
                The Owlixir website may contain links to websites or services
                operated by other organisations. Their privacy practices are
                controlled by those organisations, and you should review their
                privacy information when using their services.
            </p>
        ),
    },
    {
        number: "12",
        title: "Changes to this policy",
        content: (
            <p>
                We may update this privacy policy when our services, website,
                technology or legal obligations change. The latest version will
                be published on this page with an updated revision date.
            </p>
        ),
    },
];

export default function PrivacyPage() {
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
                                        Privacy
                                    </p>
                                </div>

                                <h1 className="mt-7 max-w-[620px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                                    Privacy
                                    <br />
                                    <span className="text-primary">Policy.</span>
                                </h1>
                            </div>

                            <div className="flex items-end">
                                <div>
                                    <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                        This policy explains what information
                                        Owlixir may collect, why we use it, how
                                        it is handled and the choices you may
                                        have regarding your personal
                                        information.
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
                                        Privacy overview
                                    </p>

                                    <p className="mt-5 max-w-[300px] text-[15px] leading-6 text-text-secondary">
                                        We collect only the information needed
                                        to respond to enquiries, provide
                                        services and keep the website secure.
                                    </p>

                                    <div className="mt-8 border-t border-border pt-6">
                                        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                            Privacy contact
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
                                        Questions
                                    </p>
                                </div>

                                <h2 className="mt-6 max-w-[520px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                                    Need to ask about your{" "}
                                    <span className="text-primary">data?</span>
                                </h2>
                            </div>

                            <div className="flex items-end">
                                <div>
                                    <p className="max-w-[600px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                        If you have a question about this
                                        policy or want to make a request
                                        concerning your personal information,
                                        get in touch directly.
                                    </p>

                                    <a
                                        href="mailto:hatimtagmi@gmail.com"
                                        className="mt-7 inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                                    >
                                        Email about privacy
                                    </a>

                                    <p className="mt-5 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        For general project enquiries, use the{" "}
                                        <Link
                                            href="/contact"
                                            className="cursor-pointer text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary"
                                        >
                                            contact page
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