import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/LearnTheory.css'

class LearnTheory extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row >
                        <Col>
                        <p className="text">
                            Starting off, the best way to understand music
                            is to know the foundation:<br /><br />

                            <h2 style={{textAlign: "center", fontSize: "200%"}}>♫ Notes ♫</h2><br />

                            Don't worry, in almost every song you've ever
                            heard there are only twelve. If you're thinking 
                            "I'm pretty sure I've heard a lot more than that...",
                            then that's because they repeat. Every twelve notes,
                            the pattern just restarts, either higher or lower
                            than last time. Here's is a visual to help represent that:<br /><br />

                            <img className="learnImage" src="diagram_3.png" 
                            alt="the twelve notes. A, A sharp/B Flat, C, C Sharp/D Flat, 
                            D, D Sharp/E Flat, E, F, F Sharp/G Flat, G, G Sharp/A Flat, A,
                            A Sharp/B Flat, B"/><br /><br />

                            You may notice that some of the notes seem to have two names 
                            and some don't. The notes without two names are called "Naturals".
                            The notes with two names either have a: 
                            <strong>"♯"</strong> or <strong>"♭"</strong> next to them.<br /><br />
                            Here is what those symbols are called:<br /><br />
                            <strong>Sharp: </strong> <strong>♯</strong><br />
                            <strong>Flat: </strong> <strong>♭</strong><br /><br />

                            Western music is based on something called the <strong>Major Scale</strong>,
                            and the default key is C. Some where along the way, A <strong>key</strong> is a collection of specific notes, which are used to compose a song. 
                            You might hear that a song is written in a certain key. This means that a certain collection of notes were
                            used to write the song. Choosing and sticking to a key when writing a song mean staying true to the notes 
                            in the key to give the song a sense of cohesion. Otherwise, the song would not sound it was written with purpose.
                            Of course, there are acceptions to this rule, but that is out of the scope of this website. <br /><br />
                            The name of the key is based on the first note in the pattern, otherwise known as the <strong>"root note"</strong>.
                            The C Major scale is built only on natural notes, <strong>C D E F G A B (repeat)</strong>. The song written using this
                            would be written in the <strong>Key of C</strong>, otherwise simply called "C".
                        </p>
                        <p className='text'>
                            To build on our knowledge of the note's function, we reach:<br /><br />

                            <h2 style={{textAlign: "center", fontSize: "200%"}}>♫ Scales ♫</h2><br />
                            scales are simply a collection of notes, and typcially around seven are in a traditional scale. 
                            The notes which are selected to be in a scale all depend on how they scale should sound.
                            As an example, the major scale is traditionally "happy", while the minor scale is traditionally "sad".<br /><br />
                            <strong>This is where you make stylistic choices as a musician.</strong><br /><br />
                            Okay, so we all know that some songs are happy, some are sad, and most are everything in between.
                            How do we choose the right notes for the emotion we want to portay?
                            Introducing: <strong>Intervals</strong><br /><br />
                            This is the root of all emotion in music. If you have two notes, it is the space
                            between them that defines the emotion you feel. For a proper definition: <strong>
                            an interval is the distance traveled, or the space between two notes.
                            </strong>
                            <img className="learnImage" src="intervals-in-C-major-scale.png" alt="C Major Scale Intervals" /><br /><br />
                            You can see here a visual representation of intervals.
                            From C to C# is a <strong>semitone</strong>, or a <strong>half step</strong>. 
                            From C to D is a <strong>whole tone</strong>, or <strong>whole step</strong>.
                            From C to D# is a <strong>minor third</strong>, and so on... To play an interval, you can either play the notes
                            at the same time, or one directly after the other. The choice is yours and depends on what you 
                            would like to portry. Each of these intervals have a different
                            emotion associated with them. It is hard to describe them, but here is an image that
                            might help: <br /><br />
                            <img className="learnImage" src="interval-emotions.png" alt="Intervals and their emotions" /><br /><br />
                            For more information, 
                            <a href="https://howmusicreallyworks.com/Pages_Chapter_4/4_4.html" target="blank">Check here</a>.<br /><br />
                            So, we understand that a single interval is the space between two notes. 
                            The reason this is important is that this is the building block for a scale. 
                            A <strong>scale</strong> is a series of notes picked in a patern of intervals.
                            Let's start by breaking down the <strong>Major Scale</strong>: <br /><br />
                            <img className="learnImage" src="major-scale.png" alt="Major Scale" /><br /><br />
                            This is the Major Scale. This is all Major Scales. No matter what key, 
                            or what note you start with, the pattern is ALWAYS:<br /><br />
                            <strong>Whole-Step, Whole-Step, Half-Step, Whole-Step, Whole-step, 
                            Whole-step, Half-Step</strong> (repeat)<br /><br />
                            Here is another way to view the scale:<br /><br />
                            <img className="learnImage" src="major-scale-intervals.png" alt="Major Scale Intervals" /><br /><br />
                            You can see that the scale always comes full circle, ending up at its starting point.
                            The space between the two "C"s is called an <strong>Octave</strong>. They are the same notes, 
                            The second C is just twice as high. Each note oscilates, or vibrates, at a certain frequency. 
                            Say the first C in the scale
                            has a frequency of 800hz. The second C would have a frequency of 1600hz, making it the exact same
                            note, just that the pitch is double. That is how the twelve notes in all of western music repeat. They
                            just all eventually come full circle in a scale, and then repeat in either an ascending or descending fashion,
                            going higher or lower.<br /><br />
                            There are many different ways you can play the major scale. In fact, it's not an exageration to say
                            all western music is based on this scale. To learn more about the different ways to play this scale,
                            check out this <a href="https://www.musical-u.com/learn/the-many-moods-of-musical-modes/">link</a>. Here, you
                            will learn about <strong>modes</strong>. In simple terms, modes are simply starting the major scale from a different note than
                            the <strong>tonic</strong>, or root note. This creates a new scale, but really it's just another way of
                            playing the major scale. <br /><br />
                            Also, as mentioned earlier, it doesn't matter which key you want to play the Major Scale in,
                            the patterns are always the same. To make it a little easier to visualize though, 
                            follow this <a href="https://www.pianoscales.org/major.html">link</a> to see the major scale (and other scales) in
                            every key. Remember, music is about patterns. Here is a table to help you visualize the modes: <br /><br />
                            <img className="learnImage" src="major-scale-modes-table.png" alt="List of Modes" /><br /><br />

                        </p>
                        <p className="text">
                            From scales, we can create our next building blocks:<br /><br />
                            <h2 style={{textAlign: "center", fontSize: "200%"}}>♫ Chords ♫</h2><br />
                            <strong>Chords</strong>, just like scales, have formulas. We'll concentrate on the <strong>
                            Major Chord</strong> and <strong>Minor Chord</strong> as examples. 
                            Before we get to specific chords, though, let me define a <strong>chord</strong>. 
                            A chord is three or more notes played simultaneously.
                            They can also be played in an <strong>Arpeggio</strong>. And arpeggio is when 
                            you play the notes of a chord one after the other.<br /><br />
                            So, first is the major chord. If you remember your intervals, that's good: because they are
                            still in play. <br /><br />
                            Here is the formula for building the Major Chord: <br /><br />
                            <img className="learnImage" src="C-Maj-with-intervals.jpg" alt="Major Chord Intervals" /><br /><br />
                            Here is the formula for building the Minor Chord: <br /><br />
                            <img className="learnImage" src="C-min-chord-with-intervals.jpg" alt="Minor Chord Intervals" /><br /><br />
                            Here is the formula for building the Diminished Chord: <br /><br />
                            <img className="learnImage" src="C-dim-with-intervals.jpg" alt="Diminished Chord Intervals" /><br /><br />

                            Great. And just like scales, it doesn't matter what you use for the root note. The same formula applies for each chord. 
                            This is how you build them. Although, that leads to the next question: <strong>How should the be arranged?</strong><br /><br />
                            The answer to that is to use <strong>Scale Degrees</strong><br /><br />

                            Looking at the Major Scale, you see that it has seven notes before it reaches the next octave. Each of these notes has a
                            coresponding <strong>degree</strong>. Each degree is represented by a roman numberal, and it is the number of the note's position.
                            So the root note would be I, the next note would be II, the third would be III and so on... 
                            <a href="https://www.musikalessons.com/blog/2017/01/basic-music-theory/">Here is a visual representation</a>. Here,
                            You will also find a section on other topics covered here that might help illuminate questions you might have. Scroll down to
                            "Roman Numeral Analysis" to find the part on how scale degrees corellate to chords. Here is a quick idea of what's going on: <br /><br />
                            <img className="learnImage" src="scale-degrees-major-scale.png" alt="Scale Degrees" /><br /><br />
                            Here you can see the scale degrees line up with each note using Roman Numerals. At the top, you can see each 
                            degree is assigned a value: Major or Minor. To create chord progressions, you take the note of the coresponding
                            degree and use that as the root note either a Major or Minor chord depending on the degree. So, say you wanted to play a
                            I - IV - V - IV in C Major. Your first step would be to look at the first degree and see the <strong>note</strong> and whether
                            the degree calls for <strong>Major</strong> or <strong>Minor.</strong> in C Major: <br/><br/>
                            I = C, IV = F, V = G, and VI = A<br/>
                            I = Major, IV = Major, V = Major, and VI = minor <br /><br />
                            So your chord progression would be C Major - F Major - G Major - a minor<br /><br />
                            This is the basic logic behind creating a chord progression!

                        </p>
                        <p className='text'>
                            In conclusion, all of this logic applies to every key even though the focus was on C Major. All of the scale patterns, chord patterns, scale degrees...
                            everything applies to all of the keys. It all just depends on what root note you choose, which intern dictates your key. Thanks for reading, and enjoy the Song Workshop!
                        </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LearnTheory;