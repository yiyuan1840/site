// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import {H2, H3, H4} from '../../components/heading'
import {Ref, FootNotes, Note} from '../../components/footnotes'
import {Image} from '../../components/figure'
import {InlineCode} from '../../components/code'
import {UL, LI} from '../../components/list'
import {Table, Row, Column} from '../../components/table'

export default () => (
  <Post>
    <Meta id="version-two"/>

    <P>Time passes by so fast. It{`'`}s been about 3 months
    since my first post on my new blog. At that time, I just
    wanted to put a MVP out there, to be able to publish
    my posts. But I{`'`}ve also immediately promised
    that I{`'`}ll make sure to release a self-made look for
    it as soon as I will find some time to create one.</P>

    <P>And now, around <Link href="https://github.com/leo/site/commits/master">120 commits</Link> later,
    I{`'`}m very proud to present you the first design that I
    made completely by my self. You won{`'`}t believe it, but
    a huge amount of decisions were made in this short
    time. I found out that blogging is a really great way to get something
    out there without needing to set up an additional
    environment (like it needs to be done for a coded project, for
    example). If something important comes to my mind, I just
    need to open <Link href="https://ia.net/writer/mac/">iA Writer</Link> and let it flow.</P>

    <P>When I moved to from Tumblr to GitHub Pages a few
    months ago, I did it because I was annoyed by how less
    the app actually cares about performance. If you take a
    look around, you{`'`}ll notice that there are many other
    web developers or designers who care about this topic
    and therefore switched to a static deployment. Since
    I did that, I often heard and read that this method takes a price.</P>

    <P>And yes, of course it does. It{`'`}s not possible for me
    to create flexible algorithms for sorting posts or adding
    comments, but that{`'`}s completely okay. For this site, I
    don{`'`}t need all that stuff. And I think that{`'`}s exactly
    what makes it appealing to visitors.</P>

    <H2>{`Stackin' Blocks`}</H2>

    <P>Sometimes, the act of limiting creativity actually
    embraces the same. Do you
    remember <Link href="http://minecraft.net">Minecraft</Link>? The game where
    everything only consists of angled boxes mashed together to
    represent materials, animals or even tools or
    humans? I{`'`}m sure you do. I{`'`}ve spend a huge part of
    my childhood playing it and yeah, I sometimes still
    do (when I{`'`}m out of creativity and need to recharge<Ref id="1"/>). 🐓</P>

    <P>Just ask yourself why so many adults and kids love
    this game and therefore bought
    over <Link href="https://minecraft.net/stats">20.000.000 copies</Link> although
    it{`'`}s so easy to get a cracked version (not that I would
    recommend that, please keep supporting those Mojang guys and girls).</P>

    <P>The fact that you only have square blocks available to create
    your own ideas leads to a higher effort which your brain
    needs to make to achieve what you want. Because some things
    from the real world or your mind can{`'`}t be built in the
    same way in this game, you need to think more. And that{`'`}s exactly
    what keeps you from getting bored quickly. It{`'`}s the balance
    between the ease of creation (which comes with a huge
    range of different tools and materials) and the additional
    effort that makes the game not-too-easy, but also not-too-hard.</P>

    <P><i>So how did we get here, exactly?</i></P>

    <P>Oh, yeah. You{`'`}re right. I originally just wanted to explain
    why it{`'`}s not that bad to limit your own options. On one hand, you
    don{`'`}t have that much ways to realize your thought, but on
    the other hand, you don{`'`}t need to waste time deciding
    between different methods — you already made the decision
    for that in the beginning.</P>

    <H2>Improvements</H2>

    <P>I didn{`'`}t just create this new update because I was
    lonely hanging around at home. I actually wanted to finally
    introduce some neat features which I also usually
    implement when developing other websites and therefore
    don{`'`}t want to miss on my personal one.</P>

    <P>Besides that, I also wanted to do some things which I had in
    my mind for a long time (since I started my first blog
    in 2013). So please, go ahead and check them out:</P>

    <H3>{`More "Leo", Less "Leonard Lamprecht"`}</H3>

    <P>I guess I literally wasted hundreds of hours thinking
    about how I should name my site. First, I wanted to use one
    of my old nicknames ({`"mindrun"`} for example), because
    they{`'`}re easy to remember and some people already know
    them, so they could easily find it. But in the end, I just
    decided to officially call it {`"leo"`}, since that is how my
    friends call me and how I also like to be called on the web.</P>

    <P>Besides the fact that the name is very easy to spell, it{`'`}s
    also a symbol for something strong, bold and
    wise — I{`'`}m talking of the lion. I actually don{`'`}t know if
    this word is actively being used when talking about
    the lion in English, but in German, it definitely isn{`'`}t. Therefore
    I also din{`'`}t know about this from the beginning.</P>

    <P>To cut a long story short: I thought it{`'`}s way easier for people to
    just refer to me as {`"leo"`} instead of using my full name. But
    please don{`'`}t take that the wrong way, I AM really proud of my
    full name. Every family has a really huge background of
    people who ran big efforts just to survive and start a
    family. They did everything they could to do exactly
    that<Ref id="2"/>. That makes me really proud - and you should be too of yours.</P>

    <P>I{`'`}m sure that many people will interpret that headline on
    top of this section as something like {`"`}Okay, he{`'`}s not the guy I
    used to know anymore{`"`}. But that{`'`}s just wrong. Please don{`'`}t
    take that too seriously, it{`'`}s just an
    abbreviation - not a new brand or something like that.</P>

    <H3>Fira? Fira!</H3>

    <P>If you{`'`}re an active contributor to Mozilla{`'`}s projects, or just
    know them pretty good, you{`'`}ll probably also know
    about <Link href="http://www.carrois.com/fira-4-1/">Fira</Link>.</P>

    <P>You don{`'`}t know about it? No problem! It{`'`}s basically a new, open-source font
    which is now mainly used in Firefox
    OS. It{`'`}s available in over 16 weights and I completely fell in
    love with every single one! What I especially like about
    it is that the letter <b>l</b> has such a nice
    curve<Ref id="3"/> at the bottom, which flows like the
    rounded bottom of the letter <b>e</b>.</P>

    <Image src="/static/essays/2015/version-two/fira.png"/>

    <P>It was originally designed by the
    typomaniac <Link href="https://en.wikipedia.org/wiki/Erik_Spiekermann">Erik Spiekermann</Link> in
    cooperation with the folks at <Link href="http://carrois.com">Carrois Type Design</Link> and
    is now widely used in Mozilla{`'`}s software palette.</P>

    <P>Since I don{`'`}t know that much about typography yet, this font
    really makes me look forward to my upcoming training as
    Mediengestalter (german for media designer), where I{`'`}ll hopefully
    learn more about this beautiful form of communication. I{`'`}m
    definitely planning to put more effort into making sure
    that fonts which I use on the web are the right ones and
    also properly styled in terms of weight, size and kerning.</P>

    <H3>Better feed</H3>

    <P>Since I released my first blog posts a few years ago, I always
    stood glued to RSS for providing a feed. Mostly because I didn{`'`}t know
    of any other alternative and maybe also because the
    themes I{`'`}ve used didn{`'`}t have the Atom feed url in their <InlineCode>head</InlineCode> tag
    yet (therefore I never really got to experiment with it).</P>

    <P>But now, because the whole source code of my site is
    public and entirely editable through templates, I came across
    the <InlineCode>feed.xml</InlineCode> file from the default Jekyll theme
    and started searching for a precise explanation of the
    RSS format. The reason I did this was because I needed
    some information on how to format my post{`'`}s meta-data for the feed.</P>

    <P>Coming across different un-official documentation
    sites, I{`'`}ve noticed that there{`'`}s not only RSS: There{`'`}s also
    RSS 2 and Atom. After getting some knowledge about the
    differences of those two, I figured out that I like
    the last format more than both RSS versions. Part of
    the reason for this is because Atom fixed a lot of the
    design flaws of the old RSS standard. For
    example, the names of the keys in the old format
    haven{`'`}t been chosen as carefully as in Atom (just to name a few):</P>

    <Table>
      <Row header>
        <Column>RSS</Column>
        <Column>Atom</Column>
      </Row>

      <Row>
        <Column>managingEditor</Column>
        <Column>author</Column>
      </Row>

      <Row>
        <Column>guid</Column>
        <Column>id</Column>
      </Row>

      <Row>
        <Column>lastBuildDate</Column>
        <Column>updated</Column>
      </Row>

      <Row>
        <Column>
          <InlineCode>{`<rss>`}</InlineCode>
        </Column>

        <Column>
          <InlineCode>{`<feed>`}</InlineCode>
        </Column>
      </Row>
    </Table>

    <P>Things like that are important to me, because they make
    me feel like the people who thought out this format spent much
    of their time just to make it simpler and avoid confusion. And
    that kind of effort is always one I will value.</P>

    <P>But of course that wasn{`'`}t the only reason why I chose
    Atom (although it{`'`}s a pretty big one). Some other cool
    things which really convinced me:</P>

    <UL>
      <LI>The <InlineCode>id</InlineCode> key doesn{`'`}t need a <InlineCode>isPermaLink</InlineCode> attribute
      anymore, if it contains a permalink.</LI>

      <LI>I felt like the image-element was really poorly designed
      in RSS, which was why I was really happy when I noticed that
      Atom introduced the logo- and icon-tags that simply contain
      the URL to the image - no width, height or other specifications.</LI>

      <LI>Space for more information within the <InlineCode>author</InlineCode> tag. You{`'`}re free to
      use <InlineCode>{`<name>`}</InlineCode>, <InlineCode>{`<email>`}</InlineCode> and&nbsp;
      <InlineCode>{`<uri>`}</InlineCode> tags.</LI>
    </UL>

    <P>So in the End, I{`'`}ve decided to go with Atom. If you
    experience any troubles with this change, please go ahead
    and let me know about it, so that I can quickly fix it.</P>

    <H3>What Else?</H3>

    <P>Apart from the changes you{`'`}ll actually notice when
    visiting my site, I{`'`}ve also added some subtle ones. For
    most people, those might be not as important as the
    upper ones, but for me, they are.</P>

    <H4>Semantic HTML</H4>

    <P>The last theme I used on this blog wasn{`'`}t really optimized
    for this. It felt like it was created before HTML 5 and
    hadn{`'`}t been updated since then. Because I am a web developer
    and very focused on creating semantically correct sites
    which can be easily interpreted by every software/device, I
    needed to change this.</P>

    <P>Starting with the way my articles are
    displayed, I{`'`}ve created a completely new theme which doesn{`'`}t
    entirely rely on divs anymore
    and I{`'`}m very happy with the result.</P>

    <P>Sure, there are still some things like the footnotes
    which are generated directly by the markdown engine Jekyll uses
    to convert my output and therefore can{`'`}t be changed without
    moving my site to a custom environment. But because I don{`'`}t
    want to do so - since I enjoy GitHub Pages and the
    simple way how it wants you to publish content - I{`'`}ll
    ignore this for now. I mean, it{`'`}s not even
    incorrect. Those <InlineCode>div</InlineCode> tags are simply meant to
    represent a flow of content of any form (at least
    that{`'`}s how I{`'`}ve interpreted W3C{`'`}s explanation).</P>

    <H4>Less Code</H4>

    <P>The re-design fortunately allowed me to rethink how this
    thing even works. I had to create new CSS files, a better
    HTML structure and was therefore able to start with
    my own methods when it comes to clean code. For example, I
    reduced the number of different SASS files and avoided
    using those funny variables (since I like keeping my
    SASS as similar to CSS as possible).</P>

    <P>If you want to find out more about what I did there, just
    take a look at the source code - I don{`'`}t want to
    waste your time here.</P>

    <H4>Forgot something?</H4>

    <P>Yes! I planned another cool improvement for my
    site, but the time didn{`'`}t come yet. Besides that fact, I
    couldn{`'`}t wait for it before releasing the new
    update, please have mercy with me... 😅</P>

    <P>As soon as it{`'`}s there, I{`'`}ll let you know about it.</P>

    <P>Oh.</P>

    <P>... and I banged my head on the
    table, yelled {`"`}FUCK THE WOOORLD!!{`"`} and changed my post{`'`}s permalink
    root from <InlineCode>/blog</InlineCode> to <InlineCode>/notes</InlineCode>, which
    will make all existing links to my posts on the web completely useless.</P>

    <H2>What I Learned from This</H2>

    <P>Before I finish this article (probably one of
    the longest I{`'`}ve ever written), I want to leave a
    few words about how I actually came to this point where
    I figured out how my new site will look and work:</P>

    <P><i>Insecure?</i> — Yeah, I guess that{`'`}s what describes my
    design-technical situation before this release the best. I
    know that it{`'`}s far from award winning, but I{`'`}m very proud
    of what I did with this update anyway. I finally managed
    to convert my thoughts into a working prototype. Before
    that, I discarded many designs which first appealed to me,
    but then turned out to be bad after some time.</P>

    <P>But I think I found out what my problem was: I wanted
    to create in one flow, without a pause. But now I know, that
    this is exactly what design needs: Time. Because
    I tried so hard to make something great, the result
    wasn{`'`}t quite fitting my expectations. Instead of
    doing that again, I just did a few things and then
    left the design some {`"`}time to breathe{`"`}. Meanwhile
    I had enough time for myself to think about which
    change I wanted to apply next. And hell yeah — it worked!</P>

    <FootNotes>
      <Note id="1">And please, don{`'`}t ask me why the hell I
      sometimes place those chicken or pigs here and
      there, I just love these little icons sitting in
      between good looking typography.</Note>

      <Note id="2">I might write about the story of my
      family another time, I{`'`}m pretty sure you{`'`}ll find
      it interesting!</Note>

      <Note id="3">The most fonts I know don{`'`}t have
      that feature. The <b>l</b> letter is usually more
      of simple line than an actual letter.</Note>
    </FootNotes>
  </Post>
)
