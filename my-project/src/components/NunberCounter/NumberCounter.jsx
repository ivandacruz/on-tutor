// import React from 'react'
import CountUp from "react-countup";

const NumberCounter = () => {
    return (
        <div className="bg-secondary text-white py-12">
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center justify-center">
                    <p>
                        <CountUp 
                            start={0} 
                            end={898} 
                            duration={3} 
                            enableScrollSpy={true} 
                            scrollSpyOnce={true} 
                        />
                    </p>
                    <p>Expert tutors</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p>
                        <CountUp
                            end={20000}
                            separator=","
                            suffix="+"
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </p>
                    <p>Expert tutors</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p>
                        <CountUp
                            end={298}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true} 
                        />
                    </p>
                    <p>Expert tutors</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p>
                        <CountUp
                            end={72878}
                            separator=","
                            suffix="+"
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true} 
                        />
                    </p>
                    <p>Expert tutors</p>
                </div>
            </div>
        </div>
    )
}

export default NumberCounter
