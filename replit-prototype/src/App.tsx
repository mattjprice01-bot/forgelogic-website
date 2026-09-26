import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Link, Route, Switch, useLocation } from 'wouter';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check, ChevronRight, CircuitBoard, Database, Layers3, Menu, MonitorCog, Network, ScanLine, ShieldCheck, Workflow, X } from 'lucide-react';

const pages: Record<string, { title: string; description: string }> = {
  '/': { title: 'ForgeLogic Technologies Ltd — Software for considered decisions', description: 'Explore a non-production concept for ForgeLogic Technologies Ltd: specialist software, data engines and US30 Copilot decision-support software.' },
  '/us30-copilot': { title: 'US30 Copilot — ForgeLogic Technologies Ltd', description: 'Explore US30 Copilot Beta, a market-analysis and non-discretionary decision-support software concept. Users retain control of every trading decision.' },
  '/development': { title: 'Specialist Software Development — ForgeLogic Technologies Ltd', description: 'Specialist software, data engines, web applications, workflow automation and decision-support systems, presented in a non-production prototype.' },
  '/about': { title: 'About ForgeLogic — ForgeLogic Technologies Ltd', description: 'A UK specialist software company focused on precise tools, transparent boundaries and useful decision-support systems.' },
  '/contact': { title: 'Contact — ForgeLogic Technologies Ltd', description: 'Explore how to start a conversation with ForgeLogic. The contact form in this prototype is demonstrative and does not send or store information.' },
  '/risk-disclosure': { title: 'Risk Disclosure Draft — ForgeLogic Technologies Ltd', description: 'Prototype draft risk disclosure for US30 Copilot. Speculative and leveraged trading carry substantial risk; legal review is required.' },
  '/subscription-cancellation': { title: 'Subscription & Cancellation Draft — ForgeLogic Technologies Ltd', description: 'Prototype draft information on subscriptions and cancellation. Not an operative policy, checkout or contractual commitment.' },
  '/third-party-data': { title: 'Third-Party Data Draft — ForgeLogic Technologies Ltd', description: 'Prototype draft information about potential third-party data dependencies, delays, errors and availability. Requires legal review.' },
  '/privacy': { title: 'Privacy Draft — ForgeLogic Technologies Ltd', description: 'Prototype draft privacy information. This isolated site has no backend and the demonstrative contact form does not transmit or store entries.' },
  '/website-terms': { title: 'Website Terms Draft — ForgeLogic Technologies Ltd', description: 'Prototype draft website terms for review, not operative published terms or a contract.' },
};

function Seo() {
  const [path] = useLocation();
  useEffect(() => {
    const meta = pages[path] || { title: 'Page not found — ForgeLogic Technologies Ltd', description: 'This page is not part of the ForgeLogic website comparison prototype.' };
    document.title = meta.title;
    const tags: [string, string, string][] = [
      ['name', 'description', meta.description],
      ['name', 'robots', 'noindex, nofollow'],
      ['property', 'og:title', meta.title],
      ['property', 'og:description', meta.description],
      ['property', 'og:type', 'website'],
      ['name', 'twitter:card', 'summary'],
      ['name', 'twitter:title', meta.title],
      ['name', 'twitter:description', meta.description],
    ];
    tags.forEach(([attribute, key, value]) => {
      let node = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!node) { node = document.createElement('meta'); node.setAttribute(attribute, key); document.head.appendChild(node); }
      node.content = value;
    });
    window.scrollTo(0, 0);
  }, [path]);
  return null;
}

function Brand() {
  return <Link href="/" className="brand" aria-label="ForgeLogic home" data-testid="link-brand">
    <span className="brand-symbol" aria-hidden="true">F<span style={{ color: '#41b6f5' }}>L</span></span>
    <span className="brand-name">FORGELOGIC<small>Technologies Ltd</small></span>
  </Link>;
}

const primaryLinks = [
  { href: '/us30-copilot', text: 'US30 Copilot' },
  { href: '/development', text: 'Development' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
];

function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [path] = useLocation();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [open]);
  return <div className="site">
    <Seo />
    <a href="#main" className="skip" data-testid="link-skip-content">Skip to content</a>
    <div className="prototype-bar" role="note"><b>Prototype only</b><span>Isolated website comparison concept · not a live service, offer or published policy</span></div>
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <nav id="primary-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {primaryLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={path === link.href ? 'active' : ''} aria-current={path === link.href ? 'page' : undefined} data-testid={`link-nav-${link.href.slice(1)}`}>{link.text}</Link>)}
        </nav>
        <Link href="/contact" className="button button-small header-cta" data-testid="link-header-contact">Start a conversation <ArrowUpRight aria-hidden="true" /></Link>
        <button type="button" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)} data-testid="button-mobile-menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
    </header>
    <main id="main">{children}</main>
    <Footer />
  </div>;
}

function Footer() {
  return <footer className="footer">
    <div className="container">
      <div className="footer-main">
        <div className="footer-intro"><Brand /><p>Specialist software for complex questions. Built around clarity, control and an honest account of what software can—and cannot—do.</p></div>
        <div className="footer-column"><strong>Explore</strong><Link href="/" data-testid="link-footer-home">Home</Link><Link href="/us30-copilot" data-testid="link-footer-product">US30 Copilot</Link><Link href="/development" data-testid="link-footer-development">Development</Link><Link href="/about" data-testid="link-footer-about">About</Link><Link href="/contact" data-testid="link-footer-contact">Contact</Link></div>
        <div className="footer-column"><strong>Product information</strong><Link href="/risk-disclosure" data-testid="link-footer-risk">Risk disclosure draft</Link><Link href="/subscription-cancellation" data-testid="link-footer-cancellation">Subscription & cancellation draft</Link><Link href="/third-party-data" data-testid="link-footer-data">Third-party data draft</Link></div>
        <div className="footer-column"><strong>Site information</strong><Link href="/privacy" data-testid="link-footer-privacy">Privacy draft</Link><Link href="/website-terms" data-testid="link-footer-terms">Website terms draft</Link></div>
      </div>
      <div className="footer-bottom"><span>© ForgeLogic Technologies Ltd · Website comparison prototype</span><span>Not live · No trading execution · No client funds · Draft pages require legal review</span></div>
    </div>
  </footer>;
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="text-link" data-testid={`link-explore-${href.slice(1)}`}>{children}<ArrowUpRight aria-hidden="true" /></Link>;
}
function PageHero({ index, eyebrow, title, description, children }: { index: string; eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return <section className="page-hero" data-number={index}><div className="container">
    <span className="eyebrow reveal">{eyebrow}</span>
    <h1 className="reveal delay-1">{title}</h1>
    <p className="reveal delay-2">{description}</p>
    {children}
  </div></section>;
}
function SectionHead({ tag, title, description }: { tag: string; title: string; description?: string }) {
  return <div className="section-head"><div><span className="eyebrow">{tag}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>;
}
function Callout({ title, body, href = '/contact', action = 'Start a conversation' }: { title: string; body?: string; href?: string; action?: string }) {
  return <section className="statement"><div className="container"><span className="eyebrow">Next step / 01</span><h2>{title}</h2>{body && <p className="statement-body">{body}</p>}<Link href={href} className="button" data-testid="link-callout-action">{action}<ArrowUpRight aria-hidden="true" /></Link></div></section>;
}

function MockTerminal() {
  return <div className="terminal-wrap" aria-label="Non-live illustrative software interface mockup">
    <div className="terminal">
      <div className="terminal-top"><span>FL / US30 COPILOT <span className="terminal-divider">—</span> CONCEPT VIEW</span><span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span></div>
      <div className="terminal-body">
        <div className="terminal-heading"><div><strong>Market context, not an instruction.</strong><span>ILLUSTRATIVE INTERFACE / NO LIVE DATA</span></div><span className="mock-badge">Non-live mockup</span></div>
        <div className="chart" role="img" aria-label="Abstract, illustrative line drawing; not actual or historical market data">
          <svg viewBox="0 0 600 230" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 172 L43 165 L70 180 L112 139 L148 147 L177 122 L209 136 L244 88 L273 100 L301 82 L337 107 L365 96 L396 63 L423 78 L455 44 L482 61 L513 36 L548 46 L580 25 L600 38" fill="none" stroke="#52c9ff" strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
            <path d="M0 172 L43 165 L70 180 L112 139 L148 147 L177 122 L209 136 L244 88 L273 100 L301 82 L337 107 L365 96 L396 63 L423 78 L455 44 L482 61 L513 36 L548 46 L580 25 L600 38 L600 230 L0 230Z" fill="#299df2" opacity=".10" />
            <path d="M0 137 L75 144 L146 131 L230 141 L306 115 L379 123 L455 99 L520 107 L600 78" fill="none" stroke="#52ccc6" strokeDasharray="4 6" strokeWidth="1" opacity=".7" vectorEffect="non-scaling-stroke" />
            <circle cx="455" cy="44" r="5" fill="#8be5ff" /><circle cx="455" cy="44" r="11" fill="none" stroke="#52c9ff" opacity=".55" />
          </svg><span className="chart-label">Abstract illustration / not market data</span>
        </div>
        <div className="terminal-bottom">
          <div className="readout"><small>Context layer</small><strong>Illustrative</strong></div>
          <div className="readout"><small>Observation</small><strong className="lime">Review required</strong></div>
          <div className="readout"><small>Execution</small><strong>Manual only</strong></div>
        </div>
        <div className="terminal-note"><span>NO SIGNALS TO TRADE · NO AUTOMATED EXECUTION</span><span>UI STUDY / 001</span></div>
      </div>
    </div>
  </div>;
}

function Home() {
  return <>
    <section className="hero"><div className="container hero-inner">
      <div className="hero-copy">
        <span className="eyebrow reveal">Independent thinking, engineered.</span>
        <h1 className="reveal delay-1">Software for<br /><em>considered</em><br />decisions.</h1>
        <p className="lead reveal delay-2">ForgeLogic Technologies Ltd builds specialist software that makes complex information easier to examine—and keeps human judgement where it belongs.</p>
        <div className="hero-actions reveal delay-2"><Link href="/us30-copilot" className="button" data-testid="link-hero-product">Explore US30 Copilot <ArrowUpRight aria-hidden="true" /></Link><Link href="/development" className="button button-outline" data-testid="link-hero-development">What we build <ArrowRight aria-hidden="true" /></Link></div>
        <div className="hero-foot"><span>UK specialist software company</span><span>Analysis, not execution</span></div>
      </div>
      <div className="reveal delay-2"><MockTerminal /></div>
    </div></section>
    <section className="section section-dark"><div className="container">
      <SectionHead tag="01 / What we do" title="Purpose-built, not one-size-fits-all." description="From a single useful analytical view to an entire operational system, we focus on software that earns its place in a workflow." />
      <div className="capability-grid">
        <div className="capability featured"><span className="capability-index">01 / FIRST COMMERCIAL PRODUCT</span><ScanLine className="capability-icon" aria-hidden="true" /><h3>US30 Copilot</h3><p>Market-analysis and non-discretionary decision-support software. Designed to help users assess context, not outsource a decision.</p><TextLink href="/us30-copilot">Explore the product</TextLink></div>
        <div className="capability"><span className="capability-index">02 / CAPABILITY</span><Database className="capability-icon" aria-hidden="true" /><h3>Data engines</h3><p>Structures and processes that turn fragmented inputs into information people can actually interrogate.</p></div>
        <div className="capability"><span className="capability-index">03 / CAPABILITY</span><MonitorCog className="capability-icon" aria-hidden="true" /><h3>Web applications</h3><p>Interfaces where complex operations become legible, useful and easier to navigate.</p></div>
        <div className="capability"><span className="capability-index">04 / CAPABILITY</span><Workflow className="capability-icon" aria-hidden="true" /><h3>Workflow automation</h3><p>Thoughtful automation for repetitive work, with clear boundaries for human oversight.</p></div>
        <div className="capability"><span className="capability-index">05 / CAPABILITY</span><CircuitBoard className="capability-icon" aria-hidden="true" /><h3>Decision-support</h3><p>Tools that organize evidence and expose context without pretending to replace judgement.</p></div>
      </div>
    </div></section>
    <section className="section section-raised"><div className="container split">
      <div className="split-copy"><span className="eyebrow">02 / The principle</span><h2>Better visibility.<br />Your decision.</h2><p>Good software can surface patterns, structure information and make uncertainty easier to see. It cannot eliminate uncertainty—and it should never conceal who is responsible for acting.</p><TextLink href="/about">How we think about software</TextLink></div>
      <div className="principles">
        <div className="principle"><span>01</span><div><strong>Context over noise</strong><p>Present the information that matters, in a form that can be questioned.</p></div></div>
        <div className="principle"><span>02</span><div><strong>Clarity over certainty</strong><p>Analytical outputs can be wrong, delayed or invalidated. The interface should make that clear.</p></div></div>
        <div className="principle"><span>03</span><div><strong>Control stays with people</strong><p>US30 Copilot does not connect to a brokerage, execute trades or hold client money.</p></div></div>
      </div>
    </div></section>
    <section className="section section-dark"><div className="container">
      <SectionHead tag="03 / In focus" title="Meet US30 Copilot." description="Our first commercial product is designed for market analysis and non-discretionary decision support. It is not a shortcut around risk." />
      <div className="split"><MockTerminal /><div className="split-copy"><span className="label">Product / Beta positioning</span><h2>An analytical workspace. Not a trading desk.</h2><p>Use structured context to support your own assessment. You control and execute every trading decision. There are no investment recommendations or signals to trade.</p><p>Beta is positioned at <strong className="accent-text">£29.99/month</strong> in this prototype. There is no active checkout here. US30 Copilot Alpha is coming soon.</p><Link href="/us30-copilot" className="button button-outline" data-testid="link-home-product-details">View product details <ArrowUpRight aria-hidden="true" /></Link></div></div>
    </div></section>
    <section className="section section-raised"><div className="container">
      <SectionHead tag="04 / Beyond one product" title="Systems built around the real problem." description="Our wider capability extends beyond financial software: specialist applications, data infrastructure and carefully scoped automation." />
      <div className="feature-list">
        <div className="feature-item"><Braces aria-hidden="true" /><h3>Specialist software</h3><p>Software shaped by a specific task or domain rather than a generic feature checklist.</p></div>
        <div className="feature-item"><Layers3 aria-hidden="true" /><h3>Connected workflows</h3><p>Bringing separate steps into a coherent, understandable working environment.</p></div>
      </div>
      <div style={{ marginTop: 28 }}><TextLink href="/development">Explore development capabilities</TextLink></div>
    </div></section>
    <Callout title="Have a difficult software problem? Let's give it a clearer shape." body="This prototype's contact flow is demonstrative only. It will not send a message." />
  </>;
}

const faqs = [
  { q: 'Does US30 Copilot place trades for me?', a: 'No. Users control and execute all trading decisions. The software does not automatically execute trades, connect to a brokerage or hold client money.' },
  { q: 'Does it provide investment recommendations or signals to trade?', a: 'No. It is market-analysis and non-discretionary decision-support software. Any analytical output is context to assess, not a recommendation or an instruction to trade.' },
  { q: 'Can the analysis be incorrect?', a: 'Yes. Outputs can be wrong, delayed, incomplete or invalidated by changing conditions. You should not treat an interface as a substitute for independent judgement or appropriate professional advice.' },
  { q: 'Can I subscribe here?', a: 'No. £29.99/month is Beta product positioning shown for comparison only. This isolated prototype has no checkout, payment processing or subscription activation.' },
  { q: 'Is US30 Copilot Alpha available?', a: 'No. Alpha is coming soon. This prototype does not provide access to Alpha or a waiting-list submission.' },
];
function Product() {
  return <>
    <PageHero index="1" eyebrow="Product / US30 Copilot" title="See the context. Own the decision." description="US30 Copilot is market-analysis and non-discretionary decision-support software. It helps frame what to examine; it does not tell you what to trade.">
      <div className="hero-actions"><a className="button" href="#beta" data-testid="link-product-beta">View Beta positioning <ArrowDownRight aria-hidden="true" /></a><Link className="button button-outline" href="/risk-disclosure" data-testid="link-product-risk">Read risk disclosure <ArrowUpRight aria-hidden="true" /></Link></div>
      <small>No live platform, market data or subscription is available in this prototype.</small>
    </PageHero>
    <section className="section section-dark"><div className="container split"><div className="split-copy"><span className="eyebrow">01 / Product approach</span><h2>Analysis should make thinking clearer, not shorter.</h2><p>Financial markets move quickly, and a polished output can appear more certain than it is. US30 Copilot is positioned as an analytical workspace for reviewing context—not an automated trader, broker connection or investment adviser.</p><p>Users remain responsible for interpreting information, deciding whether to act and executing any trade themselves.</p></div><MockTerminal /></div></section>
    <section className="section section-raised"><div className="container"><SectionHead tag="02 / Designed boundaries" title="Clear lines. By design." description="These distinctions are central to the product's intended positioning—not fine print hidden after the pitch." />
      <div className="feature-list">
        <div className="feature-item"><ScanLine aria-hidden="true" /><h3>Analytical context</h3><p>Information can help inform your own assessment. It is not a signal, recommendation or assurance of an outcome.</p></div>
        <div className="feature-item"><ShieldCheck aria-hidden="true" /><h3>Human execution</h3><p>You control and execute every trading decision. There is no automatic trade execution.</p></div>
        <div className="feature-item"><Network aria-hidden="true" /><h3>No brokerage connection</h3><p>The product is not presented as a connected brokerage service and does not hold client funds.</p></div>
        <div className="feature-item"><CircuitBoard aria-hidden="true" /><h3>Outputs have limits</h3><p>Analysis can be incorrect, delayed, incomplete or invalidated. Speculative and leveraged trading involve substantial risk.</p></div>
      </div>
    </div></section>
    <section id="beta" className="section section-dark"><div className="container">
      <SectionHead tag="03 / Product positioning" title="A clear starting point." description="The price shown here describes intended Beta positioning in a website comparison concept. It is not an active offer or checkout." />
      <div className="price-panel"><div><span className="eyebrow">US30 Copilot / Beta</span><h3>Beta access positioning</h3><p>Market-analysis and non-discretionary decision support. No payment, account creation or product activation is possible from this prototype.</p></div><div className="price-right"><div><div className="price-number">£29.99<small> / month</small></div><p>Indicative Beta pricing presentation only. Subscription details would require confirmation before any live launch.</p></div><Link href="/subscription-cancellation" className="button button-outline" data-testid="link-product-subscription">Read draft subscription information <ArrowUpRight aria-hidden="true" /></Link></div></div>
      <div className="alpha-panel"><div><strong>US30 Copilot Alpha</strong><p>Coming soon. No Alpha access or enrolment is offered on this prototype.</p></div><span className="status-pill">Coming soon</span></div>
    </div></section>
    <section className="section section-raised"><div className="container"><SectionHead tag="04 / Questions worth asking" title="Understand the boundaries." /><div className="faq">{faqs.map((item, i) => <details key={item.q}><summary data-testid={`disclosure-product-${i}`}>{item.q}</summary><p>{item.a}</p></details>)}</div><div style={{ marginTop: 35, display: 'flex', flexWrap: 'wrap', gap: 25 }}><TextLink href="/risk-disclosure">Risk disclosure draft</TextLink><TextLink href="/third-party-data">Third-party data draft</TextLink></div></div></section>
    <Callout title="Good decisions begin with knowing the limits." href="/risk-disclosure" action="Read the risk disclosure draft" />
  </>;
}

function Development() {
  const services = [
    { icon: Braces, title: 'Specialist software', text: 'Applications designed around a particular challenge, operational context or kind of expertise—not software for its own sake.' },
    { icon: Database, title: 'Data engines', text: 'The structures that make data more coherent: ingestion concepts, transformation logic and useful ways to inspect outputs.' },
    { icon: MonitorCog, title: 'Web applications', text: 'Purposeful interfaces that help people understand information, navigate workflows and act with confidence in their own judgement.' },
    { icon: Workflow, title: 'Workflow automation', text: 'Automation that reduces repetitive steps while keeping ownership, exceptions and review points visible.' },
    { icon: CircuitBoard, title: 'Decision-support systems', text: 'Systems that organize relevant context and articulate uncertainty without claiming to make the decision for the user.' },
    { icon: Layers3, title: 'Integrated thinking', text: 'Connecting a front-end experience to the underlying logic and information architecture it needs to be genuinely useful.' },
  ];
  return <>
    <PageHero index="2" eyebrow="Capabilities / Development" title="Complex problems deserve exacting software." description="ForgeLogic explores specialist software, data engines, web applications, workflow automation and decision-support systems—built around what people need to understand and do."><div className="hero-actions"><Link href="/contact" className="button" data-testid="link-development-contact">Discuss a project <ArrowUpRight aria-hidden="true" /></Link></div></PageHero>
    <section className="section section-dark"><div className="container"><SectionHead tag="01 / Scope" title="From the underlying logic to the interface." description="Good digital products are systems, not just screens. The work has to make sense at every layer." /><div className="feature-list">{services.map(service => <div className="feature-item" key={service.title}><service.icon aria-hidden="true" /><h3>{service.title}</h3><p>{service.text}</p></div>)}</div></div></section>
    <section className="section section-raised"><div className="container split"><div className="split-copy"><span className="eyebrow">02 / How we approach it</span><h2>Define the question before designing the answer.</h2><p>Every useful system begins with an honest understanding of inputs, users, decisions and constraints. Then the software can be shaped around the actual work—rather than the appearance of sophistication.</p><TextLink href="/about">Learn about ForgeLogic</TextLink></div><div className="principles"><div className="principle"><span>01</span><div><strong>Make the problem legible</strong><p>Identify what needs to be known, what remains uncertain and where the hand-offs are.</p></div></div><div className="principle"><span>02</span><div><strong>Build the right boundaries</strong><p>Decide what the system should support, and what should remain in human hands.</p></div></div><div className="principle"><span>03</span><div><strong>Design for use</strong><p>Make the important things understandable in the moments that matter.</p></div></div></div></div></section>
    <Callout title="The best brief starts with a real problem." body="This is a comparison prototype. The contact interaction is demonstrative and does not transmit your message." />
  </>;
}

function About() {
  return <>
    <PageHero index="3" eyebrow="Company / About" title="Technology with a clear point of view." description="ForgeLogic Technologies Ltd is a UK specialist software company. Our focus is on making complex information more useful without confusing assistance with authority." />
    <section className="section section-dark"><div className="container split"><div className="split-copy"><span className="eyebrow">01 / Positioning</span><h2>Precision is a product decision.</h2><p>What a system leaves out matters as much as what it shows. We believe valuable software helps people find the thread through complexity, inspect the reasoning and understand the boundaries of an output.</p><p>US30 Copilot is our first commercial product positioning: market-analysis and non-discretionary decision support. Our broader direction includes specialist software, data engines, web applications and workflow automation.</p></div><div className="principles"><div className="principle"><span>FL/01</span><div><strong>Clarity</strong><p>Make complex information easier to read without pretending it is simple.</p></div></div><div className="principle"><span>FL/02</span><div><strong>Agency</strong><p>Keep control and accountability with the people using the system.</p></div></div><div className="principle"><span>FL/03</span><div><strong>Honesty</strong><p>State uncertainty and system limitations plainly, especially where risk is material.</p></div></div></div></div></section>
    <section className="section section-raised"><div className="container"><SectionHead tag="02 / A necessary distinction" title="Support is not substitution." description="In market analysis, that distinction is critical. Sophisticated presentation does not make speculative or leveraged trading safe." /><div className="feature-list"><div className="feature-item"><ShieldCheck aria-hidden="true" /><h3>People make the call</h3><p>Users control and execute their own trades. We do not present US30 Copilot as a broker, automated trader or custodian of client money.</p></div><div className="feature-item"><ScanLine aria-hidden="true" /><h3>Analysis has limits</h3><p>Outputs may be wrong, delayed or invalidated. They are not profit claims, investment recommendations or signals to trade.</p></div></div></div></section>
    <Callout title="Let's make the difficult parts clearer." href="/development" action="Explore what we build" />
  </>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }
  return <>
    <PageHero index="4" eyebrow="Contact / Demonstration" title="Start with the problem." description="Tell us what you are trying to understand, build or improve. This page demonstrates a potential contact experience; it does not contact ForgeLogic." />
    <section className="section section-dark"><div className="container contact-layout"><aside className="contact-aside"><span className="eyebrow">Before you begin</span><h2>A conversation starts with clarity.</h2><p>For a real enquiry, you would outline the problem, relevant context and what a useful outcome might look like. Please do not enter sensitive or personal information here.</p><div className="mini-rule" /><span className="label">Prototype boundary</span><p>This isolated frontend has no backend, inbox, database, integration or outbound service. The demonstration form is local only.</p><TextLink href="/privacy">Read privacy draft</TextLink></aside>
      <div className="form-card"><h2>Enquiry preview</h2><div className="form-warning" role="note"><strong>Nothing you type here will be sent or stored.</strong> This is a demonstrative form only. Submitting clears the fields and shows a local confirmation; ForgeLogic will not receive your enquiry.</div>
      {submitted ? <div className="success-panel" role="status" data-testid="status-demo-submitted"><Check aria-hidden="true" /><h3>Demo complete. Nothing was sent.</h3><p>Your entries were cleared in this browser. No message was transmitted, saved or delivered to ForgeLogic. This prototype cannot receive enquiries.</p><button className="button button-outline" type="button" onClick={() => setSubmitted(false)} data-testid="button-reset-demo">Try the demo again <ArrowRight aria-hidden="true" /></button></div> :
      <form onSubmit={onSubmit}><div className="form-grid"><div className="field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" required autoComplete="off" placeholder="How should we address you?" data-testid="input-contact-name" /></div><div className="field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" required autoComplete="off" placeholder="Your email address" data-testid="input-contact-email" /></div><div className="field full"><label htmlFor="contact-topic">What is this about?</label><select id="contact-topic" name="topic" defaultValue="" required data-testid="select-contact-topic"><option value="" disabled>Select a topic</option><option value="product">US30 Copilot</option><option value="development">Specialist software development</option><option value="other">Something else</option></select></div><div className="field full"><label htmlFor="contact-message">A little context</label><textarea id="contact-message" name="message" required minLength={10} placeholder="What problem are you exploring? Avoid entering sensitive information." data-testid="textarea-contact-message" /></div></div><div className="form-actions"><button className="button" type="submit" data-testid="button-submit-demo">Preview submission only <ArrowRight aria-hidden="true" /></button><small>Local demonstration · never sent or stored</small></div></form>}
      </div>
    </div></section>
  </>;
}

type LegalSection = { id: string; title: string; paragraphs: string[]; bullets?: string[] };
function DraftPage({ index, eyebrow, title, description, sections }: { index: string; eyebrow: string; title: string; description: string; sections: LegalSection[] }) {
  return <>
    <PageHero index={index} eyebrow={eyebrow} title={title} description={description} />
    <section className="section section-dark"><div className="container content-grid">
      <aside className="side-index" aria-label="On this page"><span className="label">On this page</span>{sections.map(section => <a href={`#${section.id}`} key={section.id} data-testid={`link-section-${section.id}`}>{section.title}</a>)}</aside>
      <article className="article"><div className="draft-note" role="note"><strong>Draft prototype content · legal review required</strong><p>This page is illustrative for website comparison only. It is not an operative published policy, binding agreement, legal advice or a statement of current service terms. Wording and implementation require qualified legal review before any production use.</p></div>
        {sections.map(section => <section className="article-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
        <div style={{ marginTop: 45 }}><Link href="/contact" className="button button-outline" data-testid="link-draft-contact">View contact demonstration <ArrowUpRight aria-hidden="true" /></Link></div>
      </article>
    </div></section>
  </>;
}

const legalPages = {
  risk: {
    index: '5', eyebrow: 'Product information / Draft', title: 'Risk disclosure.', description: 'An illustrative outline of important product and trading risks. Read this before assessing the US30 Copilot concept.',
    sections: [
      { id: 'nature', title: 'What the software is', paragraphs: ['US30 Copilot is positioned as market-analysis and non-discretionary decision-support software. It is not a brokerage, trading venue, investment adviser or automated execution system. It does not connect to a brokerage or hold client money.', 'Users independently control and execute every trading decision. An analytical output is not an instruction, investment recommendation, signal to trade or representation that a trade will be profitable.'] },
      { id: 'trading-risk', title: 'Trading risk', paragraphs: ['Speculative and leveraged trading involve substantial risk. Losses can be significant and, depending on the instrument and arrangements used, may exceed an initial outlay. Market conditions can change abruptly.'], bullets: ['Do not trade solely because an interface highlights a pattern or observation.', 'Consider whether a product, instrument or level of risk is appropriate for your own circumstances.', 'Seek suitably qualified independent advice where needed.'] },
      { id: 'output-risk', title: 'Limits of analysis', paragraphs: ['Data and analytical outputs can be inaccurate, incomplete, delayed, unavailable or invalidated by later events. Models and visualizations may simplify complex conditions and may not capture relevant context. Past or illustrative patterns do not predict future results.', 'Every chart on this prototype is a non-live interface illustration, not a representation of real market data, historical performance or a product capability available here.'] },
      { id: 'no-assurance', title: 'No assurance of outcomes', paragraphs: ['Nothing on this prototype makes a profit claim, guarantees an outcome or removes the need for your own assessment. A decision-support tool can assist the process of review, but it cannot remove the risks of trading.'] },
    ],
  },
  cancellation: {
    index: '6', eyebrow: 'Product information / Draft', title: 'Subscription & cancellation.', description: 'A proposed information structure for a future subscription policy, not a current purchase flow or contractual term.',
    sections: [
      { id: 'status', title: 'Prototype status', paragraphs: ['This site does not sell subscriptions or process payments. The £29.99/month Beta price is product positioning for comparison only; there is no active checkout, account provisioning or recurring billing on this prototype. US30 Copilot Alpha is coming soon and is not available here.'] },
      { id: 'before-purchase', title: 'Information needed before a live purchase', paragraphs: ['Before a production subscription could be offered, a live service would need to clearly set out the billing cycle, taxes if applicable, access start date, renewal terms, payment method, any trial or introductory conditions, and how to cancel. Those details are not established by this draft.'] },
      { id: 'cancelling', title: 'Cancellation approach to define', paragraphs: ['A future operative policy should explain a usable cancellation route, when cancellation takes effect, what happens to access until the end of a paid period and whether any refund is available. Do not rely on this prototype to cancel any real subscription; it has no account or billing system.'] },
      { id: 'review', title: 'Review before publication', paragraphs: ['Any live subscription and cancellation wording would need legal and operational review, including applicable consumer rights. This draft does not create, alter or terminate contractual rights.'] },
    ],
  },
  data: {
    index: '7', eyebrow: 'Product information / Draft', title: 'Third-party data.', description: 'An illustrative explanation of data dependencies and why analytical information should never be treated as infallible.',
    sections: [
      { id: 'scope', title: 'Scope of this prototype', paragraphs: ['This isolated website makes no third-party connections or API calls and does not contain live market feeds. Its chart and dashboard visuals are explicitly non-live mockups. No data provider, source, exchange, broker or partner is represented here.'] },
      { id: 'dependencies', title: 'Potential data dependencies', paragraphs: ['A future analytical product may depend on data or services outside its own control. Any production disclosure would need to identify relevant categories of dependency accurately, with appropriate permissions and contracts, before publication. This prototype makes no claims about actual arrangements.'] },
      { id: 'limitations', title: 'Accuracy and availability', paragraphs: ['Third-party inputs, if used in a future product, could be delayed, interrupted, incomplete, misclassified or incorrect. Downstream calculations and displays can inherit those errors. Changes in availability or licensing can also affect what can be shown.'] },
      { id: 'responsibility', title: 'Independent verification', paragraphs: ['Users should independently assess information before making decisions. No analytical presentation should be interpreted as a signal to trade or an assurance of timing, accuracy or outcome. Speculative and leveraged trading involve substantial risk.'] },
    ],
  },
  privacy: {
    index: '8', eyebrow: 'Site information / Draft', title: 'Privacy.', description: 'An illustrative privacy outline for a future site. This prototype does not operate a contact inbox or store submitted enquiries.',
    sections: [
      { id: 'prototype', title: 'What happens in this prototype', paragraphs: ['The contact form is demonstrative. Entries remain only in the browser fields while you type; submitting prevents transmission, clears the fields and displays a local confirmation. There is no backend, database, webhook, analytics integration or third-party connection in this site. Please do not enter sensitive personal information.'] },
      { id: 'future', title: 'A future privacy notice', paragraphs: ['Before a live site collects personal data, an operative notice should explain what information is collected, why it is used, the applicable lawful basis, retention, sharing, security, individual rights and how to make a privacy request. Those details depend on real operations and are not asserted here.'] },
      { id: 'browser', title: 'Browser and hosting context', paragraphs: ['Basic technical requests needed to view a website may be handled by the environment serving it. This draft does not attempt to describe an unidentified hosting provider’s practices or promise that all technical logs are absent. A production privacy notice would need to be checked against the actual deployment.'] },
      { id: 'review', title: 'Not an operative policy', paragraphs: ['This page is prototype content only. It requires review against the real service, processing activities and applicable law before being presented as a published privacy notice.'] },
    ],
  },
  terms: {
    index: '9', eyebrow: 'Site information / Draft', title: 'Website terms.', description: 'A prototype-only outline of potential website terms; it is not an operative agreement.',
    sections: [
      { id: 'purpose', title: 'Purpose of this site', paragraphs: ['This is an isolated, non-production website comparison prototype. Its pages, product illustration, contact form and subscription presentation are not a live service or an offer to contract.'] },
      { id: 'information', title: 'Information and reliance', paragraphs: ['Content is illustrative and may be incomplete or change during review. Nothing on the site is investment advice, an investment recommendation or a signal to trade. Users remain responsible for their own decisions. Analytical outputs can be wrong, delayed or invalidated, and speculative or leveraged trading carries substantial risk.'] },
      { id: 'functionality', title: 'No transactions or integrations', paragraphs: ['The prototype cannot create an account, take payment, activate a subscription, execute a trade, connect to a brokerage or accept an enquiry. It does not hold client money. Interface visuals are non-live mockups rather than market data.'] },
      { id: 'future-terms', title: 'What future terms must address', paragraphs: ['Operative terms for a production site or product would need legal review of scope, access, acceptable use, intellectual property, service availability, liability, complaints, jurisdiction and any subscription terms. No contractual commitment is made by this draft.'] },
    ],
  },
};

function NotFound() {
  return <><PageHero index="?" eyebrow="404 / Outside the map" title="Nothing at this address." description="This route is not part of the ForgeLogic website comparison prototype. The navigation can take you back to something useful."><div className="hero-actions"><Link href="/" className="button" data-testid="link-404-home">Return home <ArrowUpRight aria-hidden="true" /></Link><Link href="/us30-copilot" className="button button-outline" data-testid="link-404-product">Explore US30 Copilot <ChevronRight aria-hidden="true" /></Link></div></PageHero><section className="section section-dark"><div className="container"><span className="label">Available paths</span><div style={{ display: 'flex', flexWrap: 'wrap', gap: 25, marginTop: 25 }}><TextLink href="/development">Development</TextLink><TextLink href="/about">About</TextLink><TextLink href="/contact">Contact demonstration</TextLink></div></div></section></>;
}

function App() {
  return <Shell><Switch>
    <Route path="/" component={Home} />
    <Route path="/us30-copilot" component={Product} />
    <Route path="/development" component={Development} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/risk-disclosure"><DraftPage {...legalPages.risk} /></Route>
    <Route path="/subscription-cancellation"><DraftPage {...legalPages.cancellation} /></Route>
    <Route path="/third-party-data"><DraftPage {...legalPages.data} /></Route>
    <Route path="/privacy"><DraftPage {...legalPages.privacy} /></Route>
    <Route path="/website-terms"><DraftPage {...legalPages.terms} /></Route>
    <Route component={NotFound} />
  </Switch></Shell>;
}

export default App;