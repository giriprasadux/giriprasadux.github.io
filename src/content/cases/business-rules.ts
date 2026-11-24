import card from "@/assets/business-rules/card.png";
import direction from "@/assets/business-rules/direction.png";
import explanation from "@/assets/business-rules/explanation-page.png";
import note from "@/assets/business-rules/note-stays.png";
import oneField from "@/assets/business-rules/one-field.png";
import phaseOne from "@/assets/business-rules/phase-1-pattern.png";
import reviewed from "@/assets/business-rules/reviewed-not-complete.png";
import ruleFlow from "@/assets/business-rules/rule-and-control-flow.png";
import sevenSteps from "@/assets/business-rules/seven-steps.png";
import type { CaseStudy, Project } from "../types";

export const businessRulesProject: Project = {
  slug: "business-rules-documentation",
  title: "Business Rules Documentation for COBOL Modernisation",
  summary: "Helping miners understand, trace and document complex business logic in legacy COBOL systems.",
  role: "Solo Product Designer",
  context: "Enterprise modernization",
  facts: [
    { term: "Question", detail: "What would someone need to trust an AI-generated rule?" },
    { term: "Made", detail: "Clickable prototype with synthetic data" },
    { term: "Stage", detail: "Design only, not implemented" },
  ],
  image: {
    src: card,
    width: card.width,
    height: card.height,
    alt: "Prototype page for the field INVOICE-AMOUNT. A generated rule, Add sales tax, sits beside an evidence panel showing which source lines support it and which are missing.",
    bleed: true,
  },
  tint: "bg-tint-red",
};

export const businessRules: CaseStudy = {
  lead: "Helping miners understand, trace and document complex business logic in legacy COBOL systems.",
  meta: [
    { term: "Role", detail: "Solo Product Designer" },
    {
      term: "Context",
      detail: "Professional project in COBOL and application modernisation, followed by a further design exploration",
    },
    {
      term: "Users",
      detail: "Miners: the people who investigate COBOL programs and document the business rules inside them",
    },
    {
      term: "Worked with",
      detail: "Four miners in workflow discovery; senior architects, who provided requirements and direction",
    },
    {
      term: "Outcome",
      detail:
        "Reached the design stage. Not implemented and not validated with users. Synthetic data only, because client data was not available",
    },
    { term: "Phase 2 tools", detail: "Figma, Claude Code and AI-assisted design workflows" },
  ],
  links: [{ label: "Try the prototype", href: "#prototype" }],
  hero: {
    kind: "image",
    picture: {
      src: explanation,
      alt: "Prototype page for the field INVOICE-AMOUNT. The rule Add sales tax is open, with an evidence panel showing its source lines and one missing source.",
    },
    caption: "A rule beside the lines that support it. Synthetic data.",
  },
  sections: [
    {
      id: "introduction",
      title: "Project introduction",
      lede: "Two phases: the professional project, then a further exploration.",
      blocks: [
        {
          type: "points",
          items: [
            {
              term: "Phase 1: professional project",
              detail: "Discovery with miners, requirements from architects, and the original designs.",
            },
            {
              term: "Phase 2: further exploration for my portfolio",
              detail:
                "Outside my employment, I took the design further, concentrating on a question the first phase left open: what would someone need in order to trust an AI-generated rule? The Phase 2 prototype shown here was rebuilt with new components and synthetic data.",
            },
          ],
        },
      ],
    },
    {
      id: "problem",
      title: "The problem",
      lede: "One field’s meaning is spread across programs, and so is the work of documenting it.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Before a COBOL system can be modernised, someone has to work out what it does. The rules that matter sit in conditions, `PERFORM`ed paragraphs, shared copybooks and calls between programs. To document one field, a miner follows it through all of them.",
            "Phase 1 addressed two linked problems:",
          ],
        },
        {
          type: "points",
          items: [
            {
              term: "Understanding",
              detail: "A field’s behaviour is spread across programs, so the rule has to be reconstructed.",
            },
            {
              term: "Documenting",
              detail:
                "The information for one document was held in separate places. People found a field in one area, carried its name to another and entered details again before a document could be produced.",
            },
          ],
        },
        {
          type: "text",
          paragraphs: ["Both came from the people closest to the work: miners and senior architects."],
        },
        {
          type: "figure",
          picture: {
            src: oneField,
            alt: "INVOICE-AMOUNT is built by INVPROC01, read by PAYPOST03 and RPTGEN04, and depends on TAXCALC, whose source is missing",
          },
          caption: "One field, four programs, one missing. Synthetic example.",
        },
      ],
    },
    {
      id: "users",
      title: "Understanding the users",
      lede: "Four miners, sharing their screens, walking through a typical task.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I ran think-aloud workflow discovery with **four miners**. The aim was to see how they actually work before discussing solutions.",
            "Each session followed one guide. Participants shared their screen and walked through a typical task: what they open first, what they do next, where they spend the most time and where they slow down. The guide then covered:",
          ],
        },
        {
          type: "table",
          head: ["Topic", "What I asked about"],
          rows: [
            ["What works", "The features that help and save the most time"],
            ["What doesn’t", "What frustrates, confuses or gets avoided, and why"],
            ["Workarounds", "Other tools they use alongside the product, and work done by hand"],
            ["Quality and trust", "How confident they are in the output, and what they double-check"],
            ["Improvement", "The one thing they would change, and what would raise their confidence"],
          ],
        },
        {
          type: "text",
          paragraphs: [
            "I began with the walkthrough so the conversation started from work I could see, not from feature requests.",
            "**Limits.** Four participants from one working context. The sessions show how work happened for them, not how common it is.",
          ],
        },
      ],
    },
    {
      id: "observations",
      title: "Key observations",
      lede: "The workflow broke in three places.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Detailed session notes are no longer available to me, so I report only what I’m certain of, without quotes or counts. Across the sessions, miners showed me three kinds of interruption:",
          ],
        },
        {
          type: "table",
          head: ["What miners showed me", "The design question it raised"],
          rows: [
            [
              "**They got stuck.** There were points where they couldn’t easily move forward",
              "What would someone need on the page to keep going?",
            ],
            [
              "**They had to wait.** Work paused before they could continue",
              "How can work continue while the system is busy, and how do people know when it’s done?",
            ],
            [
              "**They left the product.** They used external tools to finish the workflow",
              "What would it take to complete the task in one place?",
            ],
          ],
        },
        {
          type: "text",
          paragraphs: [
            "My reading of these: the difficulty wasn’t only understanding COBOL. The workflow around it kept breaking. Each one led to a decision in the Phase 1 designs:",
          ],
        },
        {
          type: "points",
          items: [
            {
              term: "Stuck",
              detail: "Logic shown as a graph and as statements, side by side, so there was more than one way in.",
            },
            {
              term: "Waiting",
              detail: "Analysis planned to run in the background, with a notification when the document was ready.",
            },
            {
              term: "External tools",
              detail: "Starting from the field, with its name carried across, and a preview inside the application.",
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "I haven’t reconstructed what participants said. Where this case study goes further, it rests on the architects’ requirements, the original designs or my own critique, and says so.",
          ],
        },
      ],
    },
    {
      id: "solution",
      title: "Defining the solution",
      lede: "Start from one field. End with documentation people can check.",
      blocks: [
        {
          type: "text",
          paragraphs: ["Senior architects provided requirements and direction. They asked for an outcome that would:"],
        },
        {
          type: "list",
          items: [
            "produce narrative documents that combine rules, data flow and visuals",
            "show the conditions that control how data moves",
            "trace one variable across programs",
            "bring related scenarios from several programs together",
            "improve accuracy through expert review",
            "support more than one output format",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "They set the goals; the solution was mine to propose. I set the design direction: **start from one field, and end with documentation that can be read, checked and reused.**",
            "The miners showed where the workflow broke; the architects set out what the output had to contain. My proposal had to answer both.",
            "**Constraint:** client data was unavailable, so every example was synthetic.",
          ],
        },
        {
          type: "figure",
          picture: {
            src: direction,
            alt: "Observations from four miners and requirements from senior architects lead to one direction: field, analysis, documentation",
          },
          caption: "Two inputs, one direction.",
        },
      ],
    },
    {
      id: "initial",
      title: "Initial design approach",
      lede: "The first design asked people to check AI output, but not what to check.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Phase 1, described without original screens or names. The original concept evolved through three recorded iterations:",
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Trace and extract.** Follow a variable manually and list the scenarios that affect it.",
            "**Show the path.** Add a visual call chain.",
            "**Bring them together.** Put the call chain and scenarios in one overview.",
          ],
        },
        {
          type: "points",
          items: [
            {
              term: "Start where the field is",
              detail:
                "An earlier version let people begin an analysis from a field’s own row, with its name already filled in.",
            },
            {
              term: "Show logic twice",
              detail:
                "The documentation viewer presented each scenario as a control-flow graph and as AI-written statements, separately or side by side. Each statement gave its condition, the action on the variable, the result and the related code.",
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "AI output appeared under one notice asking people to review it for accuracy. Statements had an edit control, and the document could be exported. Looking back, that notice frames the question Phase 2 takes up.",
          ],
        },
        {
          type: "figure",
          picture: {
            src: phaseOne,
            alt: "The Phase 1 pattern: AI-written statements beside a control-flow graph, under one notice to review for accuracy. It left three questions open: which statements need checking, against what, and what if something is missing?",
          },
          caption: "Schematic of the Phase 1 pattern, redrawn with generic labels.",
        },
      ],
    },
    {
      id: "iteration",
      title: "Iteration and further exploration",
      lede: "Phase 2 adds what was missing: evidence, review and a way to close gaps.",
      blocks: [
        {
          type: "text",
          paragraphs: ["Phase 2 continues the design. It doesn’t replace or rewrite what Phase 1 delivered."],
        },
        {
          type: "table",
          head: ["Area", "Phase 1", "Phase 2 exploration"],
          rows: [
            [
              "AI explanations",
              "AI-written statements under one notice",
              "Labelled where they appear, each part linked to source lines",
            ],
            [
              "Control flow",
              "Scenario and whole-program graphs, side by side with text",
              "Filtered to one field, unresolved paths shown, text version",
            ],
            ["**Evidence and review**", "None", "**New**"],
            ["**Missing source**", "None", "**New**"],
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Phase 1 also covered scope selection, an edit control and export. Phase 2 takes each further: scope stated in the header, notes and version comparison, and a choice of export sections.",
            "I then revised Phase 2 through design critique, not user research:",
          ],
        },
        {
          type: "list",
          items: [
            "A reviewed rule still said “Evidence incomplete” with no next step. I separated the review from the gap and showed what was left.",
            "A missing-source gap could never close. I added a way to regenerate one rule when its source arrives.",
            "The scope limit sat below the rules, where it was seen last. I moved it to the header.",
          ],
        },
      ],
    },
    {
      id: "trust",
      title: "Designing for trust",
      lede: "Four decisions about what a reader can rely on.",
      blocks: [
        { type: "heading", text: "Decide who may assert what" },
        {
          type: "text",
          paragraphs: [
            "Source analysis states what is in the code. AI proposes what it means. People correct and review it. None of them can do another’s job: AI can’t confirm itself, and a review can’t turn missing evidence into found evidence.",
          ],
        },
        {
          type: "columns",
          items: [
            {
              title: "Source analysis",
              lead: "States what is in the code",
              rows: [
                { term: "Produces", detail: "Fields, calls, control flow, missing source" },
                { term: "Limit", detail: "Can’t interpret meaning" },
              ],
            },
            {
              title: "AI",
              lead: "Proposes what it means",
              rows: [
                { term: "Produces", detail: "Overview, use cases, business rules" },
                { term: "Limit", detail: "Can’t confirm its own work" },
              ],
            },
            {
              title: "People",
              lead: "Correct and review",
              rows: [
                { term: "Produces", detail: "Edits, notes, review decisions" },
                { term: "Limit", detail: "Can’t turn missing evidence into found evidence" },
              ],
            },
          ],
          note: "Proposed product model. Nothing runs behind the prototype.",
        },
        { type: "heading", text: "Evidence is not correctness" },
        {
          type: "text",
          paragraphs: [
            "A rule can cite real lines and misread them. So evidence (available, incomplete, not found, unavailable, needs review) is kept separate from content (AI generated, human edited, reviewed). A rule with missing source can be marked reviewed, and reads **Reviewed · Known gap**.",
            "**Trade-off:** harder to learn than one green tick, which would claim more than the evidence does.",
          ],
        },
        {
          type: "figure",
          picture: {
            src: reviewed,
            alt: "Rule 3 before review, marked Evidence incomplete, and after review, marked Reviewed and Known gap",
          },
          caption: "Reviewed, but not complete.",
        },
        { type: "heading", text: "A gap needs a way forward" },
        {
          type: "text",
          paragraphs: [
            "People can record what they know, continue with the gap labelled, or regenerate if source becomes available. Regenerating keeps the note and clears the review.",
            "**Trade-off:** more work for reviewers; the alternative lets an old decision vouch for evidence nobody has seen.",
          ],
        },
        {
          type: "figure",
          picture: {
            src: note,
            alt: "Three states of rule 3: source missing, source becomes available, regenerated and traced. The note is kept throughout; the review is cleared at the end.",
          },
          caption: "The note stays. The review doesn’t.",
        },
        { type: "heading", text: "Interpretation and control flow stay apart" },
        {
          type: "text",
          paragraphs: [
            "Rules are marked **AI generated**; the graph is marked **from source, not generated**. They link to each other, but AI wording can’t borrow the authority of the code.",
            "**Trade-off:** two views to move between.",
          ],
        },
        {
          type: "figure",
          picture: {
            src: ruleFlow,
            alt: "A rule marked AI generated beside a control-flow graph marked from source, not generated",
          },
          caption: "Connected, but not the same claim.",
        },
      ],
    },
    {
      id: "experience",
      title: "The complete experience",
      lede: "From one field to reusable documentation.",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Find** a field in the catalogue.",
            "**Choose scope:** current program or all referencing programs. A single-program result is marked “1 of 3 programs analysed”.",
            "**Generate** through four named stages, ending with a count of rules to review.",
            "**Review** an overview and rules grouped by use case.",
            "**Verify** each part of a rule against its lines, and follow it into the control flow.",
            "**Correct** with edits and notes, compare versions and restore.",
            "**Reuse** through export to PDF, DOCX or Markdown, with selectable sections.",
          ],
        },
        {
          type: "figure",
          picture: {
            src: sevenSteps,
            alt: "Seven prototype screens: find, choose scope, generate, review, verify, correct, reuse",
          },
          caption: "From a field to reusable documentation. Prototype screens, simulated analysis.",
        },
        {
          type: "table",
          head: ["What’s in the prototype", ""],
          rows: [
            [
              "**Working interactions**",
              "Navigation, scope choice, filters, sorting, rule and node selection, review, undo, counts, export options",
            ],
            ["**Simulated**", "Generation, source arriving, regeneration, export and download"],
            ["**Prefilled samples**", "COBOL-style code, explanations, search, edits, notes"],
            [
              "**Proposed only**",
              "COBOL analysis, AI generation, evidence checking, source versions, exported documents",
            ],
          ],
        },
      ],
    },
    {
      id: "prototype",
      title: "Try the prototype",
      lede: "Clickable, with synthetic data. Generation, source arriving and export are simulated.",
      blocks: [
        {
          type: "prototype",
          title: "Legacy Intelligence prototype",
          poster: { src: explanation, alt: "Preview of the prototype’s explanation page" },
          embed:
            "https://embed.figma.com/proto/SVp7bAoWCr9myjfIZYDiml/Legacy-Intelligence?node-id=23-1663&starting-point-node-id=23%3A1663&page-id=0%3A1&scaling=contain&content-scaling=fixed&footer=false&viewport-controls=false&embed-host=share",
          flows: [
            {
              label: "Generate an explanation",
              href: "https://www.figma.com/proto/SVp7bAoWCr9myjfIZYDiml/?node-id=23-1663&starting-point-node-id=23-1663&scaling=contain",
            },
            {
              label: "Find an explanation",
              href: "https://www.figma.com/proto/SVp7bAoWCr9myjfIZYDiml/?node-id=24-3428&starting-point-node-id=24-3428&scaling=contain",
            },
          ],
        },
      ],
    },
    {
      id: "outcome",
      title: "Outcome and limitations",
      lede: "A design, not a product. Here is what I’d test next.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "**Phase 1** reached the design stage. It wasn’t implemented, and it received no formal implementation feedback or user validation.",
            "**Phase 2** is a clickable prototype with synthetic data. It has not been tested with users.",
            "No impact is claimed for either phase.",
          ],
        },
        {
          type: "points",
          items: [
            {
              term: "What I’d validate with miners",
              detail:
                "Whether “Traced” reads as “lines found” or “correct”; whether they can find a rule’s code quickly; whether a reviewed rule with a known gap makes sense; whether clearing a review feels right; whether scope is clear; whether large graphs stay usable.",
            },
            {
              term: "What I’d resolve with architects and engineers",
              detail:
                "Indirect dependencies and run-time calls; how accurately control flow can be reconstructed; versioning when one rule is regenerated; conflicts between new interpretations and human edits; large programs and incomplete source.",
            },
          ],
        },
      ],
    },
    {
      id: "contribution",
      title: "My contribution",
      lede: "Solo Product Designer, across both phases.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "**Phase 1.** I planned and ran workflow discovery with four miners, framed the design problem and designed the original experience through its iterations. Senior architects provided requirements and technical direction. I did not own the product or write the technical requirements.",
            "**Phase 2.** I extended the design, set its direction, made and critiqued the design decisions, and evaluated the experience. I used Claude Code and AI-assisted workflows to help create and execute the Figma prototype.",
            "I did not engineer software in either phase.",
          ],
        },
      ],
    },
  ],
};
