import React from "react";
import '../Styles/Home.css';
import img1 from '../Assert/img/mine.png';
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";


const AnimatedCounter= ({courses})=>{
    const [count, setCount] = useState(0);

    useEffect(() => {
        const targetCount = parseFloat(courses.percent);
        const duration = 1400;
        const increment = (targetCount / (duration / 50)) || 1;

        const interval = setInterval(()=>{
            if(count < targetCount){
                setCount((prevCount)=> Math.min(prevCount + increment,targetCount));
            }
            else{
                clearInterval(interval);
            }
        }, 50);

        return()=> clearInterval(interval);
    }, [count, courses.percent]);

    return(
        <div>
            <p style={{color: courses.color}}>{count.toFixed(0)}%</p>
        </div>
    )
}
//  const OneByOneDisplay =({completingProgress})=>{
 
//     const [display, setDisplay] = useState([]);

//     useEffect(()=> {
//         const delay = 500;
//         const displayOnebyOneDisplay = async() => {
//            for(let i = 0; i < completingProgress.length; i++){
//             await new Promise(resolve => setTimeout(resolve, delay));
//             setDisplay(prevItem => [...prevItem, completingProgress[i]]);
//            }
//         }
//         displayOnebyOneDisplay();
//     },[completingProgress])

//     return(
//         <div>
//             {display.map((item, index)=>(
//                 <div key={index} style={{transition: 'opacity 0.5s', opacity: 1}}>
//                     Percent: {item.percent}, Color: {item.color}
//                 </div>
//             ))}
//         </div>
//     )
//  };

  

const completingProgress = [
    {
        name: 'Total Grades',
        percent: '50%',
        number: '120',
        color: 'rgb(65, 42, 168)',
        animationDuration: '0.5s',
        animationDelay: '0s'
    },
    {
        name: 'Total Courses',
        percent: '80%',
        number: '140',
        color: 'rgb(0, 172, 0)',
        animationDuration: '0.5s',
        animationDelay: '0.5s'
    },
    {
        name: 'Total Hours',
        percent: '60%',
        number: '100',
        color: 'rgb(247, 0, 82)',
        animationDuration: '0.5s',
        animationDelay: '1s'
    },

]
const noticeBoard = [

    {    
     title: "New Teacher",
     notice: "It is a long established fact that a reader will be...",
    },

    {
     title: "New Fees Structure",
     notice: "It is a long established fact that a reader will be..."
    },
    {
    title: "New Fees Structure",
    notice: "It is a long established fact that a reader will be..."
    }
 
]
const courses = [
    {
        title: 'Business',
        percent: '80%',
        color: '',
        moi: 'mio'
    },
    {
        title: 'Computer Science',
        percent: '50%',
        color: '',
        moi: 'mio'
    },
    {
        title: 'Mathematics',
        percent: '70%',
        color: '',
        moi: 'mio'
    },
    {
        title: 'Data Science',
        percent: '40%',
        color: '',
        moi: 'mio'
    },
    {
        title: 'Computer Eng',
        percent: '61%',
        color: '',
        moi: 'mio'
    },
    
]



const progressAnimetion = keyframes`
0%{
    width: 0%;
}
100%{
    width: ${(props)=> props.percent};
}
`;

const ProgressBar = styled.div`
border-radius: 20px;
background-color: ${(props)=> props.color};
width: ${(props)=> props.percent};
height: 5px;
animation: ${progressAnimetion} 2s ease-in-out;
`;


const completeAnimetion = keyframes`
0%{
    width: 0%;
}
100%{
    width: ${(props)=> props.percent};
}
`;

const CompleteBar = styled.div`
border-radius: 20px;
background-color: ${(props)=> props.color};
width: ${(props)=> props.percent};
height: 4.1px;
animation: ${completeAnimetion} 2s ease-in-out;
`;

const popUpAnimation = keyframes`
0%{
   opacity: 0;
}
100%{
    opacity: 1;
}
`;

const Popup = styled.div`
border-radius: 50%;
text-align: center;
display: block;
padding: 7px 12px;
background-color: ${(props)=> props.color};
animation: ${popUpAnimation} ${(props)=> props.animationDuration} forwards;
animation-delay: ${(props)=> props.animationDelay};
`;



const Home =()=>{

     const [moi, setMoi] = useState([
    { name: 'Andrew', percent: '20' },
    { name: 'Money', percent: '50' },
    { name: 'Cash', percent: '90' },
  ]);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % moi.length);
    }, 2000); // Change the interval time (in milliseconds) according to your needs

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [moi.length]);
   
    courses.forEach(course => {
        if(parseInt(course.percent) < 60){
            course.color = 'rgb(247, 0, 82)';
        }
        else{
            course.color = '#0000ff';
        }
    })
    
    return(
        <div className="home">

            <div className="flex">

            <div className="container1">
                {completingProgress.map((complete, index)=>(
                 
                 <div>
                    <div className="section" >
                    <div className="flex">
                    <Popup color={complete.color} animationDuration={complete.animationDuration} animationDelay={complete.animationDelay}><i className="fas fa-book" style={{color: '#fff'}}></i></Popup>
                    <div className="title"><div>{complete.name}</div><h5>{complete.number}</h5></div>
                    
                    </div>
                    <div className="outer"><CompleteBar key={index} percent={complete.percent} color={complete.color} /></div>

                    <div className="flex2">
                        <h5><span style={{ color: complete.color }}><i className="fas fa-bars-progress"></i></span> + 15.0 %</h5>
                        <div className="p">Congratulations</div>
                    </div>
                </div>

                 </div>

                ))}
            </div>

            <div className="container2">
                <div className="img"><img src={img1} alt="" /></div>
                <div className="info">
                    <div><h6>Take Advance Courses To Achive Your Goal !</h6></div>
                    <div><p>It is a long established fact that a reader will be distracted of a page when looking at it's layout.</p></div>
                </div>
                <div className="btn"><button>Start Now!</button></div>
            </div>
            
            <div className="container3">

                <div className="section">
                    <div className="title"><p>Notice Board</p><button>View All</button></div>
                    <div className="notices">
                        {noticeBoard.map((notices)=> (
                        <div className="flex">
                            <div className="icon"><i className="fas fa-user"></i></div>
                        <div className="info">
                            <div className="head">
                             <div><h5>{notices.title}</h5></div>
                             <div className="time">Just Now</div>
                            </div>

                            <div><p>{notices.notice}</p></div>
                        </div>
                        
                        </div>
                        ))}
                    </div>
                </div>


                <div className="section2">
                    <div className="flex">
                        <div className="title">TBD</div>
                         <div className="animated-array-container">
      <div className="array-set active">
        <p>Name: {moi[currentSetIndex].name}</p>
        <p>Percent: {moi[currentSetIndex].percent}</p>
      </div>
    </div>
                    </div>
                    <div className="courses">

                    </div>
                </div>
            </div>

        </div>


        <div className="flex2">
           <div className="container1">
            <div className="maintitle">
                <div className="name"><h6>Your Progress</h6></div>
                <div className="btn"><button>View All</button></div>
                </div>
           
           <div className="progress">
            {courses.map((course, index)=>(
                <div className="courses">
                    <div className="title">{course.title}
                    </div>
                    <div className="percent">
                        <div className="bar">
                            <div className="outer-bar"><ProgressBar key={index} percent={course.percent} color={course.color}/></div>
                        </div>
                        <div className="number">
                            <AnimatedCounter key={index} courses={course}/></div>
                    </div>
                </div>
            ))}
           </div>
           </div>

           <div className="container2">
             <div className="circle">
                <div className="main-circle">
                    <div className="outer"><div className="inner"></div></div>
                </div>
             </div>
           </div>
        </div>
        
        </div>
    );
};
export default Home;