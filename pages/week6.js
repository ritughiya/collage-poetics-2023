import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Typing4 from "../components/Typing4"

function HomePage() {



  return (
    <>
    <div className="week week5 week6">
    <Head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
    <title>collage poetics 2023</title>
    </Head>
  <div className="text">
  <div className="cloudheader">

<img src="/cloud.png" layout="fill"></img>

</div>
    <div className="header">
    <div className="head"><a href="https://collage-poetics.com/">Collage Poetics</a></div>
    <div className="subhead">Week 6 - Ritu's out of office  ⛱️ Alvin Time  💼 </div>
    </div>

    <div className="portal next">
        <a href="/">
            Next Week
        </a>
    </div>

    <div className="portal last">
        <a href="/week5">
            Last Week
        </a>
    </div>

    <div className="click">
        <a href="https://docs.google.com/spreadsheets/d/1hBWCRV9fTf0BlN7hTykIjYfiBWIuMQpY7kmop6ilUCs/edit?usp=sharing" target="_blank">
            office hours
        </a>
    </div>

    <div className="container">
    <div className="row">
        <div className="group animate__animated animate__bounceInDown">
            <div className="card default">
            <a target="_blank" href="https://docs.google.com/document/d/1FAHL7zy8U_gcXnkgR9roEQUo_wpfH9uXnH4tzgRgv_M/edit?usp=sharing">
            <div className="link">
                <div className="blocktext">Syllabus<br></br>
                1 block • 1 month ago
                </div>
            </div>
</a>
            </div>
            
        </div>
        </div>

        <div className="row">

        <div className="group">
            
            <div className="card white">
            <a target="_blank" href="https://docs.google.com/spreadsheets/d/1TYzXWZCCJDSgVnIIPiBcimVgbj5-z_xZS0n19-qdh6M/edit?usp=sharing">

            <div className="link">
                <div className="blocktext">Alvin’s 3/6 office hours<br></br>
                1 block • today
                </div>
            </div>
</a>


            </div>
        </div>

        <div className="group">
            <div className="card white">
            <a target="_blank" href="/Collage-Poetics-P2.pdf">
            <div className="link">
                <div className="blocktext">P2 Slides<br></br>
                1 block • 1 week ago
                </div>
            </div>
</a>


            </div>
        </div>



        </div>

    </div>
    <Typing4 />
    <footer>
        <div className="websitewiki">
        This website is made to house the syllabus and the archive of Yale MFA course Collage Poetics’ spring 2023 semester. It launched the first day of the course 1/23/23 and will reveal itself fully through 4/24/23 the final day of the course.
        </div>
        <div>

        </div>
    </footer>
  </div>
  </div>
  </>
  )
}

export default HomePage