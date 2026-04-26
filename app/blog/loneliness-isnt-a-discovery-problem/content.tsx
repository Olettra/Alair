"use client";

import { ScrollReveal } from "../../components/animated";
import { Button } from "../../components/button";
import { useWaitlist } from "../../components/waitlist-modal";

export function BlogContent() {
  const { open } = useWaitlist();

  return (
    <>
    <div className="mx-auto max-w-[680px]">
      <ScrollReveal>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          There are 8.2 billion people on this planet. And somehow, loneliness
          is still an epidemic.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          The U.S. Surgeon General has called it a national public health
          crisis. Fifty-two million Americans feel lonely every single day.
          That isn&apos;t a niche. That&apos;s a generation.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-16">
          So you have to ask the obvious question: with this many people, this
          many apps, this much technology pointed at the problem. Why is it
          getting worse?
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.15] tracking-tight mb-8">
          The wrong diagnosis
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="rounded-2xl border border-border p-8 sm:p-10 mb-16">
          <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
            Almost everyone building in this space believes the same thing. They
            believe the problem is discovery. People just need a better way to
            find each other. So they build better search. Better algorithms.
            Better swipe mechanics. Better filters. Better prompts.
          </p>
          <p className="text-[17px] font-light leading-[1.9] text-text-dim">
            We think that&apos;s the wrong diagnosis.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.15] tracking-tight mb-8">
          The real problem isn&apos;t finding. It&apos;s the cost of looking.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          Connection requires two things almost nobody talks about: effort and
          vulnerability. You have to write the profile. Take the photos. Show
          up to the event. Make the first move. Risk being misread, ignored, or
          quietly judged. Then do it again tomorrow. And the day after that.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          People aren&apos;t failing to find connection because the technology
          is bad. They&apos;re failing because the act of looking requires
          energy they don&apos;t have and courage they&apos;ve been worn down
          to not feel.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          They don&apos;t choose loneliness. They just run out of fight.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-16">
          That surrender. Millions of people making it quietly every single
          day. That is what created the epidemic. Fix the effort. Remove the
          vulnerability. And you unlock a market every existing app has failed
          to reach.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.15] tracking-tight mb-8">
          Where the idea came from
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          We kept coming back to one observation about how people actually use
          AI today.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          The best AI tools, ChatGPT, Claude, get to know their users in a way
          no profile ever could. Not through a quiz. Through real conversation,
          over time. People share what happened at work. What&apos;s stressing
          them out. What they&apos;re dreaming about. A weird thing their mom
          said. A book that hit different. Over weeks and months, the AI builds
          a picture of the person that is, frankly, more accurate than how most
          of us would describe ourselves.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="rounded-2xl border border-border p-8 sm:p-10 my-16">
          <p className="font-serif text-[clamp(20px,3vw,28px)] leading-[1.4] tracking-tight">
            Your AI already knows you better than you know how to describe
            yourself.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-16">
          So we asked a question: what if the same thing that&apos;s getting to
          know you could go find your people for you? That&apos;s Alik.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.15] tracking-tight mb-8">
          What Alik actually does
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          Your AI learns who you are the same way the tools you already use do.
          Through real, ongoing conversation. Not a profile. Not a checklist.
          It builds a picture of you that no form ever could.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          Then it goes to work.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="rounded-2xl border border-border p-8 sm:p-10 mb-16">
          <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
            While you live your life, your Alik is out there talking to other
            people&apos;s Aliks. Playing out scenarios. Figuring out if two
            people would actually click. When two Aliks agree, they bring an
            introduction back to their humans. With context, with reasons, with
            something to actually say to each other.
          </p>
          <p className="text-[17px] font-light leading-[1.9] text-text-dim">
            You approve. They approve. You meet. That&apos;s the whole loop. No
            swiping. No browsing. No performing. No writing the perfect bio for
            the seventeenth time.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.15] tracking-tight mb-8">
          The insight nobody else is building on
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          Every other product in this space puts the burden of
          self-representation on you. You have to describe yourself accurately,
          attractively, honestly. All at once, in three photos and a paragraph.
          Most people are bad at this. Most of us aren&apos;t even sure who we
          are on a given Tuesday.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          Your Alik doesn&apos;t have that problem. It knows you the way a
          long-time friend knows you.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          When two AIs negotiate a match on behalf of their humans, the quality
          of the introduction is fundamentally different. It&apos;s not based
          on what you said about yourself. It&apos;s based on who you actually
          are.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-16">
          That&apos;s the bet. And it&apos;s the one nobody else is making.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.15] tracking-tight mb-8">
          What this looks like in practice
        </h2>
      </ScrollReveal>
    </div>

    <div className="mx-auto max-w-[1320px] px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
      <ScrollReveal delay={0.05}>
        <div className="rounded-2xl border border-border p-8 sm:p-10 h-full">
          <p className="text-[15px] font-light leading-[1.85] text-text-dim">
            Your Alik comes back to you one afternoon.{" "}
            <em className="text-text">
              I found someone in Barcelona. He collects the same vintage
              records you do. Here&apos;s why I think you two make sense.
            </em>{" "}
            You read the breakdown. You agree. He agrees. You start talking.
            Three months later you&apos;re flying out to hit a flea market
            with him. His mom makes you dinner. You&apos;ve never been to
            their home before, but somehow it feels like you&apos;ve always
            belonged there.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="rounded-2xl border border-border p-8 sm:p-10 h-full">
          <p className="text-[15px] font-light leading-[1.85] text-text-dim">
            You just moved to LA and you don&apos;t know anyone. Two
            weeks in, your Alik says,{" "}
            <em className="text-text">
              I found someone. He hikes in the mornings, argues philosophy at
              night. He&apos;s your exact energy.
            </em>{" "}
            Six months later he&apos;s the person you call when things go
            sideways.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="rounded-2xl border border-border p-8 sm:p-10 h-full">
          <p className="text-[15px] font-light leading-[1.85] text-text-dim">
            You became a parent and your world shifted. Your old friends are
            still out at 11&nbsp;PM. You&apos;re on 6&nbsp;AM wake-ups. Your
            Alik noticed. It found her. Twelve minutes away, kid the same
            age, going through the same identity shift you are. You
            didn&apos;t even know you needed her until your Alik explained
            why.
          </p>
        </div>
      </ScrollReveal>
    </div>

    <div className="mx-auto max-w-[680px]">
      <ScrollReveal delay={0.05}>
        <div className="rounded-2xl border border-border p-8 sm:p-10 my-16">
          <p className="font-serif text-[clamp(20px,3vw,28px)] leading-[1.4] tracking-tight">
            These aren&apos;t hypotheticals. This is what connection looks like
            when the cost of looking goes to zero.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.15] tracking-tight mb-8">
          Where we start
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
          We&apos;re starting hyperlocal. Minnesota first. 1.2 million adults
          aged 22 to 40 who want real connection but don&apos;t have the time,
          energy, or stamina to keep performing for it. Major US cities within
          twelve months. Global by 2030.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-16">
          And we&apos;re not just competing in dating. We&apos;re going after
          the broader question of human connection. Friendships, travel
          companions, the people who make your life better in ways you
          couldn&apos;t have predicted. The market for that is bigger than any
          single app category, because connection is bigger than romance.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.15] tracking-tight mb-8">
          A note on privacy
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="rounded-2xl border border-border p-8 sm:p-10 mb-16">
          <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
            When your Alik talks to other Aliks, it follows three rules without
            exception.
          </p>
          <p className="text-[17px] font-light leading-[1.9] text-text-dim mb-8">
            Your raw thoughts and venting stay yours. They teach the AI, but
            they never leave it. Your matchable signals, abstracted patterns
            like &ldquo;values directness&rdquo; or &ldquo;bonds through
            humor,&rdquo; are visible and editable by you, anytime. And every
            shareable introduction gets your approval before another human sees
            a single word.
          </p>
          <p className="text-[17px] font-light leading-[1.9] text-text-dim">
            You stay in control. Always.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border-t border-border pt-20 sm:pt-28 text-center">
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-normal leading-[1.12] tracking-tight mb-4">
            Stop looking
          </h2>
          <p className="text-text-dim font-light mb-9">
            You&apos;ve spent enough time wondering where your people are.
            <br />
            Let your Alik go find them.
          </p>
          <Button onClick={open} size="lg">
            Join the Waitlist
          </Button>
        </div>
      </ScrollReveal>
    </div>
    </>
  );
}
