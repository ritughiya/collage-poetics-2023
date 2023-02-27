import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Typing2 from "../components/Typing2"

function Week4() {



  return (
    <>
    <div className="week week4">
    <Head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
    <title>collage poetics 2023</title>
    </Head>
  <div className="text">
  <div className="cloudheader">

<img src="/cloud.png" layout="fill"></img>

</div>
    <div className="header">
        <div className="head">Collage Poetics</div>
    <div className="subhead">Week 4 - Presentations on Work in Progress</div>
    </div>

    <div className="portal next">
        <a href="/">
            Next Week
        </a>
    </div>

    <div className="portal last">
        <a href="/week3">
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
            Syllabus
            <div className="card default">
            <a target="_blank" href="https://docs.google.com/document/d/1FAHL7zy8U_gcXnkgR9roEQUo_wpfH9uXnH4tzgRgv_M/edit?usp=sharing">
            <div className="link"></div>
</a>
            </div>
            
        </div>
        </div>

        <div className="row">

        <div className="group">
            
           Download Figma
            <div className="card white">
            <a target="_blank" href="https://www.figma.com/">
            <div className="link">

            <div className="nodal">
                    <div className="dot"></div>
                </div>
                <div className="point">

                </div>

            </div>
</a>


            </div>
        </div>

        <div className="group">
            On Motivation by Charles Broskoski
            <div className="card black">
            <a target="_blank" href="https://www.are.na/blog/on-motivation">
            <div className="link">


            </div>
</a>


            </div>
        </div>



        </div>

    </div>
    <Typing2 />
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

export default Week4